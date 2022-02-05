import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import BasicCardHeader from 'components/common/BasicCardHeader';

export default class Payment extends React.Component {
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
        accessor: 'depositId',
        Header: 'Deposit ID'
      },
      {
        accessor: 'date',
        Header: 'Date'
      },
      {
        accessor: 'paymentAmount',
        Header: 'Amount',
        Cell: cellInfo => (
          <NumberFormat
            value={cellInfo.data[cellInfo.row.index].paymentAmount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        )
      },
      {
        accessor: 'loanNumber',
        Header: 'Loan #'
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
          <BasicCardHeader name={'Payments'} />
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
}
Payment.propTypes = {
  data: PropTypes.array
};
