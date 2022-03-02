import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import BasicCardHeader from 'components/common/BasicCardHeader';
import { formatDateCol } from 'helpers/utils';

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, SelectedRowID: {} };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        data: [...this.props.data]
      });
    }
    if (this.state.SelectedRowID !== prevState.SelectedRowID) {
      this.handleChooseLoan(Object.keys(this.state.SelectedRowID));
    }
  }
  handleChooseLoan(event) {
    let res = [];
    for (let i = 0; i < event.length; i++) {
      res.push(this.props.data[parseInt(event[i])]);
    }
    this.props.chooseLoan(res);
    // console.log(this.props.data);
    // console.log('LoanData Selected', res);
  }

  render() {
    let total = 0;
    const columns = [
      {
        accessor: 'bankDepositId',
        Header: 'Deposit ID'
      },
      {
        accessor: 'paymentDate',
        Header: 'Date',
        Cell: rowData => {
          return formatDateCol(rowData, 'paymentDate');
        }
      },
      {
        accessor: 'amount',
        Header: 'Amount',
        Cell: cellInfo => (
          <NumberFormat
            value={cellInfo.data[cellInfo.row.index].amount}
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
    if (this.state.data.length > 0) {
      for (let i = 0; i < this.state.data.length; i++) {
        total += this.state.data[i].amount;
      }
    }

    return (
      <AdvanceTableWrapper
        columns={columns}
        data={this.state.data}
        selection
        sortable
        setSelectedRowIDs={val => this.setState({ SelectedRowID: val })}
        pagination
        perPage={7}
        rowCount={this.state.data.length}
      >
        <Card className={'h-100'}>
          <BasicCardHeader name={'Payments'} fontSize={'fs-0'} />
          <Card.Body className="px-0 pt-0 pb-3">
            <AdvanceTable
              table
              headerClassName="bg-200 text-900 text-nowrap align-middle"
              rowClassName="btn-reveal-trigger text-nowrap align-middle"
              tableProps={{
                size: 'sm',
                className: 'fs--2 mb-0 overflow-hidden'
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
  data: PropTypes.array,
  chooseLoan: PropTypes.func
};
