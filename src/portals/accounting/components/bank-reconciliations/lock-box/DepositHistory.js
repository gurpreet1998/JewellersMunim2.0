import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import Header from '../unmatched-deposits/Header';
// import Header from './Header';
export default function DepositHistory() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const columns = [
    {
      accessor: 'paymentId',
      Header: 'Payment ID'
    },
    {
      accessor: 'loanNumber',
      Header: 'Loan Number',
      headerProps: { className: 'pe-4' }
    },
    {
      accessor: 'name',
      Header: 'Name'
    },
    {
      accessor: 'date',
      Header: 'Date'
    },
    {
      accessor: 'paymentAmount',
      Header: 'Paymen Amount'
    },
    {
      accessor: 'paymentType',
      Header: 'Paymen Type'
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
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      pagination
      perPage={7}
      rowCount={data.length}
    >
      <Card>
        <Card.Header>
          <Header name={'Deposit History'} />
        </Card.Header>
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
DepositHistory.propTypes = {
  data: PropTypes.array
};
