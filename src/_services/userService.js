import { setPostRequestOptions } from './baseService';

let API_URI = process.env.REACT_APP_API_URI;

export const roleBased_Permission = {
  GetPermissionsForRole: function (roleName) {
    return fetch(`${API_URI}/User/GetPermissions?RoleName=${roleName}`)
      .then(res => res.json())

      .then(data => {
        return data;
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

    return fetch(
      `${API_URI}/Loan/AddApplicationInfo`,
      setPostRequestOptions(data)
    )
      .then(response => response.json())
      .then(data => {
        console.log('AddApplicationInfo Response:', data);
        return data;
      })
      .catch(err => console.log('ERROR (AddApplicationInfo):', err));
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

    fetch(`${API_URI}/Loan/AddPurchaseService`, setPostRequestOptions(data))
      .then(response => response.json())
      .catch(err => console.log('ERROR (AddPurchaseService):', err));
  }
};

export const Disclosure = {
  saveDisclosure: function (loanAppId) {
    fetch(
      `${API_URI}/Loan/Disclosure?loanAppId=${loanAppId}`,
      setPostRequestOptions()
    ).catch(err => console.log('ERROR (Disclosure):', err));
  }
};

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

    console.log('ConFirmAndPay POST: ', data);
    fetch(`${API_URI}/Loan/ConFirmAndPay`, setPostRequestOptions(data)).catch(
      err => console.log('ERROR (ConfirmAndPay):', err)
    );
  }
};
