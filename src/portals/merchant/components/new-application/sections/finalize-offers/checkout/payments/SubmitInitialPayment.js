import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import shield from 'assets/img/icons/shield.png';

const SubmitInitialPayment = ({ payableTotal, isAutoPay, handleSubmit }) => {
  return (
    <>
      <Row>
        <Col lg={6} className="px-md-3 mb-xxl-0 position-relative">
          <div className="fs-1 fw-semi-bold">
            Initial Payment:{' '}
            <span className="text-primary">
              <NumberFormat
                value={payableTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </span>
          </div>
          <div className="fs--1">
            This is a ONE TIME payment for your down-payment and origination
            fee.
          </div>
          <Button
            variant="success"
            className="mt-3 px-5"
            type="submit"
            disabled={payableTotal === '0.00'}
            onClick={handleSubmit}
          >
            Confirm &amp; Pay
          </Button>
          {isAutoPay === true ? (
            <>
              <div className="border-dashed-bottom d-block d-lg-none d-xxl-none my-4" />
              <div className="vertical-line d-none d-lg-block d-xxl-block" />
            </>
          ) : (
            ''
          )}
        </Col>
        {isAutoPay === true ? (
          <Col lg={6} className="px-md-3 mb-xxl-0 position-relative">
            <div className="d-flex">
              <img
                src={shield}
                alt=""
                width="50"
                height="50"
                className="me-3 d-none d-lg-block"
              />
              <div className="flex-1">
                <div className="fs-1 fw-semi-bold">AutoPay Required</div>
                <div className="fs--1">
                  This offer provides a reduced interest rate for setting up
                  recurring payments. You will finalize your autopay schedule in
                  the next section.
                </div>
              </div>
            </div>
          </Col>
        ) : (
          ''
        )}
      </Row>
    </>
  );
};

SubmitInitialPayment.propTypes = {
  payableTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isAutoPay: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitInitialPayment;
