import React from 'react';
import NumberFormat from 'react-number-format';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { batchdetailsData } from 'data/accounting/lockBox';
import { Link } from 'react-router-dom';
const BatchDetailsTable = () => {
  const columns = [
    {
      accessor: 'loanNumber',
      Header: 'Loan Number',
      Cell: rowData => {
        const batchdetail = rowData.data[rowData.row.index];
        console.log(batchdetail.loanId);
        return (
          <Link
            to={{
              pathname: `/portal/accounting/home/loan/${batchdetail.loanId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {batchdetail.loanNumber}
          </Link>
        );
      }
    },
    {
      accessor: 'name',
      Header: 'Name'
    },
    {
      accessor: 'date',
      Header: 'Date'
    },
    {
      accessor: 'paymentType',
      Header: 'Payment Type'
    },
    {
      accessor: 'amount',
      Header: ' Amount',
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
      accessor: 'checkNumber',
      Header: 'Check Number'
    },
    {
      accessor: 'depositedBy',
      Header: 'Deposited By'
    },
    {
      accessor: 'validatedBy',
      Header: 'Validated By'
    },
    {
      accessor: 'submittedBy',
      Header: 'Submitted By'
    }
  ];
  return (
    <>
      <AdvanceTableWrapper
        columns={columns}
        data={batchdetailsData}
        selection
        sortable
        setSelectedRowIDs={val => this.setState({ SelectedRowID: val })}
        pagination
        perPage={7}
        rowCount={batchdetailsData.length}
      >
        <AdvanceTable
          table
          headerClassName="bg-200 text-900 text-nowrap align-middle"
          rowClassName="btn-reveal-trigger text-nowrap align-middle"
          tableProps={{
            size: 'sm',
            className: 'fs--2 mb-0 overflow-hidden'
          }}
        />
      </AdvanceTableWrapper>
    </>
  );
};
export default BatchDetailsTable;
