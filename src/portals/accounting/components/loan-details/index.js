/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Dropdown } from 'react-bootstrap';
import SoftBadge from 'components/common/SoftBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { useParams, useHistory } from 'react-router-dom';
import { useLoanDetails } from 'hooks/useAccountingData';
import { useForm } from 'react-hook-form';
import Checks from 'components/common/loan-details/Checks';
import { selectScriptData } from 'data/accounting/loandetails';
import ScriptMessage from 'components/common/loan-details/ScriptMessage';
import ValidateCaller from 'components/common/loan-details/ValidateCaller';
import LoanDetailsTab from 'components/common/loan-details/LoanDetailsTab';
import { transactionHistoryService } from '_services/accounting';
const accountingloanDetails = () => {
  const [data, setData] = useState([]);
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  const history = useHistory();
  console.log('History', history);
  const backHandle = () => {
    history.goBack();
  };
  const [modal, setModal] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [tabData, setTabData] = useState(false);
  const [scriptModal, setScriptModal] = useState(false);

  const [selectedScript, setSelectedScript] = useState('');
  const loanParams = useParams();
  const loanId = loanParams.loanId;
  const { data: loan } = useLoanDetails(loanId);
  console.log('Loan', loan?.data);
  useEffect(() => {
    transactionHistoryService
      .getBorrowerVerification(loanId)
      .then(res => setData(res[0]));
  }, []);
  console.log('Dta', data);
  const closeModal = () => {
    setModal(false);
    setScriptModal(false);
    setTabData(true);
  };
  const closeScript = () => {
    setScriptModal(false);
    setModal(false);
    setTabData(true);
  };
  return (
    <>
      <Card className={'h-lg-100 mb-3 fs--1'}>
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">
                Loan Number: {loan?.data?.loanNumber}
              </h6>
            </Col>
            <Col md="auto">
              <Button onClick={backHandle}>Go Back</Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="bg-light border-top">
          <Row>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row>
                <Col xs={5} sm={4} md="auto">
                  <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                    Loan Number: {loan?.data?.loanNumber}
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
                    {loan?.data?.authorizedParty != null
                      ? 'Authorized Party'
                      : ''}
                  </p>
                  <p className="fw-semi-bold mb-1" />
                  <p className="fw-semi-bold mb-1">SSN</p>
                  <p className="fw-semi-bold mb-1">DOB</p>
                </Col>
                <Col>
                  <p className="mb-1">{loan?.data?.borrowerName}</p>
                  <p className="mb-1">
                    {loan?.preferredName != null
                      ? loan?.data?.preferredName
                      : ''}
                  </p>
                  <p className="mb-1">
                    {loan?.authorizedParty != null
                      ? loan?.data?.authorizedParty
                      : ''}
                  </p>
                  <p className="mb-1">{loan?.data?.SSN || 'Not Found'}</p>
                  <p className="mb-1">{loan?.data?.DOB || 'Not Found'}</p>
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
                  <p className="mb-1">{loan?.data?.merchant || 'Not Found'}</p>
                  <p className="mb-1">{loan?.data?.location || 'Not Found'}</p>
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
                        value={loan?.data?.currentAmountDue}
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
                    {loan?.data?.currentPrincipal != null ? (
                      <NumberFormat
                        value={loan?.data?.currentPrincipal}
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
                    {loan?.data?.nextDueDate != null
                      ? loan?.data?.nextDueDate
                      : 'Not Found'}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row md={12}>
            <Col md="auto">
              <Checks loanId={loanId} />
            </Col>
            <Col md="auto">
              <Button className="btn-sm">Add Notes</Button>
            </Col>
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
                Validate/Update
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
            data={data}
          />
        ) : (
          <LoanDetailsTab loanId={loanId} />
        )}
      </Col>
    </>
  );
};

export default accountingloanDetails;
