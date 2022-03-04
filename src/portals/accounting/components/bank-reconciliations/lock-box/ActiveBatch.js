import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { formatDateCol } from 'helpers/utils';
import BasicCardHeader from 'components/common/BasicCardHeader';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { batchData } from 'data/accounting/lockBox';
import FindLoan from './FindLoan';
export default function ActiveBatch() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(!show);
  };
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
        <Card.Body>
          <Row>
            <Col xs={3} lg={3}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
                onClick={() => window.print()}
              >
                Print
              </Button>
            </Col>
            <Col xs={3} lg={4}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
              >
                Close Batch
              </Button>
            </Col>
            <Col xs={3} lg={4}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
              >
                Mark Batch as submitted
              </Button>
            </Col>
            {/* </Row> */}
            {/* <Row> */}
            <Col xs={3} lg={4}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
                onClick={() => closeModal()}
              >
                Post Payments
              </Button>
            </Col>
          </Row>
          {show && (
            <FindLoan
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              closeModal={closeModal}
              show={show}
            />
          )}

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
      {/* <PostPayment show={show} closeModal={closeModal} /> */}
    </>
  );
}
