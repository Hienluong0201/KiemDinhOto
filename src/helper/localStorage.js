if (!process.env.NEXT_PUBLIC_PROJECT_NAME) {
  console.log("No variable NEXT_PUBLIC_PROJECT_NAME! file .env");
}

const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || "";

const addKeyLocalStorage = (key) => {
  return PROJECT_NAME + "_" + key;
};

export default addKeyLocalStorage;
