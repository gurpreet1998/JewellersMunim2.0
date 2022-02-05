/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import FormInput from 'portals/merchant/components/new-application/FormInput';
import { Col, Row, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const DepositForm = ({
  register,
  setValue,
  errors,
  watch,
  show,
  closeModal
}) => {
  const date = new Date();
  const [paymentType, setPaymentType] = useState();
  const paymentTypeData = ['Check/Cheque', 'Cash', 'Money Order'];
  const monthlyStatementData = ['Browse', 'Dropbox'];
  const handleSubmit = event => {
    // event.preventDefault();
    setPaymentType(event.target.value);
    console.log(paymentType);
  };
  console.log(paymentType);
  const [modal, setModal] = useState(show);
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
          <Modal.Title id="contained-modal-title-vcenter">Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ml-3">
          <Row>
            <Col>
              <Row>
                <FormInput
                  label="Loan ID"
                  name="loanId"
                  errors={errors}
                  formGroupProps={{
                    as: Row,
                    sm: 10,
                    // xl: 3,
                    className: 'md-2 mb-2'
                  }}
                  formControlProps={{
                    placeholder: '1234',
                    ...register('loanId')
                  }}
                />
              </Row>
              <Row>
                <FormInput
                  label="Loan Number"
                  name="loanNumber"
                  errors={errors}
                  formGroupProps={{ as: Row, sm: 10, className: 'mb-3' }}
                  formControlProps={{
                    placeholder: '1234',
                    ...register('loanNumber')
                  }}
                />
              </Row>
              <Row>
                <FormInput
                  label="First Name*"
                  name="firstName"
                  errors={errors}
                  formGroupProps={{
                    as: Row,
                    // md: 4,
                    // xl: 3,
                    className: 'mb-3'
                  }}
                  formControlProps={{
                    ...register('firstName', {
                      required: 'Please provide your first name'
                    }),
                    placeholder: 'Nancy'
                  }}
                />
              </Row>
              <Row>
                <FormInput
                  label="Last Name*"
                  name="lastName"
                  errors={errors}
                  formGroupProps={{
                    as: Row,
                    // md: 4,
                    // xl: 3,
                    className: 'mb-3'
                  }}
                  formControlProps={{
                    ...register('lastName', {
                      required: 'Please provide your last name'
                    }),
                    placeholder: 'Smith'
                  }}
                />
              </Row>
              <Row>
                <FormInput
                  type="date"
                  label="Date"
                  name="date"
                  errors={errors}
                  setValue={setValue}
                  formGroupProps={{
                    as: Row,
                    // sm: 6,
                    // xl: 3,
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
              </Row>
              <Row>
                <FormInput
                  type="selectWithKeyValuePair"
                  label="Monthly Statement"
                  name="monthlyStatement"
                  placeholder="Select Monthly Statement..."
                  errors={errors}
                  options={monthlyStatementData}
                  formGroupProps={{
                    as: Row,
                    // sm: 6,
                    // xl: 3,
                    className: 'mb-3'
                  }}
                  formControlProps={{
                    ...register('monthlyStatement')
                  }}
                />
              </Row>
            </Col>
            <Col>
              <Row>
                <label className="sm-6 xl-3">Payment Type</label>
                <Form.Select
                  label={'Payment Type'}
                  size="sm"
                  value={paymentType}
                  typeof="select"
                  onChange={e => {
                    setPaymentType(e.target.value);
                    console.log(paymentType);
                  }}
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
              {paymentType === '1' && (
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
              )}
              {paymentType === '0' && (
                <>
                  <Row>
                    <>
                      <label>Attach Check</label>
                      <Form.Select
                        size="sm"
                        label={'check'}
                        value={''}
                        typeof="select"
                        onChange={e => {
                          setPaymentType(e.target.value);
                          console.log(paymentType);
                        }}
                        className="me-2 mb-2"
                      >
                        {/* <option value="">Attach Check</option> */}
                      </Form.Select>
                    </>
                  </Row>
                  <Row>
                    <FormInput
                      label="Routing Number"
                      name="routingNumber"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('routingNumber')
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Account Number"
                      name="accountingNumber"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('accountingNumber')
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Amount"
                      name="amount"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('amount'),
                        placeholder: '$'
                      }}
                    />
                  </Row>
                </>
              )}
              {paymentType === '2' && (
                <>
                  <Row>
                    <label className="mt-3">Bank/Institution</label>
                    <Form.Select
                      size="sm"
                      // label={'check'}
                      value={''}
                      typeof="select"
                      className="me-2 mb-3"
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Pay To"
                      name="payTo"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('payTo')
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Payee Address"
                      name="payeeAddress"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('payeeAddress')
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Payee"
                      name="payee"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('payee'),
                        placeholder: '$'
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Memo"
                      name="memo"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('memo'),
                        placeholder: ''
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      label="Payment Amount"
                      name="payment Amount"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('paymentAmount'),
                        placeholder: ''
                      }}
                    />
                  </Row>
                </>
              )}
            </Col>
            {paymentType === '2' && (
              <>
                <Col>
                  <Row>
                    <label>Form of Payment</label>
                    <Form.Select
                      size="sm"
                      label={'check'}
                      placeholder="Credit Crd"
                      value={''}
                      typeof="select"
                      className="me-2 mb-3"
                    >
                      {/* <option value=""></option> */}
                    </Form.Select>
                  </Row>
                  <Row>
                    <FormInput
                      label="Serial Number"
                      name="serialNumber"
                      errors={errors}
                      formGroupProps={{
                        as: Row,
                        // md: 4,
                        // xl: 3,
                        className: 'mb-3'
                      }}
                      formControlProps={{
                        ...register('serialNumber')
                      }}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      type="date"
                      label="Date"
                      name="date"
                      errors={errors}
                      setValue={setValue}
                      formGroupProps={{
                        as: Row,
                        // sm: 6,
                        // xl: 3,
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
                  </Row>
                </Col>
              </>
            )}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button onClick={() => handleCancel()}>Submit Payment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DepositForm.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func
};

export default DepositForm;
