import axios from "axios";
import { getQueryString, trimStrings } from "@/helper/common";
import addKeyLocalStorage from "@/helper/localStorage";
import {
  encryptAes256CBC,
  decryptAes256CBC,
} from "@/helper/EncryptionFunctions";

function cleanUp() {
  window.localStorage.clear();
}

const token = () => {
  let isRefreshToken = false;

  const faultyDetection = () => {
    window.localStorage.clear();
  };

  const checkToken = async (token) => {
    let isBool = false;
    const headers = {};
    const dataString = JSON.parse(
      window.localStorage.getItem(addKeyLocalStorage("data"))
    );
    headers.authorization = `Bearer ${token}`;
    try {
      await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_API_URL + "/AppUsers/user/getDetailInfo",
        headers,
        data: {
          id: dataString.stationsId,
        },
      }).then(() => {
        isBool = true;
      });
    } catch {}

    return isBool;
  };

  return {
    refreshToken: () => {
      // Check if RefreshToken has been called yet. If it has, do not call it again!
      if (isRefreshToken) {
        return;
      }

      isRefreshToken = true;
      const dataString = JSON.parse(
        window.localStorage.getItem(addKeyLocalStorage("data"))
      );
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_API_URL + "/AppUsers/user/refreshToken",
        data: {
          token: dataString.token,
        },
      })
        .then(async (result) => {
          const data = result.data;
          const newData = { ...dataString };
          const { newToken } = data.data;
          newData.token = newToken;
          newData.userToken = newToken;

          // Call API: /Stations/advanceUser/getDetailById to check if the token has expired or for other reasons.
          const isCheckToken = await checkToken(newToken);
          if (isCheckToken) {
            window.localStorage.setItem(
              addKeyLocalStorage("data"),
              JSON.stringify(newData)
            );
            window.location.href = "/";
            isRefreshToken = false;
            return;
          }

          // If the token encounters any other issue, the 'faultyDetection' function will be executed.
          faultyDetection();
        })
        .catch((error) => {
          const { response = {} } = error;
          const result = response.data ? response.data : null;
          if (!result) {
          } else {
            const { statusCode, message: data } = result;
            faultyDetection();
          }
        });
    },
  };
};

const { refreshToken } = token();
function send({
  method = "get",
  path,
  data = null,
  query = null,
  headers = {},
  newUrl,
  token,
  isUsingToken = true,
}) {
  return new Promise((resolve) => {
    let url =
      process.env.NEXT_PUBLIC_API_URL + `${path}${getQueryString(query)}`;
    if (newUrl) {
      url = `${newUrl}${getQueryString(query)}`;
    }
    const dataString = window.localStorage.getItem(addKeyLocalStorage("data"));
    if (dataString && isUsingToken) {
      const newData = JSON.parse(dataString);
      headers.authorization = `Bearer ${newData.token}`;
       console.log("🔑 Token hiện tại:", newData.token);
    }
    if (token && isUsingToken) {
      headers.authorization = `Bearer ${token}`;
    }
    let encryption = data;
    if (process.env.NEXT_PUBLIC_RUNTIME_MODE === "production") {
      let newObj = {};
      for (let key in encryption) {
        if (data.hasOwnProperty(key)) {
          newObj[process.env.NEXT_PUBLIC_KEY_PAYLOAD + key] = encryption[key]; // Add 'key' prefix to each key
        }
      }
      const newStringData = JSON.stringify(trimStrings(newObj));
      encryption = encryptAes256CBC(newStringData); // mã hoá gửi đi
    }

    axios({
      method,
      url,
      data: encryption,
      headers,
    })
      .then((result) => {
        const data = result.data;
        let decryption = data;
        if (data.idEn) {
          decryption = JSON.parse(decryptAes256CBC(data)); // mã hoá lấy về
        }
        let newObj = {};
        for (let key in decryption) {
          if (decryption.hasOwnProperty(key)) {
            // Remove 'key' prefix from each key
            let newKey = key.startsWith(process.env.NEXT_PUBLIC_KEY_PAYLOAD)
              ? key.slice(process.env.NEXT_PUBLIC_KEY_PAYLOAD.length)
              : key;
            newObj[newKey] = decryption[key];
          }
        }
        return resolve(newObj);
      })
      .catch((error) => {
        const { response = {} } = error;
        let result = response.data ? response.data : null;
        if (result?.idEn) {
          result = decryptAes256CBC(result); // mã hoá lấy về
        }
        const pageUrl = new URL(window.location.href); // Lấy URL hiện tại

        let newObj = {};
        for (let key in result) {
          if (result.hasOwnProperty(key)) {
            // Remove 'key' prefix from each key
            let newKey = key.startsWith(process.env.NEXT_PUBLIC_KEY_PAYLOAD)
              ? key.slice(process.env.NEXT_PUBLIC_KEY_PAYLOAD.length)
              : key;
            newObj[newKey] = result[key];
          }
        }
        result = newObj;
        if (!result) {
        } else {
          const { statusCode, message: data } = result;

          if (statusCode === 401) {
            setTimeout(() => {
              cleanUp();
            }, 1000);
          } else if (
            (statusCode === 401 && data === "Unauthorized" && isUsingToken) ||
            (statusCode === 403 && data === "InvalidToken" && isUsingToken)
          ) {
            cleanUp();
          } else if (statusCode === 505) {
            refreshToken();
          } else if (statusCode === 500) {
            return resolve(result);
          } else {
            return resolve(result);
          }
        }
      });
  });
}
export default {
  send,
};
