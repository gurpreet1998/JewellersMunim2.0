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
  getDepositsTableData: function () {
    return fetch(`${API_URI}/Accounting/GetDepositsTableData`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
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

export const lendersNames = {
  getLendersNames: function (id) {
    return fetch(`${API_URI}/Accounting/GetLendersNames?lenderId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
};

export const bankNames = {
  getBankNames: function (id) {
    return fetch(`${API_URI}/Accounting/GetBankNames?lenderId=${id}`)
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
