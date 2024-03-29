import axiosinstance from '_services/AxiosInstance';

let API_URI = process.env.REACT_APP_API_URI;

export const roleBased_Permission = {
  GetPermissionsForRole: function (roleName) {
    return new Promise(resolve => {
      axiosinstance
        .get(`${API_URI}/User/GetPermissions?RoleName=${roleName}`)
        .then(r => {
          resolve(r.data);
        });
    });
  },

  getRoles: function () {
    return new Promise(resolve => {
      axiosinstance.get(`${API_URI}/User/GetRoles`).then(r => {
        resolve(r.data);
      });
    });
  }
};

export const userService = {
  saveUserDetail: function (user) {
    // Returns `loanAppId` used throughout the new app process
    // todo: need hard-stop flag returned as well

    const data = {
      FirstName: user.firstName,
      MiddleName: user.middleName,
      LastName: user.lastName,
      DOB: user.dob,
      SocialSecurityNumber: user.ssn,
      VerifySocialSecurityNumber: user.confirmSSN,
      IdNumber: user.idNumber,
      IdentificationTypeId: user.idType,
      IdIssuanceDate: user.idIssuanceDate,
      IdExpDate: user.idExpirationDate,
      CustomerId: user.CustomerId,
      AddressId: user.AddressId,
      Address1: user.Address1,
      BldStreet: user.BldStreet,
      City: user.city,
      State: user.state,
      Zip: user.zipCode,
      Email: user.email,
      Mobile: user.phone,
      HomePhone: user.altPhone,
      //hard coded until login implemented fully
      MerchantId: 1
    };
    console.log('AddApplicationInfo POST:', data);
    return new Promise(resolve => {
      axiosinstance.post(`${API_URI}/Loan/AddApplicationInfo`, data).then(r => {
        resolve(r.data);
      });
    }).catch(err => console.log('ERROR (AddApplicationInfo):', err));
  }
};

export const serviceDate = {
  saveServiceDetail: function (servicedata, loanAppId) {
    const data = {
      //"CustomerId": "",
      MonthlyIncome: servicedata.grossMonthlyIncome,
      ServiceCost: servicedata.serviceAmount,
      DateOfService: servicedata.serviceDate,
      LoanApplicationId: loanAppId,
      LoanApplicationTypeId: 1
    };

    console.log('AddPurchaseService POST:', data);

    new Promise(resolve => {
      axiosinstance.post(`${API_URI}/Loan/AddPurchaseService`, data).then(r => {
        resolve(r.data);
      });
    }).catch(err => console.log('ERROR (AddPurchaseService):', err));
  }
};

export const Disclosure = {
  saveDisclosure: function (loanAppId) {
    return new Promise(resolve => {
      axiosinstance
        .post(`${API_URI}/Loan/Disclosure?loanAppId=${loanAppId}`)
        .then(r => {
          resolve(r.data);
        });
    }).catch(err => console.log('ERROR (Disclosure):', err));
  }
};

// Get All Users API - Admin
export const Users = {
  getAllUsers: function () {
    return new Promise(resolve => {
      axiosinstance.get(`${API_URI}/User/GetUsers`).then(r => {
        resolve(r.data);
      });
    });
  },
  checkIfUserExists: async function (emailaddress) {
    const resp = await axiosinstance.get(
      `${API_URI}/User/IsUserExists?email=${emailaddress}`
    );
    return resp;
  },
  addNewUser: async function (data) {
    const resp = await axiosinstance.post(`${API_URI}/User/AddUser`, data);
    return resp;
  },
  deleteuser: async function (id) {
    const resp = await axiosinstance.delete(
      `${API_URI}/User/DeleteUser?AADId=${id}`
    );
    return resp.data;
  },
  edituser: async function (id, data) {
    const resp = await axiosinstance.put(
      `${API_URI}/User/UpdateUser?AADId=${id}`,
      data
    );
    return resp.data;
  }
};

// export const addNewUser = data => {
//   return {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   };
// };

export const saveConfirmAndPayData = {
  saveConfirmAndPayAppDetail: function (
    cardData,
    loanOfferId,
    loanAppId,
    payableTotal
  ) {
    const data = {
      LoanApplicationId: loanAppId,
      LoanOfferId: loanOfferId,
      CardNumber: cardData.cardNumber,
      CVV: cardData.cvv,
      CardExpDate: cardData.expDate,
      AllTotalAmount: payableTotal
    };

    return new Promise(resolve => {
      axiosinstance.post(`${API_URI}/Loan/ConFirmAndPay`, data).then(r => {
        resolve(r.data);
      });
    }).catch(err => console.log('ERROR (ConfirmAndPay):', err));
  }
};
