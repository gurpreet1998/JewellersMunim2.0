import React, { useState } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import TitleCard from 'components/common/TitleCard';
import Checks from './Checks';
import LoanDetailsTab from './LoanDetailsTab';
import { useLoanDetails } from 'hooks/useAccountingData';
import { formatDateStr } from 'helpers/utils';

const loanDetails = () => {
  const [tabData] = useState(false);

  const loanParams = useParams();
  const loanId = loanParams.loanId;
  const { isLoading, data: loan } = useLoanDetails(loanId);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard
            title={
              isLoading
                ? 'Loan Details'
                : `Loan Details > ${loan?.data?.borrowerName}`
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
                Loan Number: {loan?.data?.loanNumber}
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
                  {isLoading ? 'Loading...' : loan?.data?.loanStatus}
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
                    {loan?.data?.preferredName !== null ? 'Preferred Name' : ''}
                  </p>
                  <p className="fw-semi-bold mb-2">
                    {loan?.data?.authorizedParty !== null
                      ? 'Authorized Party'
                      : ''}
                  </p>
                </Col>
                <Col>
                  <p className="mb-2">{loan?.data?.merchant || 'Not Found'}</p>
                  <p className="mb-2">
                    {loan?.data?.borrowerName || 'Not Found'}
                  </p>
                  <p className="mb-2">
                    {loan?.data?.preferredName !== null
                      ? loan?.data?.preferredName
                      : ''}
                  </p>
                  <p className="mb-2">
                    {loan?.data?.authorizedParty !== null
                      ? loan?.data?.authorizedParty
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
                  <p className="fw-semi-bold mb-2">Next Contact Date</p>
                </Col>
                <Col>
                  <p className="mb-2">{loan?.data?.location || 'Not Found'}</p>
                  <p className="mb-2">
                    {loan?.data?.currentAmountDue !== null ? (
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
                  <p className="mb-2">
                    {loan?.data?.currentPrincipal !== null ? (
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
                  <p className="mb-2">
                    {loan?.data?.nextDueDate !== null
                      ? formatDateStr(loan?.data?.nextDueDate)
                      : 'Not Found'}
                  </p>
                  <p className="mb-2">
                    {loan?.data?.nextContactDate || 'Not Found'}
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

      <Col md={12}>{!tabData && <LoanDetailsTab loanId={loanId} />}</Col>
    </>
  );
};

export default loanDetails;
