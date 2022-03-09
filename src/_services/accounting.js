import axiosinstance from '_services/AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

export const accountingService = {
  getTodaysStatement: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetTodaysStatement?merchantId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  }
};

export const depositService = {
  getLendersNames: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetLendersNames?lenderId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getBankNames: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetBankNames?lenderId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getGetReconciledCMLData: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetReconciledCMLData?bankAccountId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getGetUnReconciledCMLData: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetUnReconciledCMLData?bankAccountId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  // saveMatchRecords: function () {
  //   fetch(`${API_URI}/Accounting/MatchRecords`, setPostRequestOptions()).catch(
  //     err => console.log('ERROR (MatchRecords):', err)
  //   );
  // },

  saveMatchRecords: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(`${API_URI}/Accounting/MatchRecords?bankAccountId=${id}`, data)
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (MatchRecords):', err));
  },

  saveUnMatchRecords: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(`${API_URI}/Accounting/UnMatchRecords?bankAccountId=${id}`, data)
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (UnMatchRecords):', err));
  },

  savePostTransaction: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/UpdateDataForPostTransactionButton?bankAccountId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (PostTransaction):', err));
  }
};

export const transactionHistoryService = {
  getTransactionHistory: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetLoanTransactionData?loanId=${id}`)
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

  updateBorrowerVerification: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Loan/UpdateBorrowerDetails?loanId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (UpdateBorrowerDetails):', err));
  }
};

export const loanDetailsByLoanId = {
  getLoanDetailsByLoanId: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetLoanDetailsByLoanId?loanId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  }
};

//ACH Services

export const ACHService = {
  getPaymentBatchACH: function () {
    return new Promise(resolve => {
      axiosinstance.get(`${API_URI}/Accounting/PaymentBatchACH`).then(r => {
        resolve(r.data);
      });
    });
  },
  getGetReconciledACHData: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Accounting/GetReconciledACHData?paymentBatchId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getGetUnReconciledACHData: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Accounting/GetUnReconciledACHData?paymentBatchId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },

  saveMatchACHRecords: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/MatchACHRecords?paymentBatchId=${id}`,
          data
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (MatchRecords):', err));
  },

  saveUnMatchACHRecords: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/UnMatchACHRecords?paymentBatchId=${id}`,
          data
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (UnMatchRecords):', err));
  },

  savePostACHTransaction: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/PostTransactionForACH?paymentBatchId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (PostTransaction):', err));
  }
};

export const searchService = {
  getSearchResults: function (id, UserId) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Loan/Accountsearch?input=${id}&userId=${UserId}`)
        .then(r => {
          resolve(r.data);
        });
    });
  }
};

export const limitSearchService = {
  getLimitAccountSearch: function (input, UserId, globalMerchantId) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Loan/LimitAccountSearch?input=${input}&userId=${UserId}&globalMerchantId=${globalMerchantId}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  }
};
// cash check money order service

export const CashCheckMoneyOrderService = {
  // getPaymentBatchACH: function () {
  //   return new Promise(resolve => {
  //     axiosinstance.get(`${API_URI}/Accounting/PaymentBatchACH`).then(r => {
  //       resolve(r.data);
  //     });
  //   });
  // },
  getGetReconciledDataForCashCheckAndMoneyOrder: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Accounting/GetReconciledDataForCashCheckAndMoneyOrder?paymentBatchId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getGetUnReconciledDataForCashCheckAndMoneyOrder: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Accounting/GetUnReconciledDataForCashCheckAndMoneyOrder?paymentBatchId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },
  saveMatchRecordsForCashCheckAndMoneyOrder: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/MatchRecordsForCashCheckAndMoneyOrder?paymentBatchId=${id}`,
          data
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (MatchRecords):', err));
  },

  saveUnMatchRecordsForCashCheckAndMoneyOrder: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/UnMatchRecordsForCashCheckAndMoneyOrder?paymentBatchId=${id}`,
          data
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (UnMatchRecords):', err));
  },

  savePostTransactionForCashCheckAndMoneyOrder: function (id1, id2) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/PostTransactionForCashCheckAndMoneyOrder?paymentBatchId=${id1}&paymentBatchtypeId=${id2}`
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (PostTransaction):', err));
  }
};

export const CashCheckMoneyOrderPaymentBatchService = {
  getPaymentBatchType: function () {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/PaymentBatch/GetPaymentBatchType`)
        .then(r => {
          resolve(r.data);
        });
    });
  },
  getPaymentBatch: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/PaymentBatch/GetPaymentBatch?paymentBatchTypeId=${id}`)
        .then(r => {
          resolve(r.data);
        });
    });
  }
};
