import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
export const PendingSettelmentsSummaryColumns = {
  columns: [
    {
      Header: 'Merchant',
      accessor: 'merchantName'
    },
    {
      Header: 'Merchant Location',
      accessor: 'merchantLocation',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return (
          <Link
            to={{
              pathname: `/portal/accounting/pending-settlements/merchants/${tableData?.merchantId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {tableData?.merchantLocation || 'Merchant Location'}
          </Link>
        );
      }
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

export const PendingSettelmentsSponsorBank = {
  columns: [
    // {
    //   Header: 'Merchant',
    //   accessor: 'merchantName'
    // },
    {
      Header: 'Loan Number',
      accessor: 'loanNumber',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index]; // Change pathname when redirection available
        return (
          <div
            // to={{
            //   pathname: `/portal/accounting/home/loandetails/${batchdetail.loanId}`
            // }}
            className="text-primary fw-semi-bold"
          >
            {tableData?.loanNumber || 'Loan number'}
          </div>
        );
      }
    },
    {
      Header: 'Pending Settlement Date',
      accessor: 'pendingSettlementDate'
    },
    {
      Header: 'Bank Fee',
      accessor: 'originationFee'
    },
    {
      Header: 'Interest Fee',
      accessor: 'interestFee'
    },
    {
      Header: 'Borrower Name',
      accessor: 'borrowerName'
    },
    {
      Header: 'Loan Principle Amount',
      accessor: 'bankAccountNumber'
    }
  ],
  data: [
    {
      id: 1,
      borrowerName: 'Jane Doe',
      // merchantLocation: 'Brain Balance- Henderson',
      originationFee: 9500.55,
      interestFee: 9500.1,
      bankAccountNumber: 9830,
      loanNumber: 5673322189,
      pendingSettlementDate: '02/06/2021'
    },
    {
      id: 2,
      borrowerName: 'Mary Doe',
      // merchantLocation: 'Brain Balance- Las Vegas',
      originationFee: 5466,
      interestFee: 9500.1,
      bankAccountNumber: 9500,
      loanNumber: 5673322191,
      pendingSettlementDate: '03/06/2021'
    },
    {
      id: 3,
      borrowerName: 'Harry Doe',
      // merchantLocation: 'Brain Balance- Las Vegas',
      originationFee: 5466,
      interestFee: 9500.1,
      bankAccountNumber: 7650,
      loanNumber: 5673322191,
      pendingSettlementDate: '04/06/2021'
    },
    {
      id: 4,
      borrowerName: 'Carry Doe',
      // merchantLocation: 'Brain Balance- Las Vegas',
      originationFee: 5466,
      interestFee: 9500.1,
      bankAccountNumber: 8700,
      loanNumber: 5673322191,
      pendingSettlementDate: '06/06/2021'
    },
    {
      id: 5,
      borrowerName: 'Perry Doe',
      // merchantLocation: 'Brain Balance- Las Vegas',
      originationFee: 5466,
      interestFee: 9500.1,
      bankAccountNumber: 2780,
      loanNumber: 5673322191,
      pendingSettlementDate: '01/06/2021'
    },
    {
      id: 6,
      borrowerName: 'Larry Doe',
      // merchantLocation: 'Brain Balance- Las Vegas',
      originationFee: 5466,
      interestFee: 9500.1,
      bankAccountNumber: 7650,
      loanNumber: 5673322191,
      pendingSettlementDate: '02/06/2021'
    }
  ]
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
      Header: 'Settlement Amount',
      accessor: 'settlementAmount'
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
export const CMLRefundsTableData = {
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
      Header: 'Settlement Amount',
      accessor: 'settlementAmount',
      Cell: rowData => (
        <NumberFormat
          value={rowData.data[rowData.row.index].settlementAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'-($'}
          suffix={')'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
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
      Header: 'Loan Program Type',

      accessor: 'isPromo',

      Cell: rowData => {
        const data = rowData.data[rowData.row.values.isPromo];
        return data ? 'Promo' : 'Regular';
      }
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
      Header: 'Merchant Interest Promo',
      accessor: 'merchantInterestPromo'
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
export const CPRefundsTableData = {
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
      Header: 'Loan Program Type',
      accessor: 'isPromo',
      Cell: rowData => {
        const data = rowData.data[rowData.row.values.isPromo];
        return data ? 'Promo' : 'Regular';
      }
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
      accessor: 'totalInterest',
      Cell: rowData => (
        <NumberFormat
          value={rowData.data[rowData.row.index].totalInterest}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'-($'}
          suffix={')'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
    },
    {
      Header: 'Total Amount',
      accessor: 'totalAmount',
      Cell: rowData => (
        <NumberFormat
          value={rowData.data[rowData.row.index].totalAmount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'-($'}
          suffix={')'}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      )
    },
    {
      Header: 'Merchant Interest Promo',
      accessor: 'merchantInterestPromo'
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

export const sponsorBank = ['Medallion'];

export const merchants = ['Brain Balance', 'Peak Performance', 'Hair Club'];

export const bankAccounts = ['Bank of America'];

export const sponsorBankAccount = ['876787654312', '564765879673'];

export const paymentCategory = [
  'CML Payments',
  'CML Refunds',
  'CP+ Payments',
  'CP+ Refunds'
];
