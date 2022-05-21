import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class ApiRoleService extends BaseService {
  #controller = 'ApiRole/';

  getAll = () => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'GetApiRoles'
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'AddApiRole',
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  delete = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'DeleteApiRole',
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };
}
