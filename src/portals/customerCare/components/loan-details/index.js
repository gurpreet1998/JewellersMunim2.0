/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { useParams, useHistory } from 'react-router-dom';
import { useLoanDetails } from 'hooks/useAccountingData';
import { useForm } from 'react-hook-form';
import { selectScriptData } from 'data/accounting/loandetails';
import SoftBadge from 'components/common/SoftBadge';
import ValidateCaller from 'components/common/loan-details/header/ValidateCaller';
import ScriptMessage from 'components/common/loan-details/header/ScriptMessage';
import Checks from 'components/common/loan-details/header/LoanChecks';
import LoanDetailsTab from 'components/common/loan-details/header/LoanDetailsTab';
import { loanService } from '_services/loanService';
import GoBackButton from 'components/common/GoBackButton';
import UpdateCaller from 'components/common/loan-details/header/UpdateCaller';
const customerLoanDetails = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const [tabData, setTabData] = useState(false);
  const [scriptModal, setScriptModal] = useState(false);

  const [selectedScript, setSelectedScript] = useState('');
  const loanParams = useParams();
  const loanId = loanParams.loanId;
  const { isLoading, data: loan } = useLoanDetails(loanId);
  const closeModal = () => {
    setModal(false);
    setUpdateModal(false);
    setScriptModal(false);
    setTabData(true);
  };
  const closeScript = () => {
    setScriptModal(false);
    setModal(false);
    setTabData(true);
  };
  const [bucket, setBucket] = useState(loanId);
  useEffect(() => {
    loanService.getLoanBucketDetails(loanId).then(res => setBucket(res));
  }, []);
  console.log(loan);
  return (
    <>
      <Card className={'h-lg-100 mb-4'}>
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">
                <font color="grey">Loan Number</font> &nbsp;
                {loan?.data?.loanNumber}
              </h6>
            </Col>
            <Col>
              <h6 className="mb-0 fs-1">
                <font color="grey">Borrower Name</font> &nbsp;
                {loan?.data?.borrowerName || 'Not Found'}
              </h6>
            </Col>
            <Col>
              <h6 className="mb-0 fs-1">
                <font color="grey">Primary Status</font> &nbsp;
                <SoftBadge pill bg="warning" className="fs--2">
                  {loan?.data?.loanStatus || 'Not Found'}
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="ms-1"
                    transform="shrink-2"
                  />
                </SoftBadge>
              </h6>
            </Col>
            <GoBackButton />
          </Row>
        </Card.Header>
        <Card.Body className="bg-light border-top">
          <Row>
            <Col style={{ borderRight: '1px solid gray' }}>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Total Amount Due</p>
                <p text-align="right" className="mb-1 flex-1">
                  {bucket?.totalAmountDue != null ? (
                    <NumberFormat
                      value={bucket?.totalAmountDue}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  ) : (
                    <NumberFormat
                      value={0}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  )}
                </p>
              </Row>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Next Due Date</p>
                <p text-align="right" className="mb-1 flex-1 text-warning">
                  {loan?.data?.nextDueDate != null
                    ? loan?.data?.nextDueDate
                    : 'Not Found'}
                </p>
              </Row>
            </Col>
            <Col style={{ borderRight: '1px solid gray' }}>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Preferred Name</p>
                <p text-align="right" className="mb-1 flex-1">
                  {loan?.data?.preferredName != null
                    ? loan?.data?.preferredName
                    : 'Not Found'}
                </p>
              </Row>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">
                  Authorized Party Name
                </p>
                <p text-align="right" className="mb-1 flex-1">
                  {loan?.data?.authorizedParty != (null || ' ')
                    ? loan?.data?.authorizedParty
                    : 'Not Found'}
                </p>
              </Row>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">
                  Authorized Relationship
                </p>
                <p text-align="right" className="mb-1 flex-1">
                  {' '}
                  Not Found
                  {/* {loan?.data?.borrowerName != null
                  ? loan?.data?.borrowerName
                  : 'Not Found'} */}
                </p>
              </Row>
            </Col>
            <Col style={{ borderRight: '1px solid gray' }}>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Merchant</p>
                <p text-align="right" className="mb-1 flex-1">
                  {loan?.data?.merchant != null
                    ? loan?.data?.merchant
                    : 'Not Found'}
                </p>
              </Row>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Location</p>
                <p text-align="right" className="mb-1 flex-1">
                  {loan?.data?.location != null
                    ? loan?.data?.location
                    : 'Not Found'}
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Secondary Status</p>
                <p text-align="right" className="mb-1 flex-1">
                  -----------
                </p>
              </Row>
              <Row>
                <p className="mb-1 flex-1 fw-semi-bold">Next Contact Date</p>
                <p text-align="right" className="mb-1 flex-1 text-warning">
                  {loan?.data?.nextContactDate != null
                    ? loan?.data?.nextContactDate
                    : 'Not Found'}
                </p>
              </Row>
            </Col>
            {/* <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row>
                <Col xs={5} sm={4} md="auto">
                  <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                    Loan Number: {loan?.loanNumber}
                  </h6>
                  <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                    <strong className="me-2">Loan Status: </strong>
                    <SoftBadge pill bg="warning" className="fs--2">
                      {' '}
                      {loan?.data?.loanStatus || 'Not Fund'}
                      <FontAwesomeIcon
                        icon="exclamation-circle"
                        className="ms-1"
                        transform="shrink-2"
                      />
                    </SoftBadge>
                  </h6>
                </Col>
              </Row>
            </Col>
            <Col lg xxl={5}>
              <Row>
                <Col xs={5} sm={4} md="auto">
                  <p className="fw-semi-bold mb-1">Borrower Name</p>
                  <p className="fw-semi-bold mb-1">
                    {loan?.preferredName != null ? 'Preferred Name' : ''}
                  </p>
                  <p className="fw-semi-bold mb-1">
                    {loan?.authorizedParty != null ? 'Authorized Party' : ''}
                  </p>
                  <p className="fw-semi-bold mb-1">SSN</p>
                  <p className="fw-semi-bold mb-1">DOB</p>
                </Col>
                <Col>
                  <p className="mb-1">{loan?.borrowerName || 'Not Found'}</p>
                  <p className="mb-1">
                    {loan?.preferredName != null ? loan?.preferredName : ''}
                  </p>
                  <p className="mb-1">
                    {loan?.authorizedParty != null ? loan?.authorizedParty : ''}
                  </p>
                  <p className="mb-1">{loan?.SSN || 'Not Found'}</p>
                  <p className="mb-1">{loan?.DOB || 'Not Found'}</p>
                </Col>
              </Row>
            </Col>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row>
                <Col xs={5} sm={4} md="auto">
                  <p className="fw-semi-bold mb-1">Merchant</p>
                  <p className="fw-semi-bold mb-1">Location</p>
                </Col>
                <Col>
                  <p className="mb-1">{loan?.merchant || 'Not Found'}</p>
                  <p className="mb-1">{loan?.location || 'Not Found'}</p>
                </Col>
              </Row>
            </Col>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row>
                <Col md="auto">
                  <p className="fw-semi-bold mb-1">Current Amount Due</p>
                  <p className="fw-semi-bold mb-1">Current Principal</p>
                  <p className="fw-semi-bold mb-1 text-warning">
                    Next Due Date
                  </p>
                </Col>
                <Col>
                  <p className="mb-1">
                    {loan?.currentAmountDue != null ? (
                      <NumberFormat
                        value={loan?.currentAmountDue}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    ) : (
                      <NumberFormat
                        value={0}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    )}
                  </p>
                  <p className="mb-1">
                    {loan?.currentPrincipal != null ? (
                      <NumberFormat
                        value={loan?.currentPrincipal}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    ) : (
                      <NumberFormat
                        value={0}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    )}
                  </p>
                  <p className="mb-1">
                    {loan?.nextDueDate != null
                      ? loan?.nextDueDate
                      : 'Not Found'}
                  </p>
                </Col>
              </Row>
            </Col> */}
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row md={12}>
            <Col md="auto">
              <Checks loanId={loanId} />
            </Col>
            {/* <Col md="auto">
              <Button className="btn-sm">Add Notes</Button>
            </Col> */}
            <Col md="auto">
              <Dropdown className="e-caret-hide">
                <Dropdown.Toggle className="btn-sm">
                  Select Script
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {selectScriptData.map(item => (
                    <Dropdown.Item
                      key={item.key}
                      onClick={e => {
                        setScriptModal(true);
                        setSelectedScript(e.target.text);
                        console.log(
                          'Event at dropdown',
                          e.target.text,
                          item.key
                        );
                      }}
                    >
                      {item.value}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md="auto">
              <Button onClick={() => setModal(true)} className={'btn-sm'}>
                Validate
              </Button>
            </Col>
            <Col md="auto">
              <Button onClick={() => setUpdateModal(true)} className={'btn-sm'}>
                Update
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Col>
        {scriptModal ? (
          <ScriptMessage
            show={true}
            closeModal={closeScript}
            message={selectedScript}
          />
        ) : modal ? (
          <ValidateCaller
            register={register}
            setValue={setValue}
            errors={errors}
            watch={watch}
            show={true}
            closeModal={closeModal}
            loanId={loanId}
            data={[]}
          />
        ) : updateModal ? (
          <UpdateCaller
            register={register}
            setValue={setValue}
            errors={errors}
            watch={watch}
            show={true}
            closeModal={closeModal}
            loanId={loanId}
            data={[]}
          />
        ) : (
          <LoanDetailsTab loanId={loanId} />
        )}
      </Col>
    </>
  );
};

export default customerLoanDetails;
