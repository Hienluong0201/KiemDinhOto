import Request from "./request";

export default class UserService {
  static async userCheckCriminal(data = {}, token = undefined) {
    const result = await Request.send({
      method: "POST",
      path: "/CustomerCriminalRecord/user/userCheckCriminalFromVr",
      data,
      token,
    });

    if (result?.statusCode === 200) {
      return result;
    } else {
      throw result;
    }
  }

  static async getCrimeRecords(data = {}, token = undefined) {
    const result = await Request.send({
      method: "POST",
      path: "/CustomerCriminalRecord/user/getCrimeRecords",
      data,
      token,
    });

    if (result?.statusCode === 200) {
      return result;
    } else {
      throw result;
    }
  }
}
