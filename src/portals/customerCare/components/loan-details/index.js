/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';
import { useLoanDetails } from 'hooks/useAccountingData';
import { formatDateStr } from 'helpers/utils';
import { useForm } from 'react-hook-form';
import { selectScriptData } from 'data/accounting/loandetails';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import TitleCard from 'components/common/TitleCard';
import ValidateCaller from 'components/common/loan-details/ValidateCaller';
import ScriptMessage from 'components/common/loan-details/ScriptMessage';
import Checks from 'components/common/loan-details/Checks';
import LoanDetailsTab from 'components/common/loan-details/LoanDetailsTab';
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

  const [tabData, setTabData] = useState(false);
  const [scriptModal, setScriptModal] = useState(false);

  const [selectedScript, setSelectedScript] = useState('');
  const loanParams = useParams();
  const loanId = loanParams.loanId;
  const { isLoading, data: loan } = useLoanDetails(loanId);
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
      <h5 className="fw-semi-bold mb-1">Loan Details</h5>
      <Card className={'h-lg-100 mb-3 fs--1'}>
        {/* <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">
                Loan Number: {loanDetails.loanNumber}
              </h6>
            </Col>
          </Row>
        </Card.Header> */}
        <Card.Body className="bg-light border-top">
          <Row>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row>
                <Col xs={5} sm={4} md="auto">
                  <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                    Loan Number: {loan?.loanNumber}
                  </h6>
                  <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                    <strong className="me-2">Loan Status: </strong>
                    <SoftBadge pill bg="warning" className="fs--2">
                      {' '}
                      Open
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
                  <p className="mb-2">
                    {loan?.data?.nextDueDate !== null
                      ? formatDateStr(loan?.data?.nextDueDate)
                      : 'Not Found'}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer>
          <Row className="justify-content-md-center">
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
