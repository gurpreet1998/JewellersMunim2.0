import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import BasicCardHeader from 'components/common/BasicCardHeader';
import { paymentHistoryData } from 'data/accounting/lockBox';

export default function DepositHistory() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(paymentHistoryData);
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
      Header: 'Payment Amount$'
    },
    {
      accessor: 'paymentType',
      Header: 'Payment Type'
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
        <BasicCardHeader name={'Deposit History'} />
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
