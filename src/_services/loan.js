import { useState, useEffect } from 'react';
import axios from 'axios';

let API_URI = process.env.REACT_APP_API_URI;
//merchantID 1 until login implemented
const MerchantLoanData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      `${API_URI}/Loan/GetMerchantLoanData?merchantId=1`
    );
    setUser(result.data);
  };

  return user;
};

export { MerchantLoanData };
