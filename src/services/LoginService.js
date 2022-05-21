import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class LoginService extends BaseService {
  #language =
    sessionStorage.getItem("cultereInfo") ??
    (navigator.language === "tr-TR" || navigator.language === "en-US"
      ? navigator.language
      : "en-US");
  #controller = "Login/";
  #header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": this.#language,
  };

  login = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "Login",
      data: data,
      header: this.#header,
    };
    return this.postAsync(baseServiceModel);
  };

  forgotMyPassword = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "ForgotMyPassword",
      data: data,
      header: this.#header,
    };
    return this.postAsync(baseServiceModel);
  };
}
