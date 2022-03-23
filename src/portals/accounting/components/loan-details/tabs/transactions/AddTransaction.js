/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import FormInput from 'portals/merchant/components/new-application/FormInput';
import { Col, Row, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const AddTransaction = ({
  register,
  setValue,
  errors,
  watch,
  show,
  closeModal
}) => {
  const [addTransaction, setAddTransaction] = useState();
  const transactionType = [
    'Regular Payment',
    'Principle only',
    'Late Fee reversal',
    'NSF Fee reversal',
    'Misc. Access',
    'Misc. Account'
  ];
  const paymentMethod = ['Credit', 'Debit', 'Check', 'Other'];
  const [modal, setModal] = useState(show);
  const handleSubmit = event => {
    // event.preventDefault();
    setAddTransaction(event.target.value);
    console.log(addTransaction);
  };
  const handleCancel = () => {
    closeModal();
  };
  return (
    <>
      <Modal
        show={modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <FalconCloseButton
            size="sm"
            className="position-absolute top-0 end-0 me-2 mt-2"
            onClick={() => handleCancel()}
          />
          <Modal.Title id="contained-modal-title-vcenter">
            Add Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <FormInput
                type="date"
                label="Transaction Date"
                name="date"
                errors={errors}
                setValue={setValue}
                formGroupProps={{
                  //   as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3'
                }}
                formControlProps={{
                  placeholder: 'E.g. 12/01/2028',
                  ...register('date')
                }}
                datepickerProps={{
                  dateFormat: 'MM/dd/yyyy',
                  showMonthDropdown: true,
                  showYearDropdown: true,
                  dropdownMode: 'select'
                  // minDate: idExpStartDate
                }}
              />
            </Col>
            <Col>
              <FormInput
                type="select"
                label="Transaction Type"
                name="transactionType"
                placeholder="Select Transaction Type"
                errors={errors}
                formGroupProps={{
                  //   as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3'
                }}
                options={transactionType}
                formControlProps={{
                  ...register('transactionType')
                }}
              />
            </Col>
            {/* <Col>
              <Form.Select size="sm" className="me-4">
                <option value="">Notes</option>
                {transactionType.map((bank, index) => (
                  <option value={index} key={bank}>
                    {bank}
                  </option>
                ))}
              </Form.Select>
            </Col> */}
            <Col>
              <FormInput
                label="Amount"
                name="amount"
                errors={errors}
                formGroupProps={{
                  //   as: Row,
                  md: 4,
                  xl: 3,
                  className: 'mb-3'
                }}
                formControlProps={{
                  ...register('amount'),
                  placeholder: '$'
                }}
              />
            </Col>
            <Col>
              <FormInput
                type="select"
                label="Payment Method"
                name="paymentMethod"
                placeholder="Select Payment Method"
                errors={errors}
                options={paymentMethod}
                formGroupProps={{
                  //   as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3'
                }}
                formControlProps={{
                  ...register('paymentMethod')
                }}
              />
            </Col>
          </Row>
          <Row>
            <FormInput
              type="textarea"
              //   label="Payment Method"
              name="inputBox"
              //   placeholder="Select Payment Method"
              errors={errors}
              //   options={paymentMethod}
              //   formGroupProps={{
              //     as: Row,
              //     sm: 12,
              //     xl: 3,
              //     className: 'mb-1'
              //   }}
              formControlProps={{
                ...register('inputBox')
              }}
            />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button onClick={() => handleCancel()}>Add Transaction</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
AddTransaction.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func
};

export default AddTransaction;
