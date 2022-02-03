import React from 'react';

// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
// import Header from './Header';

export default function DisputesComplaints() {
  const columns = [
    {
      accessor: 'date',
      Header: 'Date'
    },
    {
      accessor: 'disputeType',
      Header: 'Dispute Type'
    },
    {
      accessor: 'action',
      Header: 'Action'
    },
    {
      accessor: 'disputeAmount',
      Header: 'Dispute Amount'
    },
    {
      accessor: 'source',
      Header: 'Source',
      headerProps: { className: 'pe-4' }
    },
    {
      accessor: 'user',
      Header: 'User'
    },
    {
      accessor: 'assignedTo',
      Header: 'Assigned To'
    },
    {
      accessor: 'comment',
      Header: 'Comment'
    }
  ];
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={[]}
      //   selection
      sortable
      pagination
      perPage={7}
      //   rowCount={this.state.data.length}
    >
      <Card>
        {/* <Card.Header>
          <Header name={'Transaction'} />
        </Card.Header> */}
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
