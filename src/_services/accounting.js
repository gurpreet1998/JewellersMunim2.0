let API_URI = process.env.REACT_APP_API_URI;

export const accountingService = {
  getTodaysStatement: function (id) {
    return fetch(`${API_URI}/Accounting/GetTodaysStatement?merchantId=${id}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
};
