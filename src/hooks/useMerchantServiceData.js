import { useQuery } from 'react-query';
import axiosinstance from '_services/AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

const fetchMerchantHierarchy = () => {
  return axiosinstance.get(`${API_URI}/Merchant/GetMerchantHierarchy`);
};

export const useMerchantHierarchyData = () => {
  return useQuery(['merchant-hierarchy'], () => fetchMerchantHierarchy(), {
    cacheTime: 60000,
    staleTime: 30000
  });
};

const fetchMerchantChildrenDetails = merchantId => {
  return axiosinstance.get(
    `${API_URI}/Merchant/getMerchantChildrenDetails?merchantId=${merchantId}`
  );
};

export const useMerchantChildrenDetailsData = merchantId => {
  return useQuery(
    ['merchant-children', merchantId],
    () => fetchMerchantChildrenDetails(merchantId),
    {
      cacheTime: 60000,
      staleTime: 30000
    }
  );
};
