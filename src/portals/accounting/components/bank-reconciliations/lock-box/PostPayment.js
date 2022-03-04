import React from 'react';
import { Button, Row, Form, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import FormInput from 'portals/merchant/components/new-application/FormInput';
import { useForm } from 'react-hook-form';
import FalconCloseButton from 'components/common/FalconCloseButton';
const PostPayment = ({ show, closeModal, data }) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    setValue
    // clearErrors
  } = useForm();
  const handlePostPayment = () => {
    closeModal();
  };
  console.log('Data in post', data);
  const paymentTypeData = ['Check/Cheque', 'Cash', 'Money Order'];
  const paymentTypeData1 = ['Regular', 'Postal Money order'];
  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <FalconCloseButton
            size="sm"
            className="position-absolute top-0 end-0 me-2 mt-2"
            onClick={() => handlePostPayment()}
          />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <label>Loan Number: {data.loanNumber}</label>
          </Row>
          <Row>
            <label>First Name: {data.borrowerName.split(' ')[0]}</label>
          </Row>
          <Row>
            <label>Last Name: {data.borrowerName.split(' ')[1]}</label>
          </Row>
          <Row>
            <label>Date: </label>
          </Row>
          <Row>
            <label className="sm-6 xl-3">Payment Method</label>
            <Form.Select
              label={'Payment Method'}
              size="sm"
              setValue={setValue}
              typeof="select"
              className="me-2 mb-2"
            >
              <option value="">Select Payment Method...</option>
              {paymentTypeData.map((payment, index) => (
                <option value={index} key={payment}>
                  {payment}
                </option>
              ))}
            </Form.Select>
          </Row>
          <Row>
            <FormInput
              label="Payment Amount"
              name="paymentAmount"
              errors={errors}
              formGroupProps={{
                as: Row,
                // md: 4,
                // xl: 3,
                className: 'md-8'
              }}
              formControlProps={{
                ...register('paymentAmount'),
                placeholder: '$'
              }}
            />
          </Row>
          <Row>
            <label className="sm-6 xl-3">Payment Type</label>
            <Form.Select
              label={'Payment Type'}
              size="sm"
              setValue={setValue}
              typeof="select"
              //   onChange={e => {
              //     setPaymentType(e.target.value);
              //     // console.log(paymentType);
              //   }}
              className="me-2 mb-2"
            >
              <option value="">Select Payment Type...</option>
              {paymentTypeData1.map((payment, index) => (
                <option value={index} key={payment}>
                  {payment}
                </option>
              ))}
            </Form.Select>
          </Row>
          <Row>
            <FormInput
              label="Add notes"
              name="addNotes"
              errors={errors}
              formGroupProps={{
                as: Row,
                // md: 4,
                // xl: 3,
                className: 'md-8'
              }}
            />
          </Row>
          <Row>
            <label className="sm-6 xl-3">Payment Batch</label>
            <Form.Select
              label={'Payment Batch'}
              size="sm"
              setValue={setValue}
              typeof="select"
              //   onChange={e => {
              //     setPaymentType(e.target.value);
              //     // console.log(paymentType);
              //   }}
              className="me-2 mb-2"
            >
              <option value="">Select Payment Batch...</option>
              {paymentTypeData.map((payment, index) => (
                <option value={index} key={payment}>
                  {payment}
                </option>
              ))}
            </Form.Select>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col xs={6} lg={6}>
              <Button onClick={() => handlePostPayment()}>Cancel</Button>
            </Col>
            <Col>
              <Button onClick={() => handlePostPayment()}>Post</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};
PostPayment.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  data: PropTypes.object
};
export default PostPayment;
