import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class UserRoleService extends BaseService {
  #controller = 'UserRole/';

  getAll = () => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetUserRoles"
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "AddUserRole",
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  delete = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "DeleteUserRole",
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };
}
