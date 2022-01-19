import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import shield from 'assets/img/icons/shield.png';
import FormInput from '../../../../FormInput';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';

const SubmitMonthlyPayment = ({ payableTotal, isAutoPay, handleSubmit }) => {
  const { register } = useForm();

  const today = new Date().getDate();

  const daysList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28
  ];
  return (
    <>
      <Row>
        <Col lg={6} className="px-md-3 mb-xxl-0 position-relative">
          <div className="fs-1 fw-semi-bold">
            Loan Payment:{' '}
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
          <div className="fs--1">This your first months payment.</div>
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
                <div className="fs-1 fw-semi-bold">AutoPay Payment Day</div>
                <FormInput
                  // label="Select your payment day"
                  name="payment-date"
                  type="select"
                  errors={'error'}
                  placeholder="Select Day..."
                  options={daysList}
                  formGroupProps={{ as: Col, md: 6, className: 'mb-3' }}
                  formControlProps={{
                    ...register('payment-date', {
                      required: 'Payment date is required'
                    }),
                    defaultValue: today
                  }}
                />
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

SubmitMonthlyPayment.propTypes = {
  payableTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isAutoPay: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitMonthlyPayment;
