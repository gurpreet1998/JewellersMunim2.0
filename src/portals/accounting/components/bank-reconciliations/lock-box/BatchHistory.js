import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import BasicCardHeader from 'components/common/BasicCardHeader';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { batchHistoryData } from 'data/accounting/lockBox';
import SearchBox from 'components/navbar/top/SearchBox';
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
      accessor: 'batchOwner',
      Header: 'Batch Owner'
    },
    {
      accessor: 'dateCreated',
      Header: 'Date Created'
    }
  ];
  return (
    <>
      <Card className={'h-lg-100'}>
        <Card.Header>
          <Row md={6}>
            <Col>
              {' '}
              <Button
                size="sm"
                variant={'falcon-primary'}
                onClick={() => window.print()}
              >
                Print
              </Button>
            </Col>
            <Col>
              <Button size="sm" variant={'falcon-primary'}>
                Edit
              </Button>
            </Col>
            <Col>
              <SearchBox />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <AdvanceTableWrapper
            columns={columns}
            data={batchHistoryData}
            selection
            sortable
            setSelectedRowIDs={val => this.setState({ SelectedRowID: val })}
            pagination
            perPage={7}
            rowCount={batchHistoryData.length}
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
