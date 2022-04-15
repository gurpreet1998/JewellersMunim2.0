import React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

export const disputesComplaintsTableColumns = {
  columns: [
    {
      accessor: 'lenderLoanNumber',
      Header: 'Loan Number',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return (
          <Link
            to={{
              pathname: `/portal/customercare/loan/${tableData.loanId}`
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
      loanId: 1,
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
      loanId: 3,
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
      loanId: 4,
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

export const hardStopTableColumns = {
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

export const redFlagTableColumns = {
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

export const paymentPastDueTableColumns = {
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

export const nfsLoansTableColumns = {
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
              pathname: `/portal/customercare/loan/${tableData.loanID}`
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
