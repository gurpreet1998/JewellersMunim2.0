import React, { useState, useEffect } from 'react';
import SubTitleCard from 'components/common/SubTitleCard';
import { Card, Row, Col, Form } from 'react-bootstrap';
import Flex from 'components/common/Flex';
// import { Button } from 'react-bootstrap';
// import { LoanDetailsTable } from 'data/accounting/landing';
import { useLocation } from 'react-router-dom';
import Checks from './Checks';
import LoanDetailsTab from './LoanDetailsTab';
import { loanDetailsByLoanId } from '_services/accounting';

const loanDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const [loanDetails, setLoanDetails] = useState([]);
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [tabData, setTabData] = useState(false);
  let loanId =
    location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log(location);

  useEffect(() => {
    loanDetailsByLoanId
      .getLoanDetailsByLoanId(loanId)
      .then(res => setLoanDetails(res));
  }, []);
  return (
    <>
      <Row className="g-3 mb-1">
        <Col md={12}>
          <SubTitleCard
            title="Loan Details"
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
        <Card.Body>
          <Row>
            <Col
              xxl={4}
              sm={4}
              className={
                'border-bottom border-sm-0 border-sm-end border-lg-bottom border-xxl-0 border-xxl-end ps-4'
              }
            >
              <Row>
                <h6 className="mb-0 flex-1">Loan Status</h6>
                {/* <p className="mb-0 flex-1" text-align="right">
                  Loan ID: {loanId}
                </p> */}
              </Row>
              <h4 className="mt-4 flex-1">Open Complaint</h4>
            </Col>
            <Col
              xxl={4}
              sm={4}
              className={
                'border-bottom border-sm-0 border-sm-end border-lg-bottom border-xxl-0 border-xxl-end ps-4'
              }
            >
              <Row>
                <h6 className="mb-0 flex-1">Merchant</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.merchant}
                </h6>
              </Row>
              <Row>
                <h6 className="mb-0 flex-1">Borrower Name</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.borrowerName}
                </h6>
              </Row>
              <Row>
                <h6 className="mb-0 flex-1">Preferred Name</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.perferredName}
                </h6>
              </Row>
              <Row>
                <h6 className="mb-0 flex-1">Authorized Party</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.authorizedParty}
                </h6>
              </Row>
            </Col>
            <Col
              xxl={4}
              sm={4}
              className={'border-lg-end border-xxl-0 border-lg-bottom  ps-4'}
            >
              <Row>
                <h6 className="mb-0 flex-1">Location</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.location}
                </h6>
              </Row>
              <Row>
                <h6 className="mb-2 flex-1">Current Amount Due</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.currentAmountDue}
                </h6>
              </Row>
              <Row>
                <h6 className="mb-0 flex-1">Current Principal</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.currentPrincipal}
                </h6>
              </Row>
              <Row>
                <h6 className="mb-0 flex-1">Next Due Date</h6>
                <h6 className="mb-4 flex-1" text-align="right">
                  {loanDetails.nextDueDate}
                </h6>
              </Row>
            </Col>
          </Row>
          <Checks></Checks>
        </Card.Body>
      </Card>
      {/* <TabList></TabList> */}
      <Col md={12}>
        {!tabData && <LoanDetailsTab loanId={loanId}></LoanDetailsTab>}
      </Col>
    </>
  );
};

export default loanDetails;
