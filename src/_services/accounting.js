import { setPostRequestOptions } from './baseService';
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
  getDepositsTableData: function (id) {
    return fetch(
      `${API_URI}/Accounting/GetDepositsTableData?bankAccountId=${id}`
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
    // .catch(err => console.log('ERROR (getDepositsTableData):', err));
  },

  getLendersNames: function (id) {
    return fetch(`${API_URI}/Accounting/GetLendersNames?lenderId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
    // .catch(err => console.log('ERROR (getLendersNames):', err));
  },

  getBankNames: function (id) {
    return fetch(`${API_URI}/Accounting/GetBankNames?lenderId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
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
