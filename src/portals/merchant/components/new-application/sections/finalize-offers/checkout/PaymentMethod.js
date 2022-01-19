import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DocuSignModal from './DocuSignModal';
import { OfferContext } from 'context/Context';
import { saveConfirmAndPayData } from '_services/userService';
import SubmitInitialPayment from './payments/SubmitInitialPayment';
import SubmitMonthlyPayment from './payments/SubmitMonthlyPayment';
import PaymentCardForm from './payments/PaymentCardForm';
import BankInfoForm from './payments/BankInfoForm';
import PaymentFormHeader from './payments/PaymentFormHeader';

const PaymentMethod = ({ payableTotal, loanOfferId, loanAppId }) => {
  const [method, setMethod] = useState('card-payment');
  const [paymentType, setPaymentType] = useState('initialPayment');
  const [modal, setModal] = useState(false);

  const {
    offersState: { selectedOffers }
  } = useContext(OfferContext);

  const { offersDispatch } = useContext(OfferContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const monthlyPayment = parseFloat(
    selectedOffers.reduce((acc, offer) => offer.monthlyPayment, 0) || 0
  );

  const autopay =
    selectedOffers.reduce((acc, offer) => offer.autopay, 0) || false;

  const isAutoPay = () => {
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
          <>
            {paymentType === 'initialPayment' ? (
              <PaymentFormHeader
                setMethod={setMethod}
                cardTypeLabel={'Credit or Debit Card'}
              />
            ) : (
              <PaymentFormHeader
                setMethod={setMethod}
                cardTypeLabel={'Debit Card'}
              />
            )}
            {method === 'card-payment' ? (
              <PaymentCardForm errors={errors} register={register} />
            ) : (
              // method === 'checking-ach'
              <BankInfoForm errors={errors} register={register} />
            )}
          </>

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
