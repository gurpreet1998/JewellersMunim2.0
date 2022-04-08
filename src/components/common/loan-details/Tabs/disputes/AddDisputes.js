/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import FormInput from 'portals/merchant/components/new-application/FormInput';
import { Col, Row, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
const AddDisputes = ({ show, closeModal }) => {
  const [addDisputes, setAddDisputes] = useState([]);
  const disputeType = [
    'Regular Payment',
    'Principle only',
    'Late Fee reversal',
    'NSF Fee reversal',
    'Misc. Access',
    'Misc. Account'
  ];
  const source = [
    'Consumer',
    'Merchant',
    'Third Party',
    'Attorney',
    'Attorney General',
    'CFPB',
    'BBB',
    'Power of Attorney'
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  const [formData, setFormData] = useState();
  const [modal, setModal] = useState(show);
  // const handleSubmit = () => {
  //   // event.preventDefault();
  //   setAddDisputes(addDisputes);
  //   console.log('aman', addDisputes);
  // };
  const submitForm = data => {
    console.log('Form data at add disputes', data);
    setFormData(data);
    console.log(data);
  };
  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setAddDisputes({ ...addDisputes, [name]: value });
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
            Add Disputes/Complaints
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs--1">
          <Row>
            <Col>
              <FormInput
                type="date"
                label="Date"
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
                label="Dispute Type"
                name="disputeType"
                // placeholder="Select Dispute Type"
                onChange={inputsHandler}
                errors={errors}
                formGroupProps={{
                  //   as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3 fs--1'
                }}
                options={disputeType}
                formControlProps={{
                  ...register('disputeType')
                }}
              />
            </Col>
            {/* <Col>
              <Form.Select size="sm" className="me-4">
                <option value="">Notes</option>
                {disputeType.map((bank, index) => (
                  <option value={index} key={bank}>
                    {bank}
                  </option>
                ))}
              </Form.Select>
            </Col> */}
            <Col>
              <FormInput
                label="Dispute Amount"
                name="amount"
                errors={errors}
                onChange={inputsHandler}
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
                label="Source"
                name="source"
                // placeholder="Select Source"
                errors={errors}
                options={source}
                onChange={inputsHandler}
                formGroupProps={{
                  //   as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3'
                }}
                formControlProps={{
                  ...register('source')
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Check
                label="Escalation"
                type="switch"
                name="escalation"
                formGroupProps={{
                  as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3 fs--1'
                }}
                onChange={inputsHandler}
              />
            </Col>
            <Col>
              <FormInput
                label="User"
                name="user"
                // placeholder="Select Dispute Type"
                onChange={inputsHandler}
                errors={errors}
                formGroupProps={{
                  //   as: Row,
                  sm: 6,
                  xl: 3,
                  className: 'mb-3 fs--1'
                }}
                formControlProps={{
                  ...register('user'),
                  placeholder: 'John Smith'
                }}
              />
            </Col>
            <Col>
              <FormInput
                type="disabledtext"
                label="Assigned to"
                name="assignedTo"
                errors={errors}
                // onChange={inputsHandler}
                formGroupProps={{
                  //   as: Row,
                  md: 4,
                  xl: 3,
                  className: 'mb-3'
                }}
                formControlProps={{
                  ...register('assignedTo'),
                  placeholder: 'Jane Doe'
                }}
                defaultValue={'Jane Doe'}
              />
            </Col>
          </Row>
          <Row>
            <FormInput
              type="textarea"
              label="Add Note"
              name="inputBox"
              placeholder="Add Note"
              errors={errors}
              onChange={inputsHandler}
              //   options={source}
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
          <Button variant={'falcon-primary'} onClick={() => handleCancel()}>
            Cancel
          </Button>
          <Button variant={'falcon-primary'} onClick={handleSubmit(submitForm)}>
            Add Disputes/Complaints
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
AddDisputes.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func
};

export default AddDisputes;
