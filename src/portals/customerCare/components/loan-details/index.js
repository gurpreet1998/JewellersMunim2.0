/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { useLocation } from 'react-router-dom';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import TitleCard from 'components/common/TitleCard';
import Checks from './Checks';
import LoanDetailsTab from './LoanDetailsTab';
// import { loanDetailsByLoanId } from '_services/accounting';

const customerLoanDetails = () => {
  const [loanDetails, setLoanDetails] = useState([]);
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [tabData, setTabData] = useState(false);
  let loanId =
    location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log(location);

  // useEffect(() => {
  //   loanDetailsByLoanId
  //     .getLoanDetailsByLoanId(loanId)
  //     .then(res => setLoanDetails(res));
  // }, []);
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard
            title={
              loanDetails.borrowerName === undefined
                ? 'Loan Details'
                : `Loan Details > ${loanDetails.borrowerName}`
            }
            endEl={
              <Flex>
                <Form.Select size="sm" className="me-4">
                  <option value="">Notes</option>
                  {/* {banks.map((bank, index) => (
                    <option value={index} key={bank}>
                      {bank}
                    </option>
                  ))} */}
                </Form.Select>
                <Form.Select size="sm" className="me-4">
                  <option value="">Select Script</option>
                </Form.Select>
              </Flex>
            }
          />
        </Col>
      </Row>

      <Card className={'h-lg-100 mb-4'}>
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
                <Col xs={5} sm={4}>
                  <p className="fw-semi-bold mb-2">Merchant</p>
                  <p className="fw-semi-bold mb-2">Borrower Name</p>
                  <p className="fw-semi-bold mb-2">
                    {loanDetails.preferredName !== null ? 'Preferred Name' : ''}
                  </p>
                  <p className="fw-semi-bold mb-2">
                    {loanDetails.authorizedParty !== null
                      ? 'Authorized Party'
                      : ''}
                  </p>
                </Col>
                <Col>
                  <p className="mb-2">{loanDetails.merchant || 'Not Found'}</p>
                  <p className="mb-2">
                    {loanDetails.borrowerName || 'Not Found'}
                  </p>
                  <p className="mb-2">
                    {loanDetails.preferredName !== null
                      ? loanDetails.preferredName
                      : ''}
                  </p>
                  <p className="mb-2">
                    {loanDetails.authorizedParty !== null
                      ? loanDetails.authorizedParty
                      : ''}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg xxl={{ span: 5, offset: 1 }} className="mt-4 mt-lg-0">
              <Row className="mt-4">
                <Col xs={5} sm={4}>
                  <p className="fw-semi-bold mb-2">Location</p>
                  <p className="fw-semi-bold mb-2">Current Due</p>
                  <p className="fw-semi-bold mb-2">Current Principal</p>
                  <p className="fw-semi-bold mb-2">Next Due Date</p>
                </Col>
                <Col>
                  <p className="mb-2">{loanDetails.location || 'Not Found'}</p>
                  <p className="mb-2">
                    {loanDetails.currentAmountDue !== null ? (
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
                  <p className="mb-2">
                    {loanDetails.currentPrincipal !== null ? (
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
                  <p className="mb-2">
                    {loanDetails.nextDueDate !== null
                      ? loanDetails.nextDueDate
                      : 'Not Found'}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer>
          <Checks loanId={loanId} />
        </Card.Footer>
      </Card>
      {/* <TabList></TabList> */}
      <Col md={12}>{!tabData && <LoanDetailsTab loanId={loanId} />}</Col>
    </>
  );
};

export default customerLoanDetails;
