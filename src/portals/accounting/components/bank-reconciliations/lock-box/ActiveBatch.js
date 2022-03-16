import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDateCol } from 'helpers/utils';
import NumberFormat from 'react-number-format';
import BasicCardHeader from 'components/common/BasicCardHeader';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { batchData } from 'data/accounting/lockBox';
import FindLoan from './FindLoan';
import SubmitBatch from './SubmitBatch';
import { toast } from 'react-toastify';
export default function ActiveBatch() {
  //For now as a testting purpose of the buttons this opeb/close functionailty is implemented.

  // eslint-disable-next-line no-unused-vars
  const [batchData1, setBatchData] = useState(batchData);
  const [showSubmitted, setShowSubmitted] = useState(false);
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();

  const [SelectedRowID, setSelectedRowID] = useState([]);
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(!show);
  };
  const closeBatches = () => {
    // setShowSubmitted(!showSubmitted);
    const rows = Object.keys(SelectedRowID);
    let res = [];
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        if (batchData[rows[i]].batchStatus == 'Open') {
          batchData[rows[i]].batchStatus = 'Closed';
          res.push(batchData[rows[i]]);
        }
      }
      console.log(res);
    } else {
      toast.warning('Select one row atleast');
    }
  };

  const handleMatchSubmittedPopUp = () => {
    setShowSubmitted(!showSubmitted);
  };
  const markBatchSubmitted = () => {
    const rows = Object.keys(SelectedRowID);
    if (rows.length > 0) {
      let res = [];
      for (let i = 0; i < rows.length; i++) {
        if (batchData[rows[i]].batchStatus === 'Closed') {
          res.push(batchData[rows[i]]);
          setShowSubmitted(!showSubmitted);
        } else {
          toast.warning('Batch not closed');
        }
      }
      console.log(res);
      // setBatchData(res);
      // console.log('New batchData', batchData1);
    } else {
      toast.warning('Select one row atleast');
    }
  };
  useEffect(() => {
    console.log(SelectedRowID);
  }, [SelectedRowID]);
  useEffect(() => {
    console.log('Batch data changed', batchData1);
  }, [batchData1]);
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
          value={cellInfo.data[cellInfo.row.index].batchAmount}
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
      Header: 'Date Created',
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
            <Col xs={3} lg={5}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
                onClick={() => window.print()}
              >
                Print
              </Button>
            </Col>
            <Col xs={3} lg={5}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
                onClick={closeBatches}
              >
                Close Batch
              </Button>
            </Col>

            <Col xs={3} lg={5}>
              <Button
                // size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
                onClick={markBatchSubmitted}
              >
                Mark Batch as submitted
              </Button>
            </Col>

            <Col xs={3} lg={5}>
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
          {showSubmitted && (
            <SubmitBatch
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              closeModal={handleMatchSubmittedPopUp}
              show={showSubmitted}
              SelectedRowID={SelectedRowID}
            />
          )}

          <AdvanceTableWrapper
            columns={columns}
            data={batchData1}
            selection
            sortable
            setSelectedRowIDs={val => setSelectedRowID(val)}
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
