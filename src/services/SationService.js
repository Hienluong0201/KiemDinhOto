import Request from "./request";
export default class StationService {
  static async getNewsDetail(data = {}, token = undefined) {
    const result = await Request.send({
      method: "POST",
      path: "/StationNews/getNewsDetail",
      data,
      token,
    });

    if (result?.statusCode === 200) {
      return result;
    } else {
      throw result;
    }
  }

  static async getNewsPenaltyList(data = {}, token) {
    try {
      const result = await Request.send({
        method: "POST",
        path: "/StationNews/user/getPenaltyNewsList",
        data,
        token,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
 static async getAllStationArea() {
    try {
      const result = await Request.send({
        method: "POST",
        path: "/Stations/user/getAllStationArea", 
      });

      if (result?.statusCode === 200) {
        console.log("✅ Khu vực trả về:", result.data);
        return result.data;
      } else {
        console.error("❌ API trả về lỗi:", result);
        throw result;
      }
    } catch (error) {
      console.error("💥 Lỗi khi lấy khu vực:", error);
      throw error;
    }
  }
}
