let API_URI = process.env.REACT_APP_API_URI;
import axiosinstance from 'AxiosInstance';

export const loanService = {
  getLoanDataStatusWise: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Loan/GetLoanDataStatusWise?merchantId=1&statusId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },

  /**
   * Returns the applicants contact information, including:
   *  - borrowerId
   *  - city
   *  - email
   *  - name
   *  - phone
   *  - state
   *  - street
   *  - zip
   * @param id number
   * @returns {Promise<any>}
   */
  getApplicantInfo: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Loan/GetApplicantInfo?loanAppId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getLoanOffers: function (id) {
    if (id > 0) {
      return new Promise(resolve => {
        axiosinstance
          .get(`${API_URI}/Loan/GetLoanOffers?loanAppId=${id}`)
          .then(r => {
            resolve(r.data);
          });
      });
    } else {
      return Promise.resolve([]);
    }
  }
};
