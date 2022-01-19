import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
// import Header from './Header';
import { transactionHistoryService } from '_services/accounting';
export default function TransactionHistory(props) {
  const columns = [
    {
      accessor: 'date',
      Header: 'Date'
    },
    {
      accessor: 'paymentAmount',
      Header: 'Payment Amount'
    },
    {
      accessor: 'principalAmount',
      Header: 'Principal Amount'
    },
    {
      accessor: 'feeAmount',
      Header: 'Fee Amount'
    },
    {
      accessor: 'source',
      Header: 'Source',
      headerProps: { className: 'pe-4' }
    },
    {
      accessor: 'paymentType',
      Header: 'Payment Type'
    },
    {
      accessor: 'user',
      Header: 'User'
    },
    {
      accessor: 'comment',
      Header: 'Comment'
    },
    {
      accessor: 'none',
      Header: '',
      disableSortBy: true,
      cellProps: {
        className: 'text-end py-2'
      }
    }
  ];
  const [transactionHistoryData, setTransactionHistoryData] = useState([]);
  useEffect(() => {
    transactionHistoryService
      .getTransactionHistory(props.loanId)
      .then(res => setTransactionHistoryData(res));
  }, []);
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={transactionHistoryData}
      //   selection
      sortable
      pagination
      perPage={7}
      rowCount={transactionHistoryData.length}
    >
      <Card>
        <Card.Body className="p-3">
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="btn-reveal-trigger text-nowrap align-middle"
            tableProps={{
              size: 'sm',
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
      </Card>
    </AdvanceTableWrapper>
  );
}
TransactionHistory.propTypes = {
  loanId: PropTypes.array
};
