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
}
