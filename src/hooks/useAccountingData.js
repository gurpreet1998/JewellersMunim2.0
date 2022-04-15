import axiosinstance from '_services/AxiosInstance';
import { useQuery } from 'react-query';

let API_URI = process.env.REACT_APP_API_URI;

export const fetchTodaysStatements = ({ queryKey }) => {
  const merchantId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetTodaysStatement?merchantId=${merchantId}`
  );
  // .then(r => r);
};

const fetchLenders = ({ queryKey }) => {
  const lenderId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetLendersNames?lenderId=${lenderId}`
  );
};

export const useLendersData = lenderId => {
  return useQuery(['cml-lenders', lenderId], fetchLenders, {
    staleTime: 60000,
    refetchIntervalInBackground: true
  });
};

const fetchBanks = ({ queryKey }) => {
  const lenderId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetBankNames?lenderId=${lenderId}`
  );
};

export const useBanksData = lenderId => {
  return useQuery(['cml-banks', lenderId], fetchBanks, {
    staleTime: 60000,
    refetchIntervalInBackground: true
  });
};

const fetchUnreconciledCMLData = ({ queryKey }) => {
  const bankAccountId = queryKey[1];
  return axiosinstance
    .get(
      `${API_URI}/Accounting/GetUnReconciledCMLData?bankAccountId=${bankAccountId}`
    )
    .then(r => r.data?.data?.result);
};

export const useUnreconciledCMLData = bankAccountId => {
  return useQuery(
    ['unreconciled-cml-results', bankAccountId],
    fetchUnreconciledCMLData,
    {
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );
};

const fetchLoanDetailsById = ({ queryKey }) => {
  const loanId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetLoanDetailsByLoanId?loanId=${loanId}`
  );
};

export const useLoanDetails = loanId => {
  return useQuery(['loan-details', loanId], fetchLoanDetailsById, {
    staleTime: 300000, // 5 min
    cacheTime: 600000, // 10 min
    refetchIntervalInBackground: true
  });
};

const fetchLoanTransactions = ({ queryKey }) => {
  const loanId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetLoanTransactionData?loanId=${loanId}`
  );
};

export const useLoanTransactionsData = loanId => {
  return useQuery(['loan-transactions', loanId], fetchLoanTransactions, {
    staleTime: 60000, // 1 min
    cacheTime: 120000, // 2 min
    refetchIntervalInBackground: true
  });
};

const fetchPaymentBatchTypeSelection = () => {
  return axiosinstance.get(
    `${API_URI}/PaymentBatch/GetPaymentBatchTypeSelection`
  );
};

export const usePaymentBatchTypeSelectionData = () => {
  return useQuery(
    ['debit-credit-payment-batch-types'],
    fetchPaymentBatchTypeSelection,
    {
      staleTime: 60000, // 1 min
      refetchIntervalInBackground: true
    }
  );
};

const fetchPaymentBatchType = () => {
  return axiosinstance.get(`${API_URI}/PaymentBatch/GetPaymentBatchType`);
};

export const usePaymentBatchTypeData = () => {
  return useQuery(
    ['cash-check-money-order-payment-batch-type'],
    fetchPaymentBatchType,
    {
      staleTime: 60000, // 1 min
      refetchIntervalInBackground: true
    }
  );
};

const fetchPaymentBatch = ({ queryKey }) => {
  const paymentBatchTypeId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/PaymentBatch/GetPaymentBatch?paymentBatchTypeId=${paymentBatchTypeId}`
  );
};

export const usePaymentBatchData = paymentBatchTypeId => {
  return useQuery(
    ['debit-credit-payment-batch-type', paymentBatchTypeId],
    fetchPaymentBatch,
    {
      staleTime: 60000, // 1 min
      refetchIntervalInBackground: true
    }
  );
};

const fetchReconciledCardData = ({ queryKey }) => {
  const paymentBatchId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetReconciledDataForDebitCreditCard?paymentBatchId=${paymentBatchId}`
  );
};

export const useReconciledCardData = paymentBatchId => {
  return useQuery(
    ['debit-credit-reconciled-data', paymentBatchId],
    fetchReconciledCardData
  );
};

const fetchUnreconciledCardData = ({ queryKey }) => {
  const paymentBatchId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetUnReconciledDataForDebitCreditCard?paymentBatchId=${paymentBatchId}`
  );
};

export const useUnreconciledCardData = paymentBatchId => {
  return useQuery(
    ['debit-credit-unreconciled-data', paymentBatchId],
    fetchUnreconciledCardData
  );
};

const fetchBorrowerVerification = ({ queryKey }) => {
  const loanId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Loan/BorrowerVerification?loanId=${loanId}`
  );
};

export const useBorrowerVerificationData = loanId => {
  return useQuery(['borrower-verification', loanId], fetchBorrowerVerification);
};

const fetchReconciledCashCheckMoneyOrderData = ({ queryKey }) => {
  const paymentBatchId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetReconciledDataForCashCheckAndMoneyOrder?paymentBatchId=${paymentBatchId}`
  );
};

export const useReconciledCashCheckMoneyOrderData = paymentBatchId => {
  return useQuery(
    ['cash-check-money-order-reconciled-data', paymentBatchId],
    fetchReconciledCashCheckMoneyOrderData,
    {
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );
};

const fetchUnreconciledCashCheckMoneyOrderData = ({ queryKey }) => {
  const paymentBatchId = queryKey[1];
  return axiosinstance.get(
    `${API_URI}/Accounting/GetUnReconciledDataForCashCheckAndMoneyOrder?paymentBatchId=${paymentBatchId}`
  );
};

export const useUnreconciledCashCheckMoneyOrderData = paymentBatchId => {
  return useQuery(
    ['cash-check-money-order-unreconciled-data', paymentBatchId],
    fetchUnreconciledCashCheckMoneyOrderData,
    {
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );
};

// const postMatchedCCMORecords = ({ queryKey }, data) => {
//   const paymentBatchId = queryKey[1];
//   return axiosinstance.post(
//     `${API_URI}/Accounting/MatchRecordsForCashCheckAndMoneyOrder?paymentBatchId=${paymentBatchId}`,
//     data
//   );
// };
//
// export const usePostMatchedCCMOData = () => {
//   return useMutation(postMatchedCCMORecords);
// };
