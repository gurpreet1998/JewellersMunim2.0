import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import { formatDateCol } from 'helpers/utils';
import { AuthContext } from 'context/Context';
import { useForm } from 'react-hook-form';
import AddDisputes from './disputes/AddDisputes';
import { useParams } from 'react-router-dom';

const DisputesComplaints = () => {
  const { loanId } = useParams();
  const context = useContext(AuthContext);
  const currentRole = context.account.idToken.extension_Role;
  console.log(currentRole);
  const [disputes] = useState([]);
  console.log('DisputesInfo', disputes);
  if (currentRole === 'Customer-Care') {
    useEffect(() => {
      console.log('Call integration service here', loanId);
    }, []);
  }
  const columns = [
    {
      accessor: 'disputeDate',
      Header: 'Date',
      Cell: rowData => {
        return formatDateCol(rowData, 'disputeDate');
      }
    },
    {
      accessor: 'disputeType',
      Header: 'Dispute Type'
    },
    {
      accessor: 'escalations',
      Header: 'Escalations'
    },
    {
      accessor: 'disputeAmount',
      Header: 'Dispute Amount'
    },
    {
      accessor: 'source',
      Header: 'Source',
      headerProps: { className: 'pe-4' }
    },
    {
      accessor: 'user',
      Header: 'User'
    },
    {
      accessor: 'assignedTo',
      Header: 'Assigned To'
    },
    {
      accessor: 'notes',
      Header: 'Notes'
    }
  ];
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

  return (
    <div>
      {currentRole === 'Customer-Care' ? (
        <Row ml={'auto'}>
          <Col></Col>
          <Col md="auto">
            <Button
              size="sm"
              variant={'falcon-primary'}
              // className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
              onClick={() => closeModal()}
              className="btn-sm mb-1 mt-1"
            >
              Add
            </Button>
            {show && (
              <AddDisputes
                register={register}
                setValue={setValue}
                errors={errors}
                watch={watch}
                closeModal={closeModal}
                show={show}
              />
            )}
          </Col>
          <Col md="auto">
            <Button
              size="sm"
              variant={'falcon-primary'}
              className="btn-sm mb-1 mt-1"
            >
              Update
            </Button>
          </Col>
          <Col md="auto"></Col>
        </Row>
      ) : (
        <></>
      )}

      <AdvanceTableWrapper
        columns={columns}
        data={disputes}
        sortable
        pagination
        perPage={7}
      >
        <Card>
          <Card.Body className="px-0">
            <AdvanceTable
              table
              headerClassName="bg-200 text-900 text-nowrap align-middle"
              rowClassName="text-nowrap align-middle"
              tableProps={{
                size: 'sm',
                className: 'fs--1 mb-0 overflow-hidden'
              }}
            />
          </Card.Body>
        </Card>
      </AdvanceTableWrapper>
    </div>
  );
};

export default DisputesComplaints;
