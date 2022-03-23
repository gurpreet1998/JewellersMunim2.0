import React, { useState } from 'react';
import { Card, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ValidateCaller from './ValidateCaller';
import ScriptMessage from './ScriptMessage';
import { selectScriptData } from 'data/accounting/loandetails';
import SoftBadge from 'components/common/SoftBadge';
import TitleCard from 'components/common/TitleCard';
import Checks from './Checks';
import LoanDetailsTab from './LoanDetailsTab';
// import { loanDetailsByLoanId } from '_services/accounting';

const customerLoanDetails = () => {
  const [scriptModal, setScriptModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loanDetails, setLoanDetails] = useState([]);
  const location = useLocation();
  const closeScript = () => {
    setScriptModal(false);
    setModal(false);
    setTabData(true);
  };
  const [selectedScript, setSelectedScript] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [tabData, setTabData] = useState(false);
  let loanId =
    location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log(location);
  const [modal, setModal] = useState(false);
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  const closeModal = () => {
    setModal(false);
    setScriptModal(false);
    setTabData(true);
  };
  // useEffect(() => {
  //   loanDetailsByLoanId
  //     .getLoanDetailsByLoanId(loanId)
  //     .then(res => setLoanDetails(res));
  // }, []);
  return (
    <>
      <Row>
        <Col md={12}>
          <TitleCard
            title={
              loanDetails.borrowerName === undefined
                ? 'Loan Details'
                : `Loan Details > ${loanDetails.borrowerName}`
            }
            // endEl={
            //   <Flex>
            //     <Form.Select size="sm" className="me-4">
            //       <option value="">Notes</option>
            //       {/* {banks.map((bank, index) => (
            //         <option value={index} key={bank}>
            //           {bank}
            //         </option>
            //       ))} */}
            //     </Form.Select>
            //     <Form.Select size="sm" className="me-4">
            //       <option value="">Select Script</option>
            //     </Form.Select>
            //   </Flex>
            // }
          />
        </Col>
      </Row>

      <Card className={'h-lg-100 mb-3 fs--1'}>
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">
                Loan Number: {loanDetails.loanNumber}
              </h6>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="bg-light border-top">
          <Row>
            <Col lg xxl={5}>
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
              <Row>
                <Col xs={5} sm={4} md="auto">
                  <p className="fw-semi-bold mb-1">Merchant</p>
                  <p className="fw-semi-bold mb-1">Borrower Name</p>
                  <p className="fw-semi-bold mb-1">
                    {loanDetails.preferredName != null ? 'Preferred Name' : ''}
                  </p>
                  <p className="fw-semi-bold mb-1">
                    {loanDetails.authorizedParty != null
                      ? 'Authorized Party'
                      : ''}
                  </p>
                </Col>
                <Col>
                  <p className="mb-1">{loanDetails.merchant || 'Not Found'}</p>
                  <p className="mb-1">
                    {loanDetails.borrowerName || 'Not Found'}
                  </p>
                  <p className="mb-1">
                    {loanDetails.preferredName != null
                      ? loanDetails.preferredName
                      : ''}
                  </p>
                  <p className="mb-1">
                    {loanDetails.authorizedParty != null
                      ? loanDetails.authorizedParty
                      : ''}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row className="mt-4">
                <Col xs={5} sm={4} md="auto">
                  <p className="fw-semi-bold mb-1">Location</p>
                  <p className="fw-semi-bold mb-1">Current Due</p>
                  <p className="fw-semi-bold mb-1">Current Principal</p>
                </Col>
                <Col>
                  <p className="mb-1">{loanDetails.location || 'Not Found'}</p>
                  <p className="mb-1">
                    {loanDetails.currentAmountDue != null ? (
                      <NumberFormat
                        value={loanDetails.currentAmountDue}
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
                    {loanDetails.currentPrincipal != null ? (
                      <NumberFormat
                        value={loanDetails.currentPrincipal}
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
                </Col>
              </Row>
            </Col>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-0 mt-lg-0">
              <Row className="mt-4">
                <Col md="auto">
                  <p className="fw-semi-bold mb-1 text-warning">
                    Next Due Date
                  </p>
                  <p className="fw-semi-bold mb-1">Next Contact Date</p>
                </Col>
                <Col>
                  <p className="mb-1">
                    {loanDetails.nextDueDate != null
                      ? loanDetails.nextDueDate
                      : 'Not Found'}
                  </p>
                  <p className="mb-1">
                    {loanDetails.nextContactDate || 'Not Found'}
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
      {/* <TabList></TabList> */}
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
          />
        ) : (
          <LoanDetailsTab loanId={loanId} />
        )}
      </Col>
    </>
  );
};

export default customerLoanDetails;
