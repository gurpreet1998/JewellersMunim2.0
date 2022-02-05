import NumberFormat from 'react-number-format';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const todaysStatements = {
  columns: [
    {
      accessor: 'lenderLoanNumber',
      Header: 'Loan Number',
      Cell: cellInfo => {
        return (
          <Link to="#">
            {cellInfo.data[cellInfo.row.index].lenderLoanNumber}
          </Link>
        );
      }
    },
    {
      accessor: 'merchant',
      Header: 'Merchant'
    },
    {
      accessor: 'location',
      Header: 'Location'
    },
    {
      accessor: 'currentAmountDue',
      Header: 'Current Amount Due',
      Cell: cellInfo => (
        <NumberFormat
          value={cellInfo.data[cellInfo.row.index].currentAmountDue}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
    },
    {
      accessor: 'dateofNextPayment',
      Header: 'Next Due Date',
      Cell: cellInfo => {
        let dateStr = cellInfo.data[cellInfo.row.index].dateofNextPayment;
        return moment(dateStr).format('MM/DD/YYYY');
      }
    },
    {
      accessor: 'loanAmount', //  todo: is this a static amount of does it update after a payment?
      Header: 'Current Principle',
      Cell: cellInfo => (
        <NumberFormat
          value={cellInfo.data[cellInfo.row.index].loanAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
    },
    {
      accessor: 'loanStatus',
      Header: 'Status'
    }
  ],
  data: []
};

export const tomorrowsCardPayments = {
  columns: [
    {
      accessor: 'paymentAmount',
      Header: 'Payment Amount'
    },
    {
      accessor: 'loanNumber',
      Header: 'Loan Number'
    },
    {
      accessor: 'paymentDate',
      Header: 'Payment Date'
    },
    {
      accessor: 'isAutoPay',
      Header: 'Autopay or Manual'
    }
  ],
  data: [
    {
      id: 1,
      paymentAmount: '$3,500.00',
      loanNumber: 'TRN082323342',
      paymentDate: '3/01/2022',
      isAutoPay: true
    },
    {
      id: 2,
      paymentAmount: '$5,500.00',
      loanNumber: 'CP33434221541',
      paymentDate: '3/01/2022',
      isAutoPay: false
    }
  ]
};

export const dailyACHPaymentExceptions = {
  columns: [
    {
      accessor: 'paymentAmount',
      Header: 'Payment Amount'
    },
    {
      accessor: 'loanNumber',
      Header: 'Loan Number'
    },
    {
      accessor: 'paymentDate',
      Header: 'Payment Date'
    },
    {
      accessor: 'isAutoPay',
      Header: 'Autopay or Manual'
    }
  ],
  data: [
    {
      id: 1,
      paymentAmount: '$3,500.00',
      loanNumber: 'TRN082323342',
      paymentDate: '3/01/2022',
      isAutoPay: true
    },
    {
      id: 2,
      paymentAmount: '$5,500.00',
      loanNumber: 'CP33434221541',
      paymentDate: '3/01/2022',
      isAutoPay: false
    }
  ]
};

export const tomorrowsACHs = {
  columns: [
    {
      accessor: 'paymentAmount',
      Header: 'Payment Amount'
    },
    {
      accessor: 'loanNumber',
      Header: 'Loan Number'
    },
    {
      accessor: 'paymentDate',
      Header: 'Payment Date'
    },
    {
      accessor: 'isAutoPay',
      Header: 'Autopay or Manual'
    }
  ],
  data: [
    {
      id: 1,
      paymentAmount: '$3,500.00',
      loanNumber: 'TRN082323342',
      paymentDate: '3/01/2022',
      isAutoPay: true
    },
    {
      id: 2,
      paymentAmount: '$5,500.00',
      loanNumber: 'CP33434221541',
      paymentDate: '3/01/2022',
      isAutoPay: false
    }
  ]
};

export const dailyCCPaymentExceptions = {
  columns: [
    {
      accessor: 'paymentAmount',
      Header: 'Payment Amount'
    },
    {
      accessor: 'loanNumber',
      Header: 'Loan Number'
    },
    {
      accessor: 'paymentDate',
      Header: 'Payment Date'
    },
    {
      accessor: 'isAutoPay',
      Header: 'Autopay or Manual'
    }
  ],
  data: [
    {
      id: 1,
      paymentAmount: '$3,500.00',
      loanNumber: 'TRN082323342',
      paymentDate: '3/01/2022',
      isAutoPay: true
    },
    {
      id: 2,
      paymentAmount: '$5,500.00',
      loanNumber: 'CP33434221541',
      paymentDate: '3/01/2022',
      isAutoPay: false
    }
  ]
};
