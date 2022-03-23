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
