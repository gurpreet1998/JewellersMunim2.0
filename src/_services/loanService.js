let API_URI = process.env.REACT_APP_API_URI;
import axiosinstance from '_services/AxiosInstance';

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
  },

  getLoanInformation: function (id) {
    return new Promise(resolve => {
      axiosinstance

        .get(`${API_URI}/Loan/GetLoanInformation?id=${id}`)

        .then(r => {
          resolve(r.data);
        });
    });
  },

  getLoanBucketDetails: function (id) {
    return new Promise(resolve => {
      axiosinstance

        .get(`${API_URI}/Loan/GetLoanBucketDetails?id=${id}`)

        .then(r => {
          resolve(r.data);
        });
    });
  },

  getBorrowerVerification: function (id) {
    return new Promise(resolve => {
      axiosinstance

        .get(`${API_URI}/Loan/BorrowerVerification?loanId=${id}`)

        .then(r => {
          resolve(r.data);
        });
    });
  },

  updateBorrowerDetails: async function (id, data) {
    const resp = await axiosinstance.put(
      `${API_URI}/Loan/UpdateBorrowerDetails?loanId=${id}`,
      data
    );
    return resp.data;
  }
};
