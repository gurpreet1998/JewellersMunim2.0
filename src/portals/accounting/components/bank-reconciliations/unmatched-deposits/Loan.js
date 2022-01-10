import React from 'react';

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import Header from './Header';
export default class Loan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: [...this.props.data] });
    }
  }
  render() {
    const columns = [
      {
        accessor: 'loanAmount',
        Header: 'Loan Amount'
      },
      {
        accessor: 'mdr',
        Header: 'MDR',
        headerProps: { className: 'pe-4' }
      },
      {
        accessor: 'expectedDepositAmount',
        Header: 'Expected Deposit Amt.'
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
        data={this.state.data}
        selection
        sortable
        pagination
        perPage={7}
        rowCount={this.state.data.length}
      >
        <Card>
          <Card.Header>
            <Header name={'Loans'} />
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
            <AdvanceTableFooter
              rowCount={this.state.data.length}
              table
              rowInfo
              navButtons
            />
          </Card.Footer>
        </Card>
      </AdvanceTableWrapper>
    );
  }
}
Loan.propTypes = {
  data: PropTypes.array
};
