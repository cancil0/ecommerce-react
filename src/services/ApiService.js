import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class ApiService extends BaseService {
  #controller = 'Api/';

  getAll = () => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetApis"
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'AddApi',
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  update = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'UpdateApi',
      data: data
    };
    return this.putAsync(baseServiceModel);
  };

  delete = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'DeleteApi',
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };
}
