import BaseService from "../base/service/BaseService";
import BaseServiceModel from "../base/service/BaseServiceModel";

export default class MerchantService extends BaseService {
  #controller = 'Merchant/';

  get = (merchantId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GetMerchant?merchantId=" + merchantId
    };
    return this.getAsync(baseServiceModel);
  };

  add = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "AddMerchant",
      data: data
    };
    return this.postAsync(baseServiceModel);
  };

  update = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "UpdateMerchant",
      data: data
    };
    return this.putAsync(baseServiceModel);
  };

  delete = (merchantId) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "DeleteMerchant?merchantId=" + merchantId
    };
    return this.deleteAsync(baseServiceModel);
  };

  giveFeedbackToMerchant = (data) => {
    let baseServiceModel = new BaseServiceModel();
    baseServiceModel = {
      apiRoute: this.#controller + "GiveFeedbackToMerchant",
      data: data
    };
    return this.putAsync(baseServiceModel);
  };
}
