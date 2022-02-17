import { useState, useEffect } from 'react';
import axiosinstance from 'AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

/**
 * todo: Update merchantID. Set to 1 until login implemented
 * @param merchantId number
 * @returns {[]} Object from the API response or empty array
 * @constructor
 */
const MerchantLoanData = merchantId => {
  const [loanStats, setLoanStats] = useState([]);

  useEffect(() => {
    loadUsers((merchantId = 1));
  }, []);

  const loadUsers = async () => {
    const result = await axiosinstance.get(
      `${API_URI}/Loan/GetMerchantLoanData?merchantId=${merchantId}`
    );
    setLoanStats(result.data);
  };

  return loanStats;
};

export { MerchantLoanData };
