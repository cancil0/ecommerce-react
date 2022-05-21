import { translate } from "../i18n/i18n"

export default class BaseService {
  #baseUrl = process.env.REACT_APP_BASEURL;
  #language =
    sessionStorage.getItem("cultereInfo") ??
    (navigator.language === "tr-TR" || navigator.language === "en-US"
      ? navigator.language
      : "en-US");

  #headers = {
    "Content-Type": "application/json",
    "Accept-Language": this.#language,
    Accept: "application/json",
    Authorization: `${sessionStorage.getItem("token")}`,
  };

  getAsync = async (baseServiceModel) => {
    var path = this.#baseUrl + baseServiceModel.apiRoute;
    let requestInit = {
      method: "GET",
      headers: baseServiceModel.header ?? this.#headers,
      body: baseServiceModel.data && JSON.stringify(baseServiceModel.data),
      cache: "no-cache",
    };
    let request = new Request(path, requestInit);
    const response = fetch(request)
      .then((res) => res.json())
      .then((res) => this.#showErrorMessage(res))
      .catch(() => {
        alert(this.#errorResponse.message);
        return this.#errorResponse;
      });
    return await response;
  };

  postAsync = async (baseServiceModel) => {
    var path = this.#baseUrl + baseServiceModel.apiRoute;
    let requestInit = {
      method: "POST",
      headers: baseServiceModel.header ?? this.#headers,
      body: baseServiceModel.data && JSON.stringify(baseServiceModel.data),
      cache: "no-cache",
    };
    let request = new Request(path, requestInit);
    const response = fetch(request)
      .then((res) => res.json())
      .then((res) => this.#showErrorMessage(res))
      .catch(() => {
        alert(this.#errorResponse.message);
        return this.#errorResponse;
      });
    return await response;
  };

  putAsync = async (baseServiceModel) => {
    var path = this.#baseUrl + baseServiceModel.apiRoute;
    let requestInit = {
      method: "PUT",
      headers: baseServiceModel.header ?? this.#headers,
      body: baseServiceModel.data && JSON.stringify(baseServiceModel.data),
      cache: "no-cache",
    };
    let request = new Request(path, requestInit);
    const response = fetch(request)
      .then((res) => res.json())
      .then((res) => this.#showErrorMessage(res))
      .catch(() => {
        alert(this.#errorResponse.message);
        return this.#errorResponse;
      });
    return await response;
  };

  deleteAsync = async (baseServiceModel) => {
    var path = this.#baseUrl + baseServiceModel.apiRoute;
    let requestInit = {
      method: "DELETE",
      headers: baseServiceModel.header ?? this.#headers,
      body: baseServiceModel.data && JSON.stringify(baseServiceModel.data),
      cache: "no-cache",
    };
    let request = new Request(path, requestInit);
    const response = fetch(request)
      .then((res) => res.json())
      .then((res) => this.#showErrorMessage(res))
      .catch(() => {
        alert(this.#errorResponse.message);
        return this.#errorResponse;
      });
    return await response;
  };

  #errorResponse = {
    statuscode: 500,
    message: translate('General.Error'),
    result: null,
    isFailed: true,
  };

  #showErrorMessage = (response) => {
    if (
      response.statuscode &&
      (response.statuscode < 200 || response.statuscode > 299)
    ) {
      alert(response.message);
      response.isFailed = true;
    }
    response.isFailed = false;
    return response;
  };
}
