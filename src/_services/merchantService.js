let API_URI = process.env.REACT_APP_API_URI;
import axiosinstance from '_services/AxiosInstance';

export const merchantService = {
  getMerchantChildrenDetails: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Merchant/getMerchantChildrenDetails?merchantId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getMerchantHierarchy: function () {
    return new Promise(resolve => {
      axiosinstance.get(`${API_URI}/Merchant/getMerchantHierarchy`).then(r => {
        resolve(r.data);
      });
    });
  },

  getAllMerchants: function () {
    return new Promise(resolve => {
      axiosinstance.get(`${API_URI}/Merchant/GetAllMerchants`).then(r => {
        resolve(r.data);
      });
    });
  }
};
