import React from 'react';
import { Link } from 'react-router-dom';

export const PendingSettelmentsSummaryColumns = {
  columns: [
    {
      Header: 'Merchant Name',
      accessor: 'merchantName',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return (
          <Link
            to={{
              pathname: `/portal/accounting/pending-settlements/merchants/${tableData?.merchantId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {tableData?.merchantName || 'Merchant Name'}
          </Link>
        );
      }
    },
    {
      Header: 'Merchant Location',
      accessor: 'merchantLocation'
    },
    {
      Header: 'CML Payment Amount',
      accessor: 'cmlPaymentAmount'
    },
    {
      Header: 'CML Refund Amount',
      accessor: 'cmlRefundAmount'
    },
    {
      Header: 'CP+ Payment Amount',
      accessor: 'cpPaymentAmount'
    },
    {
      Header: 'CP+ Refund Amount',
      accessor: 'cpRefundAmount'
    },
    {
      Header: 'CP+ Promo Amount',
      accessor: 'cpPromoAmount'
    },
    {
      Header: 'All Transactions Selected',
      accessor: 'allTransactionsSelected'
    }
  ]
  // data: [
  //   {
  //     id: 1,
  //     merchantName: 'Jane Doe',
  //     merchantLocation: 'Brain Balance- Henderson',
  //     cmlPaymentAmount: 9500.55,
  //     cmlRefundAmount: 9500.1,
  //     cpPaymentAmount: 9500.1,
  //     cpRefundAmount: 9500
  //   },
  //   {
  //     id: 2,
  //     merchantName: 'Mary Doe',
  //     merchantLocation: 'Brain Balance- Las Vegas',
  //     cmlPaymentAmount: 5466,
  //     cmlRefundAmount: 9500.1,
  //     cpPaymentAmount: 9500.1,
  //     cpRefundAmount: 9500
  //   }]
};

export const CMLPaymentsTableData = {
  columns: [
    {
      accessor: 'loanNumber',
      Header: 'Loan Number',
      Cell: rowData => {
        const batchdetail = rowData.data[rowData.row.index];
        console.log(batchdetail.loanId);
        return (
          <Link
            to={{
              pathname: `/portal/accounting/home/loandetails/${batchdetail.loanId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {batchdetail.loanNumber}
          </Link>
        );
      }
    },
    {
      Header: 'Pending Settlement Date',
      accessor: 'pendingSettlementDate'
    },
    {
      Header: 'Lender Name',
      accessor: 'lenderName'
    },
    {
      Header: 'Loan Amount',
      accessor: 'loanAmount'
    },
    {
      Header: 'MDR',
      accessor: 'mdr'
    },
    {
      Header: 'Total Amount',
      accessor: 'totalAmount'
    },
    {
      Header: 'First Name',
      accessor: 'borrowerFirstName'
    },
    {
      Header: 'Last Name',
      accessor: 'borrowerLastName'
    },
    {
      Header: 'Bank Account Number',
      accessor: 'bankAccountNumber'
    }
  ]
};

export const CMLExceptionsTableData = {
  columns: [
    {
      accessor: 'loanId',
      Header: 'Loan ID'
    },
    {
      accessor: 'applicantName',
      Header: 'Applicant Name'
    },
    {
      accessor: 'location',
      Header: 'Location'
    },
    {
      accessor: 'accountNumber',
      Header: 'Account Number'
    },
    {
      accessor: 'settlementType',
      Header: 'Settlement Type'
    },
    {
      accessor: 'loanAmount',
      Header: 'Loan Amount'
    }
  ],
  data: [
    {
      id: 1,
      loanId: '34445541',
      applicantName: 'Jane Doe',
      location: 'Brain Balance- Henderson',
      accountNumber: '12345677876',
      settlementType: 'Other',
      loanAmount: 9500.55
    }
  ]
};

export const CPPPaymentsTableData = {
  columns: [
    {
      accessor: 'loanNumber',
      Header: 'Loan Number',
      Cell: rowData => {
        const batchdetail = rowData.data[rowData.row.index];
        console.log(batchdetail.loanId);
        return (
          <Link
            to={{
              pathname: `/portal/accounting/home/loandetails/${batchdetail.loanId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {batchdetail.loanNumber}
          </Link>
        );
      }
    },
    {
      Header: 'Pending Settlement Date',
      accessor: 'pendingSettlementDate'
    },
    {
      Header: 'Principal Amount',
      accessor: 'principalAmount'
    },
    {
      Header: 'Merchant Interest',
      accessor: 'merchantInterest'
    },
    {
      Header: 'Choice Interest',
      accessor: 'choiceInterest'
    },
    {
      Header: 'Total Interest',
      accessor: 'totalInterest'
    },
    {
      Header: 'Total Amount',
      accessor: 'totalAmount'
    },
    {
      Header: 'First Name',
      accessor: 'borrowerFirstName'
    },
    {
      Header: 'Last Name',
      accessor: 'borrowerLastName'
    },
    {
      Header: 'Bank Account Number',
      accessor: 'bankAccountNumber'
    }
  ]
};

export const CPPExceptionsTableData = {
  columns: [
    {
      accessor: 'loanId',
      Header: 'Loan ID'
    },
    {
      accessor: 'applicantName',
      Header: 'Applicant Name'
    },
    {
      accessor: 'location',
      Header: 'Location'
    },
    {
      accessor: 'accountNumber',
      Header: 'Account Number'
    },
    {
      accessor: 'settlementType',
      Header: 'Settlement Type'
    },
    {
      accessor: 'loanAmount',
      Header: 'Loan Amount'
    }
  ],
  data: [
    {
      id: 1,
      loanId: '34445541',
      applicantName: 'Jane Doe',
      location: 'Brain Balance- Henderson',
      accountNumber: '12345677876',
      settlementType: 'Other',
      loanAmount: 9500.55
    }
  ]
};

export const merchants = ['Brain Balance', 'Peak Performance', 'Hair Club'];

export const bankAccounts = ['Bank of America'];

export const paymentCategory = [
  'CML PayMent',
  'CML Refunds',
  'CP+ Payments',
  'CP+ Refunds'
];
