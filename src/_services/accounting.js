import { setPostRequestOptions, setPutRequestOptions } from './baseService';
let API_URI = process.env.REACT_APP_API_URI;

export const accountingService = {
  getTodaysStatement: function (id) {
    return fetch(`${API_URI}/Accounting/GetTodaysStatement?merchantId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
};

export const depositService = {
  getLendersNames: function (id) {
    return fetch(`${API_URI}/Accounting/GetLendersNames?lenderId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  getBankNames: function (id) {
    return fetch(`${API_URI}/Accounting/GetBankNames?lenderId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  getGetReconciledCMLData: function (id) {
    return fetch(
      `${API_URI}/Accounting/GetReconciledCMLData?bankAccountId=${id}`
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  getGetUnReconciledCMLData: function (id) {
    return fetch(
      `${API_URI}/Accounting/GetUnReconciledCMLData?bankAccountId=${id}`
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  // saveMatchRecords: function () {
  //   fetch(`${API_URI}/Accounting/MatchRecords`, setPostRequestOptions()).catch(
  //     err => console.log('ERROR (MatchRecords):', err)
  //   );
  // },

  saveMatchRecords: function (id, data) {
    return fetch(
      `${API_URI}/Accounting/MatchRecords?bankAccountId=${id}`,
      setPostRequestOptions(data)
    )
      .then(response => response.json())
      .catch(err => console.log('ERROR (MatchRecords):', err));
  },

  saveUnMatchRecords: function (id, data) {
    return fetch(
      `${API_URI}/Accounting/UnMatchRecords?bankAccountId=${id}`,
      setPostRequestOptions(data)
    )
      .then(response => response.json())
      .catch(err => console.log('ERROR (UnMatchRecords):', err));
  },

  savePostTransaction: function (id) {
    fetch(
      `${API_URI}/Accounting/UpdateDataForPostTransactionButton?bankAccountId=${id}`,
      setPostRequestOptions()
    ).catch(err => console.log('ERROR (PostTransaction):', err));
  }
};

export const transactionHistoryService = {
  getTransactionHistory: function (id) {
    return fetch(`${API_URI}/Accounting/GetLoanTransactionData?loanId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  getBorrowerVerification: function (id) {
    return fetch(`${API_URI}/Loan/BorrowerVerification?loanId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  },

  updateBorrowerVerification: function (id, data) {
    fetch(
      `${API_URI}/Loan/UpdateBorrowerDetails?loanId=${id}`,
      setPutRequestOptions(data)
    )
      .then(response => response.json())
      .catch(err => console.log('ERROR (UpdateBorrowerDetails):', err));
  }
};

export const loanDetailsByLoanId = {
  getLoanDetailsByLoanId: function (id) {
    return fetch(`${API_URI}/Accounting/GetLoanDetailsByLoanId?loanId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
};
