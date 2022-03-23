import React from 'react';
import { Card } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { formatDateCol } from 'helpers/utils';

const Statements = () => {
  const columns = [
    {
      accessor: 'statementDate',
      Header: 'Date',
      Cell: rowData => {
        return formatDateCol(rowData, 'statementDate');
      }
    },
    {
      accessor: 'description',
      Header: 'Description'
    },
    {
      accessor: 'emailedMailedTransaction',
      Header: 'Emailed/ Mailed Transactions'
    },
    {
      accessor: 'download',
      Header: 'Download'
    },
    {
      accessor: 'print',
      Header: 'Print',
      headerProps: { className: 'pe-4' }
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
        <Card.Body className="p-3">
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

export default Statements;
