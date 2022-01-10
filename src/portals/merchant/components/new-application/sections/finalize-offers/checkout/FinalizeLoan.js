import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { OfferContext } from 'context/Context';
import LoanApplicant from './LoanApplicant';
import LoanSummary from './LoanSummary';
import PaymentMethod from './PaymentMethod';

const FinalizeLoan = ({ loanApplicationId }) => {
  const {
    offersState: { selectedOffers }
  } = useContext(OfferContext);

  const [paymentType] = useState('initialPayment');

  const loanAmount = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.loanAmount, 0) || 0
  );

  const selectedLoanOfferId = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.loanOfferId, 0) || 0
  );

  const downPayment = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.downPayment, 0) || 0
  );

  const interestRate = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.intrestRate, 0) || 0
  );

  const apr = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.apr, 0) || 0
  );

  const term = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.term, 0) || 0
  );

  const origFee = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.origFee, 0) || 0
  );

  const monthlyPayment = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.monthlyPayment, 0) || 0
  );

  const floridaTax = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.floridaTax, 0) || 0
  );

  const loanProgramName =
    selectedOffers.reduce((acc, offer) => offer.loanProgramName, 0) || '';

  const initialPaymentTotal = parseFloat(
    downPayment + origFee + floridaTax
  ).toFixed(2);

  const payableTotal = parseFloat(
    loanAmount + downPayment + origFee + floridaTax
  ).toFixed(2);

  return (
    <>
      <Row className="g-3">
        <Col xl={{ span: 6, order: 1 }}>
          <LoanSummary
            loanAmount={loanAmount}
            downPayment={downPayment}
            interestRate={interestRate}
            apr={apr}
            floridaTax={floridaTax}
            term={term}
            origFee={origFee}
            monthlyPayment={monthlyPayment}
            payableTotal={payableTotal}
            loanProgramName={loanProgramName}
          />
        </Col>
        <Col xl={6}>
          <LoanApplicant loanApplicationId={loanApplicationId} />
        </Col>
      </Row>
      <Row>
        <Col>
          {paymentType === 'initialPayment' ? (
            <PaymentMethod
              payableTotal={initialPaymentTotal}
              loanOfferId={selectedLoanOfferId}
              loanAppId={loanApplicationId}
            />
          ) : (
            <PaymentMethod
              payableTotal={monthlyPayment}
              loanOfferId={selectedLoanOfferId}
              loanAppId={loanApplicationId}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

FinalizeLoan.propTypes = {
  loanApplicationId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default FinalizeLoan;
