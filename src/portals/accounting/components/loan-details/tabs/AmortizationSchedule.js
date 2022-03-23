import React from 'react';
import { Card } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';

const AmortizationSchedule = () => {
  const columns = [
    {
      accessor: 'paymentDate',
      Header: 'Payment Date'
    },
    {
      accessor: 'amount',
      Header: 'Amount'
    },
    {
      accessor: 'principalAmount',
      Header: 'Principal Amount'
    },
    {
      accessor: 'interestAmount',
      Header: 'Interest Amount'
    },
    {
      accessor: 'principalBeforeSource',
      Header: 'Principal Before Source',
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

export default AmortizationSchedule;
