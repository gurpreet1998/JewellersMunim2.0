let API_URI = process.env.REACT_APP_API_URI;

export const loanService = {
  getLoanDataStatusWise: function (id) {
    return fetch(
      `${API_URI}/Loan/GetLoanDataStatusWise?merchantId=1&statusId=${id}`
    )
      .then(res => res.json())
      .then(data => {
        return data;
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
    return fetch(`${API_URI}/Loan/GetApplicantInfo?loanAppId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  getLoanOffers: function (id) {
    if (id > 0) {
      return fetch(`${API_URI}/Loan/GetLoanOffers?loanAppId=${id}`)
        .then(res => res.json())
        .then(data => {
          return data;
        });
    } else {
      return Promise.resolve([]);
    }
  }
};
