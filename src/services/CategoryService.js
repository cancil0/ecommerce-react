import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class CategoryService extends BaseService {
  #controller = 'Category/';
  
  get = (categoryId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetCategory?categoryId=" + categoryId
    };
    return this.getAsync(baseServiceModel);
  };

  getAll = () => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'GetCategories'
    };
    return this.getAsync(baseServiceModel);
  };

  getSubCategories = (categoryId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetSubCategories?categoryId=" + categoryId
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "AddCategory",
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  update = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "UpdateCategory",
      data: data
    };
    return this.putAsync(baseServiceModel);
  };

  delete = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "DeleteCategory",
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };
}
