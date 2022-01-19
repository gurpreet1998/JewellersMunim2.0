import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';

import { loanService } from '_services/loanService';

const LoanApplicant = loanApplicationId => {
  const [applicantAddress, setApplicantAddress] = useState([]);

  useEffect(() => {
    loanService
      .getApplicantInfo(loanApplicationId.loanApplicationId)
      .then(res => setApplicantAddress(res));
  }, []);

  return (
    <Card className="my-3 ps-card shadow-none">
      <Card.Header className="bg-none border-bottom me-4">
        <Row className="flex-between-center">
          <Col sm="auto">
            <h5 className="mb-0">Applicant Information</h5>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={8} className="mb-3 mb-md-0">
            <Form.Check type="radio" className="mb-0 pe-6 pe-md-2 pe-lg-0">
              {applicantAddress.length !== 0 ? (
                <Form.Check.Label className="mb-0 fw-bold d-block">
                  {applicantAddress.name}
                  <span className="radio-select-content">
                    <span>
                      <h6 className={'fw-medium text-uppercase text-800'}>
                        Address
                      </h6>
                      <div className={'text-700'}>
                        {applicantAddress.street}
                      </div>
                      <div className={'text-700'}>
                        {applicantAddress.city}, {applicantAddress.state}{' '}
                        {applicantAddress.zip}
                      </div>
                      <h6 className={'fw-medium text-uppercase text-800 pt-3'}>
                        E-mail
                      </h6>
                      <div className={'text-700'}>
                        <span className="d-block mb-0">
                          {applicantAddress.email}
                        </span>
                      </div>
                    </span>
                  </span>
                </Form.Check.Label>
              ) : (
                <LoadingSpinner messageText={'Loading...'} />
              )}
            </Form.Check>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoanApplicant;
