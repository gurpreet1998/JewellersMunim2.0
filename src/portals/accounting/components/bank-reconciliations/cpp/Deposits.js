import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import BasicCardHeader from 'components/common/BasicCardHeader';
import { formatDateCol } from 'helpers/utils';

export default class Deposits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, MasterChecked: false, SelectedList: [] };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: [...this.props.data] });
    }
  }
  render() {
    const columns = [
      {
        accessor: 'depositID',
        Header: 'Deposit ID'
      },
      {
        accessor: 'depositDate',
        Header: 'Date',
        Cell: rowData => {
          return formatDateCol(rowData, 'depositDate');
        }
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
        pagination
        perPage={7}
        rowCount={this.state.data.length}
      >
        <Card className={'h-100'}>
          <BasicCardHeader name={'Deposits'} />
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
        </Card>
      </AdvanceTableWrapper>
    );
  }
}

Deposits.propTypes = {
  data: PropTypes.array
};
