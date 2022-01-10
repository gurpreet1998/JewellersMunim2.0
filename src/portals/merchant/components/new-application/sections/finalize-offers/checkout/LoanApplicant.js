import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
// import { applicantAddress } from 'data/new-application/finalizeLoan';

import { loanService } from '_services/loanService';

const LoanApplicant = loanApplicationId => {
  const [applicantAddress, setapplicantAddress] = useState([]);
  // console.log('Details 1: ' + applicantAddress);
  useEffect(() => {
    loanService
      .getApplicantInfo(loanApplicationId.loanApplicationId)
      .then(res => setapplicantAddress(res));
  }, []);
  // console.log('loanApplicationId: ', loanApplicationId.loanApplicationId);
  // console.log('Details: ' + applicantAddress);
  // console.log('Name: ' + applicantAddress.name);
  return (
    <Card className="my-3 ps-card shadow-none">
      <Card.Header className="bg-none border-bottom">
        <Row className="flex-between-center">
          <Col sm="auto">
            <h5 className="mb-0">Applicant Information</h5>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          {/* {applicantAddress.map((applicantAddress, index) => ( */}
          <Col md={6} className="mb-3 mb-md-0">
            <Form.Check
              type="radio"
              // borrowerId={`address-${applicantAddress.borrowerId}`}
              className="mb-0 form-check radio-select"
            >
              {/* <Form.Check.Input
                  type="radio"
                  name="applicantAddress"
                  defaultChecked={index === 0}
                /> */}
              <Form.Check.Label className="mb-0 fw-bold d-block">
                {applicantAddress.name}
                <span className="radio-select-content">
                  <span>
                    {applicantAddress.street} <br /> {applicantAddress.city},{' '}
                    {applicantAddress.state} {applicantAddress.zip}{' '}
                    <span className="d-block mb-0 pt-2">
                      {applicantAddress.email}
                    </span>
                  </span>
                </span>
              </Form.Check.Label>
            </Form.Check>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoanApplicant;
