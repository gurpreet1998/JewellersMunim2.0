import NumberFormat from 'react-number-format';
import React from 'react';
// import moment from 'moment';
import { Link } from 'react-router-dom';

export const todaysStatements = {
  columns: [
    {
      accessor: 'lenderLoanNumber',
      Header: 'Loan Number',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return (
          <Link
            to={{
              pathname: `/portal/accounting/home/loandetails/${tableData.loanId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {tableData.lenderLoanNumber}
          </Link>
        );
      }
    },
    {
      accessor: 'disputeCriticality',
      Header: 'Dispute Criticality'
    },
    {
      accessor: 'disputeCategory',
      Header: 'Dispute Category'
    },
    // {
    //   accessor: 'dateofNextPayment',
    //   Header: 'Next Due Date',
    //   Cell: rowData => {
    //     let dateStr = rowData.data[rowData.row.index].dateofNextPayment;
    //     return moment(dateStr).format('MM/DD/YYYY');
    //   }
    // },
    {
      accessor: 'serviceAmount', //  todo: is this a static amount of does it update after a payment?
      Header: 'Service Amount',
      Cell: rowData => (
        <NumberFormat
          value={rowData.data[rowData.row.index].loanAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
    },
    {
      accessor: 'loanAmount', //  todo: is this a static amount of does it update after a payment?
      Header: 'Loan Amount',
      Cell: rowData => (
        <NumberFormat
          value={rowData.data[rowData.row.index].loanAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
    },
    {
      accessor: 'applicationType',
      Header: 'Application Type'
    },
    {
      accessor: 'applicationStatus',
      Header: 'Application Status'
    },
    {
      accessor: 'salesAgent',
      Header: 'Sales Agent'
    },
    {
      accessor: 'location',
      Header: 'Location'
    }
  ],
  data: [
    {
      id: 1,
      loanAmount: '$3,500.00',
      serviceAmount: '$4,000.00',
      disputeCriticality: 'High',
      lenderLoanNumber: 'TRN082323342',
      applicationType: 'Application',
      disputeCategory: 'A',
      salesAgent: '3/01/2022',
      location: 'LA',
      applicationStatus: 'Pending'
    },
    {
      id: 2,
      loanAmount: '$3,500.00',
      serviceAmount: '$4,000.00',
      disputeCriticality: 'High',
      lenderLoanNumber: 'TRN082323342',
      applicationType: 'Application',
      disputeCategory: 'A',
      salesAgent: '3/01/2022',
      location: 'LA',
      applicationStatus: 'Pending'
    },
    {
      id: 3,
      loanAmount: '$3,500.00',
      serviceAmount: '$4,000.00',
      disputeCriticality: 'High',
      lenderLoanNumber: 'TRN082323342',
      applicationType: 'Application',
      disputeCategory: 'A',
      salesAgent: '3/01/2022',
      location: 'LA',
      applicationStatus: 'Pending'
    },
    {
      id: 4,
      loanAmount: '$3,500.00',
      serviceAmount: '$4,000.00',
      disputeCriticality: 'High',
      lenderLoanNumber: 'TRN082323342',
      applicationType: 'Application',
      disputeCategory: 'A',
      salesAgent: '3/01/2022',
      location: 'LA',
      applicationStatus: 'Pending'
    }
  ]
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

export const searchResult = {
  columns: [
    {
      accessor: 'lenderLoanNumber',
      Header: 'Loan Number',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return (
          <Link
            to={{
              pathname: `/portal/accounting/home/loandetails/${tableData.loanID}`
            }}
            className="text-primary fw-semi-bold"
          >
            {tableData.lenderLoanNumber}
          </Link>
        );
      }
    },
    {
      accessor: 'borrowerName',
      Header: 'Borrower Name'
    },
    {
      accessor: 'ssn',
      Header: 'SSN'
    },
    {
      accessor: 'tin',
      Header: 'TIN'
    },
    {
      accessor: 'phoneNumber',
      Header: 'Phone Number'
    },
    {
      accessor: 'address',
      Header: 'Street Address'
    }
  ],
  data: []
};