import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import Header from './Header';

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
        Header: 'Deposit ID',
        headerProps: { className: 'pe-4' }
      },
      {
        accessor: 'depositDate',
        Header: 'Deposit Date',
        headerProps: { className: 'pe-2' }
      },
      {
        accessor: 'depositAmount',
        Header: 'Deposit Amt.'
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
            <Header name={'Bulk Deposits'} />
          </Card.Header>
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
Deposits.propTypes = {
  data: PropTypes.array
};
