import React from 'react';
import { Card } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { formatDateCol } from 'helpers/utils';

const DisputesComplaints = () => {
  const columns = [
    {
      accessor: 'disputeDate',
      Header: 'Date',
      Cell: rowData => {
        return formatDateCol(rowData, 'disputeDate');
      }
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
      sortable
      pagination
      perPage={7}
    >
      <Card>
        <Card.Body className="px-0">
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="text-nowrap align-middle"
            tableProps={{
              size: 'sm',
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
      </Card>
    </AdvanceTableWrapper>
  );
};

export default DisputesComplaints;
