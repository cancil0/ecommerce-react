import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class ProductService extends BaseService {
  #controller = 'Product/';

  get = (productId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetProduct?productId=" + productId
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "AddProduct",
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  update = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "UpdateProduct",
      data: data
    };
    return this.putAsync(baseServiceModel);
  };

  delete = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "DeleteProduct",
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };

  getCategoryProducts = (categoryId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetCategoryProducts?categoryId=" + categoryId
    };
    return this.getAsync(baseServiceModel);
  };
}
