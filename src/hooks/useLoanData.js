import { useQuery } from 'react-query';
import axiosinstance from '_services/AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

const fetchLoanApiData = (apiFuncName, merchantId) => {
  return axiosinstance.get(
    `${API_URI}/Loan/${apiFuncName}?merchantId=${merchantId}`
  );
};

export const useMerchantLoanData = merchantId => {
  return useQuery(
    ['merchant-loan', merchantId],
    () => fetchLoanApiData('GetMerchantLoanData', merchantId),
    {
      cacheTime: 60000,
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );
};

export const useMerchantMonthWiseData = merchantId => {
  return useQuery(
    ['merchant-month-wise', merchantId],
    () => fetchLoanApiData('GetMerchantDataMonthWise', merchantId),
    {
      staleTime: 30000,
      refetchIntervalInBackground: true
    }
  );
};

export const fetchLoanStatusWiseData = (merchantId, statusId) => {
  return axiosinstance.get(
    `${API_URI}/Loan/GetLoanDataStatusWise?merchantId=${merchantId}&statusId=${statusId}`
  );
};

const fetchLoanInformation = ({ queryKey }) => {
  const loanId = queryKey[1];
  return axiosinstance.get(`${API_URI}/Loan/GetLoanInformation?id=${loanId}`);
};

export const useLoanInformationData = loanId => {
  return useQuery(['loan-information', loanId], fetchLoanInformation, {
    cacheTime: 60000,
    staleTime: 60000,
    refetchIntervalInBackground: true
  });
};

const fetchLoanBucketDetails = ({ queryKey }) => {
  const loanId = queryKey[1];
  return axiosinstance.get(`${API_URI}/Loan/GetLoanBucketDetails?id=${loanId}`);
};

export const useLoanBucketData = loanId => {
  return useQuery(['loan-bucket-details', loanId], fetchLoanBucketDetails, {
    cacheTime: 60000,
    staleTime: 60000,
    refetchIntervalInBackground: true
  });
};
