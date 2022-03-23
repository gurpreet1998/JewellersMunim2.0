import axiosinstance from '_services/AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

export const depositService = {
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

// pending settlement services

export const pendingSettlementService = {
  getMerchantSettlementSummary: function () {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/Merchant/GetMerchantSettlementSummary`)
        .then(r => {
          resolve(r.data);
        });
    });
  },
  GetMerchantSettlementFindName: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Merchant/GetMerchantSettlementFindName?merchanctId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },
  getMerchantSettlementForCMLPayment: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Merchant/GetMerchantSettlementForCMLPayMent?merchanctId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },
  GetMerchantSettlementForCPPayMent: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Merchant/GetMerchantSettlementForCPPayMent?merchanctId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },
  GetMerchantSettlementForCMLRefund: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Merchant/GetMerchantSettlementForCMLRefund?merchanctId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },
  GetMerchantSettlementForCPRefund: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Merchant/GetMerchantSettlementForCPRefund?merchanctId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },

  GetMerchantSettlementPaymentCategory: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Merchant/GetMerchantSettlementPaymentCategory?merchanctId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  }
};

// debit/credit Card order service

export const DebitCreditCardService = {
  // getPaymentBatchACH: function () {
  //   return new Promise(resolve => {
  //     axiosinstance.get(`${API_URI}/Accounting/PaymentBatchACH`).then(r => {
  //       resolve(r.data);
  //     });
  //   });
  // },
  getGetReconciledDataForDebitCreditCard: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Accounting/GetReconciledDataForDebitCreditCard?paymentBatchId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getGetUnReconciledDataForDebitCreditCard: function (id) {
    return new Promise(resolve => {
      axiosinstance
        .get(
          `${API_URI}/Accounting/GetUnReconciledDataForDebitCreditCard?paymentBatchId=${id}`
        )
        .then(r => {
          resolve(r.data);
        });
    });
  },
  saveMatchRecordsForDebitCreditCard: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/MatchRecordsForDebitCreditCard?paymentBatchId=${id}`,
          data
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (MatchRecords):', err));
  },

  saveUnMatchRecordsForDebitCreditCard: function (id, data) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/UnMatchRecordsForDebitCreditCard?paymentBatchId=${id}`,
          data
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (UnMatchRecords):', err));
  },

  savePostTransactionForDebitCreditCard: function (id1) {
    return new Promise(resolve => {
      axiosinstance
        .post(
          `${API_URI}/Accounting/PostTransactionForDebitCreditCard?paymentBatchId=${id1}`
        )
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (PostTransaction):', err));
  }
};

export const DebitCreditCardPaymentBatchService = {
  getGetPaymentBatchTypeSelection: function () {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/PaymentBatch/GetPaymentBatchTypeSelection`)
        .then(r => {
          resolve(r.data);
        });
    });
  }
  // getPaymentBatch: function (id) {
  //   return new Promise(resolve => {
  //     axiosinstance
  //       .get(`${API_URI}/PaymentBatch/GetPaymentBatch?paymentBatchTypeId=${id}`)
  //       .then(r => {
  //         resolve(r.data);
  //       });
  //   });
  // }
};
