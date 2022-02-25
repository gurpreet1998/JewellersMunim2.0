import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
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
    let total = 0;

    const columns = [
      {
        accessor: 'depositID',
        Header: 'Deposit ID'
      },
      {
        accessor: 'loanNumber',
        Header: 'Loan #'
      },
      {
        accessor: 'date',
        Header: 'Payment Date'
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
      }
    ];

    if (this.state.data.length > 0) {
      for (let i = 0; i < this.state.data.length; i++) {
        total += this.state.data[i].paymentAmount;
      }
    }

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

          <Card.Footer className={'bg-100'}>
            <Row className="flex-end-center">
              <Col xs="auto" className="d-flex align-items-end pe-4">
                <h6 className="mb-0 text-nowrap">
                  Total:{' '}
                  <NumberFormat
                    value={total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </h6>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </AdvanceTableWrapper>
    );
  }
}

Payment.propTypes = {
  data: PropTypes.array
};
