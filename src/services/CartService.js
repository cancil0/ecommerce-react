import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class CartService extends BaseService {
  #controller = 'Cart/';

  getUserCart = (userId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetUserCart?userId=" + userId
    };
    return this.getAsync(baseServiceModel);
  };

  addProduct = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'AddProductToCart',
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  removeProduct = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + 'RemoveProductFromCart',
      data: data
    };
    return this.deleteAsync(baseServiceModel);
  };

  removeAllProducts = (cartId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "RemoveAllProductsFromCart?cartId=" + cartId
    };
    return this.deleteAsync(baseServiceModel);
  };
}
