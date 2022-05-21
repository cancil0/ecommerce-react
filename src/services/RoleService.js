import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class RoleService extends BaseService {
  #controller = 'Role/';

  getAll = () => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'GetRoles'
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "AddRole",
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  update = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "UpdateRole",
      data: data
    };
    return this.putAsync(baseServiceModel);
  };

  delete = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "DeleteRole",
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };
}
