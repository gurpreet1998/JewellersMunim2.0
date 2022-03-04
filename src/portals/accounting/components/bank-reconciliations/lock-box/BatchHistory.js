import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { formatDateCol } from 'helpers/utils';
import BasicCardHeader from 'components/common/BasicCardHeader';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { batchData } from 'data/accounting/lockBox';
import { Link } from 'react-router-dom';
export default function BatchHistory() {
  const columns = [
    {
      accessor: 'batchName',
      Header: 'Batch Name',
      Cell: rowData => {
        const batchData = rowData.data[rowData.row.index];
        return (
          <Link
            to={{
              pathname: `/portal/accounting/reconciliations/lock-box/batchdetails/${batchData.batchId}`
            }}
            className="text-primary fw-semi-bold"
          >
            {batchData.batchName}
          </Link>
        );
      }
    },
    {
      accessor: 'batchType',
      Header: 'Batch Type'
    },
    {
      accessor: 'batchStatus',
      Header: 'Batch Status'
    },
    {
      accessor: 'batchAmount',
      Header: ' Batch Amount',
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
    },
    {
      accessor: 'batchOwner',
      Header: 'Batch Owner'
    },
    {
      accessor: 'timeCreated',
      Header: 'Time Created',
      Cell: rowData => {
        return formatDateCol(rowData, 'depositDate');
      }
    }
  ];
  return (
    <>
      <Card className={'h-lg-100'}>
        <Card.Header>
          <h5>20220116-Cash/Money1-{batchData[0].createdBy}</h5>

          <Row md={6}>
            <Button
              size="sm"
              variant={'falcon-primary'}
              onClick={() => window.print()}
            >
              Print
            </Button>

            <Button size="sm" variant={'falcon-primary'}>
              Edit
            </Button>
          </Row>
        </Card.Header>
        <Card.Body>
          <AdvanceTableWrapper
            columns={columns}
            data={batchData}
            selection
            sortable
            setSelectedRowIDs={val => this.setState({ SelectedRowID: val })}
            pagination
            perPage={7}
            rowCount={batchData.length}
          >
            <Card className={'h-100'}>
              <BasicCardHeader name={''} fontSize={'fs-0'} />
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
        </Card.Body>
      </Card>
    </>
  );
}
