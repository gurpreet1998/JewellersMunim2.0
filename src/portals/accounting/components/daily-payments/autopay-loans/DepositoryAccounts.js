import React, { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import CardDropdown from 'components/common/CardDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoftBadge from 'components/common/SoftBadge';
import { Link } from 'react-router-dom';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import DepositoryAccountsHeader from './DepositoryAccountsHeader';

// Placeholder Data - todo: Replace with API.
import { depositoryAccountsTableData } from 'data/accounting/dailyPayments';

const columns = [
  {
    accessor: 'loanNumber',
    Header: 'Loan #',
    headerProps: { className: 'pe-1' },
    cellProps: {
      className: 'fw-semi-bold'
    },
    Cell: rowData => {
      const { loanNumber } = rowData.row.original;
      return <Link to="#">{loanNumber}</Link>;
    }
  },
  {
    accessor: 'name',
    Header: 'Name',
    headerProps: { className: 'pe-4' }
  },
  {
    accessor: 'ssn',
    Header: 'SSN (last 4)'
  },
  {
    accessor: 'routing',
    Header: 'Routing'
  },
  {
    accessor: 'payment',
    Header: 'Payment',
    headerProps: { className: 'text-center' },
    cellProps: {
      className: 'fs-0'
    },
    Cell: rowData => {
      const { payment } = rowData.row.original;
      return (
        <SoftBadge pill bg={payment.type} className="d-block">
          {payment.content}
          <FontAwesomeIcon
            icon={payment.icon}
            transform="shrink-2"
            className="ms-1"
          />
        </SoftBadge>
      );
    }
  },
  {
    accessor: 'none',
    Header: '',
    disableSortBy: true,
    cellProps: {
      className: 'text-end py-2'
    },
    Cell: () => {
      return (
        <CardDropdown iconClassName="fs--1" drop="start">
          <div className="py-2">
            <Dropdown.Item href="#!">Add to Exceptions</Dropdown.Item>
            <Dropdown.Divider as="div" />
            <Dropdown.Item href="#!" className="text-warning">
              Refund Payment
            </Dropdown.Item>
          </div>
        </CardDropdown>
      );
    }
  }
];

const DepositoryAccounts = () => {
  const [data] = useState(depositoryAccountsTableData);
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      selection
      sortable
      pagination
      perPage={7}
      rowCount={data.length}
    >
      <Card>
        <Card.Header>
          <DepositoryAccountsHeader table />
        </Card.Header>
        <Card.Body className="p-0">
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
        <Card.Footer>
          <AdvanceTableFooter rowCount={data.length} table rowInfo navButtons />
        </Card.Footer>
      </Card>
    </AdvanceTableWrapper>
  );
};

export default DepositoryAccounts;
