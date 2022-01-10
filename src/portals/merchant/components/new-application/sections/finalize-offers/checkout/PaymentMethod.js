import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import cards from 'assets/img/icons/icon-payment-methods-grid.png';
import DocuSignModal from './DocuSignModal';
import { OfferContext } from 'context/Context';
import { saveConfirmAndPayData } from '_services/userService';
import SubmitInitialPayment from './payments/SubmitInitialPayment';
import SubmitMonthlyPayment from './payments/SubmitMonthlyPayment';

const PaymentMethod = ({ payableTotal, loanOfferId, loanAppId }) => {
  const [method, setMethod] = useState('credit-card');
  const [paymentType, setPaymentType] = useState('initialPayment');
  const [modal, setModal] = useState(false);

  const {
    offersState: { selectedOffers }
  } = useContext(OfferContext);

  const { offersDispatch } = useContext(OfferContext);
  const { register, handleSubmit } = useForm();

  const interestRate = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.intrestRate, 0) || 20.99
  );

  const monthlyPayment = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.monthlyPayment, 0) || 0
  );

  const autopay =
    selectedOffers.reduce((acc, offer) => offer.autopay, 0) || false;

  const isAutoPay = () => {
    // Returns true if interest rate is the value for a
    // loan with auto-pay. This is a temp hack b/c currently
    // every loan is receiving the response autopay=false
    return autopay === true;
  };

  const onSubmit = data => {
    offersDispatch({
      type: 'INITIAL_PAYMENT',
      payload: {
        paymentInfo: {
          ...data
        }
      }
    });

    setPaymentType('recurringPayment');
    paymentType === 'recurringPayment' ? toggle() : ''; // console.log('Not set');

    {
      paymentType === 'initialPayment'
        ? toast(
            <div className="text-700">
              <h5 className="text-success fs-0 mb-0">
                Initial Payment Successful!
              </h5>
              <hr className="my-2" />
              Total: <strong>${payableTotal}</strong>
              <br />
              Payment method:{' '}
              <strong className="text-capitalize">
                {method.split('-').join(' ')}
              </strong>
            </div>
          )
        : toast(
            <div className="text-700">
              <h5 className="text-success fs-0 mb-0">
                1st Months Payment Successful!
              </h5>
              <hr className="my-2" />
              Total: <strong>${monthlyPayment}</strong>
              <br />
              Payment method:{' '}
              <strong className="text-capitalize">
                {method.split('-').join(' ')}
              </strong>
            </div>
          );
    }

    // calling and save loan
    paymentType === 'initialPayment'
      ? saveConfirmAndPayData.saveConfirmAndPayAppDetail(
          data,
          loanOfferId,
          loanAppId,
          payableTotal
        )
      : saveConfirmAndPayData.saveConfirmAndPayAppDetail(
          data,
          loanOfferId,
          loanAppId,
          monthlyPayment
        );
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <DocuSignModal modal={modal} setModal={setModal} />

      <Card className={'my-3 shadow-none px-card'}>
        <Card.Header className="bg-none border-bottom">
          <h5 className="mb-0">Payment Method</h5>
        </Card.Header>
        <Card.Body>
          {paymentType === 'initialPayment' ? (
            <>
              <Form.Check
                type="radio"
                id="credit-card"
                className="mb-0 form-check"
              >
                <Form.Check.Input
                  type="radio"
                  onChange={e => setMethod(e.target.id)}
                  name="payment-method"
                  defaultChecked
                />
                <Form.Check.Label className="mb-2 fs-1">
                  Debit or Credit Card
                </Form.Check.Label>
              </Form.Check>
              <Form>
                <Row className="gx-0 ps-2 mb-4">
                  <Col sm={8} className="px-3">
                    <Form.Group className="mb-3">
                      <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                        Card Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="cardNumber"
                        {...register('cardNumber')}
                        placeholder="•••• •••• •••• ••••"
                      />
                    </Form.Group>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          Exp Date
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="expDate"
                          {...register('expDate')}
                          placeholder="mm/yy"
                        />
                      </Col>
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          CVV{''}
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="cvvinfo">
                                Card verification value
                              </Tooltip>
                            }
                          >
                            <Link to="#!">
                              <FontAwesomeIcon
                                icon="question-circle"
                                className="ms-2"
                              />
                            </Link>
                          </OverlayTrigger>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="cvv"
                          placeholder="123"
                          {...register('cvv', {
                            maxLength: 3,
                            pattern: /[0-9]{3}/
                          })}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={4}
                    className="ps-3 text-center pt-2 d-none d-sm-block"
                  >
                    <div className="rounded-1 p-2 mt-3 bg-100">
                      <div className="text-uppercase fs--2 fw-bold">
                        We Accept
                      </div>
                      <img src={cards} width={120} alt="card payment options" />
                    </div>
                  </Col>
                </Row>
              </Form>
              <Form.Check
                type="radio"
                id="checking-ach"
                onChange={e => setMethod(e.target.id)}
                className="mb-0 form-check"
              >
                <Form.Check.Input
                  type="radio"
                  onChange={e => setMethod(e.target.id)}
                  name="payment-method"
                />
                <Form.Check.Label className="mb-2 fs-1">
                  Checking (ACH) or Savings
                </Form.Check.Label>
              </Form.Check>
              <Form>
                <Row className="gx-0 ps-2 mb-4">
                  <Col sm={8} className="px-3">
                    <Form.Group className="mb-3">
                      <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                        Bank/ Institution Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="cardNumber"
                        {...register('bankName')}
                        placeholder=""
                      />
                    </Form.Group>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          ABA/ Routing Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="routingNumber"
                          {...register('routingNumber')}
                          placeholder="12345678"
                        />
                      </Col>
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          Account Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="accountNumber"
                          {...register('accountNumber')}
                          placeholder="12345678"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </>
          ) : (
            <>
              <Form.Check
                type="radio"
                id="credit-card"
                className="mb-0 form-check"
              >
                <Form.Check.Input
                  type="radio"
                  onChange={e => setMethod(e.target.id)}
                  name="payment-method"
                  defaultChecked
                />
                <Form.Check.Label className="mb-2 fs-1">
                  Debit Card
                </Form.Check.Label>
              </Form.Check>
              <Form>
                <Row className="gx-0 ps-2 mb-4">
                  <Col sm={8} className="px-3">
                    <Form.Group className="mb-3">
                      <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                        Card Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="cardNumber"
                        {...register('cardNumber')}
                        placeholder="•••• •••• •••• ••••"
                      />
                    </Form.Group>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          Exp Date
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="expDate"
                          {...register('expDate')}
                          placeholder="mm/yy"
                        />
                      </Col>
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          CVV{''}
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="cvvinfo">
                                Card verification value
                              </Tooltip>
                            }
                          >
                            <Link to="#!">
                              <FontAwesomeIcon
                                icon="question-circle"
                                className="ms-2"
                              />
                            </Link>
                          </OverlayTrigger>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="cvv"
                          placeholder="123"
                          {...register('cvv', {
                            maxLength: 3,
                            pattern: /[0-9]{3}/
                          })}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
              <Form.Check
                type="radio"
                id="checking-ach"
                onChange={e => setMethod(e.target.id)}
                className="mb-0 form-check"
              >
                <Form.Check.Input
                  type="radio"
                  onChange={e => setMethod(e.target.id)}
                  name="payment-method"
                />
                <Form.Check.Label className="mb-2 fs-1">
                  Checking (ACH) or Savings
                </Form.Check.Label>
              </Form.Check>
              <Form>
                <Row className="gx-0 ps-2 mb-4">
                  <Col sm={8} className="px-3">
                    <Form.Group className="mb-3">
                      <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                        Bank/ Institution Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="cardNumber"
                        {...register('bankName')}
                        placeholder=""
                      />
                    </Form.Group>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          ABA/ Routing Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="routingNumber"
                          {...register('routingNumber')}
                          placeholder="12345678"
                        />
                      </Col>
                      <Col xs={6}>
                        <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                          Account Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="accountNumber"
                          {...register('accountNumber')}
                          placeholder="12345678"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </>
          )}

          <div className="border-dashed-bottom my-4" />

          {paymentType === 'initialPayment' ? (
            <SubmitInitialPayment
              payableTotal={payableTotal}
              isAutoPay={isAutoPay()}
              handleSubmit={handleSubmit(onSubmit)}
            />
          ) : (
            <SubmitMonthlyPayment
              payableTotal={monthlyPayment}
              isAutoPay={isAutoPay()}
              handleSubmit={handleSubmit(onSubmit)}
            />
          )}
        </Card.Body>
      </Card>
    </>
  );
};

PaymentMethod.propTypes = {
  payableTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loanOfferId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loanAppId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default PaymentMethod;
