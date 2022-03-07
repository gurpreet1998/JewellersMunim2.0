import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import BasicCardHeader from 'components/common/BasicCardHeader';

export default class Deposits extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { data: props.data, MasterChecked: false, SelectedList: [] };
    this.state = { data: props.data, SelectedRowID: {} };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: [...this.props?.data || []] });
    }
    if (this.state.SelectedRowID !== prevState.SelectedRowID) {
      this.handleChooseDeposit(Object.keys(this.state.SelectedRowID));
    }
  }

  handleChooseDeposit(event) {
    let res = [];
    for (let i = 0; i < event.length; i++) {
      res.push(this.props.data[parseInt(event[i])]);
    }
    this.props.chooseDeposit(res);
    // console.log(this.props.data);
    // console.log('Deposit data Selected', res);
  }

  render() {
    const columns = [
      {
        accessor: 'bankDepositId',
        Header: 'Deposit ID'
      },
      {
        accessor: 'dateOfDeposit',
        Header: ' Deposit Date'
      },
      {
        accessor: 'depositAmount',
        Header: 'Amount',
        Cell: cellInfo => (
          <NumberFormat
            value={cellInfo.data[cellInfo.row.index].depositAmount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        )
      }
    ];

    return (
      <AdvanceTableWrapper
        columns={columns}
        data={this.state.data}
        selection
        sortable
        setSelectedRowIDs={val => this.setState({ SelectedRowID: val })}
        pagination
        perPage={100}
        rowCount={this.state.data.length}
      >
        <Card>
          <BasicCardHeader name={'Deposits'} />
          <Card.Body style={{ maxHeight:'17rem', overflow:'auto'}} className="px-0 pt-0 pb-3">
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

Deposits.propTypes = {
  data: PropTypes.array,
  chooseDeposit: PropTypes.func
};
