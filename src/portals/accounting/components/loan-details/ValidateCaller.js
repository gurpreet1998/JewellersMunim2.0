/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ValidateCaller = ({
  register,
  setValue,
  errors,
  watch,
  show,
  closeModal
}) => {
  const [validateCaller, setValidateCaller] = useState({
    addressType: 'Mail',
    street: '123 Liberty Avenue',
    city: 'Cambridge',
    state: 'Massachusetts',
    zipCode: '02134',
    authorizedPartyEmail: 'abc@gmail.com',
    authorizedPartyRelationship: 'Spouse',
    mobile: '7240327034',
    homePhone: '4231443',
    ssn: 'xxx-xxx-2131',
    dob: '1995-11-01',
    idNumber: '3121',
    idType: 'Driving License',
    idIssuanceDate: '2005-12-01',
    idExpirationDate: '2015-09-01'
  });
  const [edit, setEdit] = useState(false);
  const inputsHandler = e => {
    const { name, value } = e.target;
    setValidateCaller(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    setValidateCaller(validateCaller);
    setEdit(false);
    console.log(validateCaller);
  };
  const [modal, setModal] = useState(show);

  const editOnClick = event => {
    // event.preventDefault();
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
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
          <Modal.Title id="contained-modal-title-vcenter">
            Validate Caller
          </Modal.Title>
          <Row>
            <Col>
              {!edit && (
                <>
                  <Button onClick={() => editOnClick()}>Edit</Button>
                </>
              )}
              {edit && (
                <>
                  <Button onClick={() => handleSubmit()}>Save</Button>
                </>
              )}
            </Col>
            <Col>
              <FalconCloseButton
                size="sm"
                className="position-absolute top-0 end-0 me-2 mt-2"
                onClick={() => handleCancel()}
              />
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body className="ml-3">
          <>
            <Row>
              <Col
                xxl={4}
                sm={6}
                className={
                  'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
                }
              >
                <Row>
                  <Col>
                    <label>Address Type</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="addressType"
                      onChange={inputsHandler}
                      placeholder="Address Type"
                      value={validateCaller.addressType}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Street</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="street"
                      onChange={inputsHandler}
                      placeholder="Street"
                      value={validateCaller.street}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>City</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="city"
                      onChange={inputsHandler}
                      placeholder="City"
                      value={validateCaller.city}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>State</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="state"
                      onChange={inputsHandler}
                      placeholder="State"
                      value={validateCaller.state}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>ZipCode</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="zipCode"
                      onChange={inputsHandler}
                      placeholder="ZipCode"
                      value={validateCaller.zipCode}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                xxl={4}
                sm={6}
                className={
                  'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
                }
              >
                <Row>
                  <Col>
                    <label>Authorized Party Email</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="authorizedPartyEmail"
                      onChange={inputsHandler}
                      placeholder="Authorized Party Email"
                      value={validateCaller.authorizedPartyEmail}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Authorized Party Relationship</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="authorizedPartyRelationship"
                      //
                      onChange={inputsHandler}
                      placeholder="Authorized Party Relationship"
                      value={validateCaller.authorizedPartyRelationship}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Mobile Phone</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="mobile"
                      //
                      onChange={inputsHandler}
                      placeholder="Mobile Phone"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '25px',
                      //   marginBottom: '5px'
                      // }}
                      value={validateCaller.mobile}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Home Phone</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={!edit}
                      name="homePhone"
                      //
                      onChange={inputsHandler}
                      placeholder="Home Phone"
                      // style={{ marginRight: '5px', marginLeft: '25px' }}
                      value={validateCaller.homePhone}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              <Row>
                <Col>
                  <label>SSN</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    disabled={!edit}
                    name="ssn"
                    onChange={inputsHandler}
                    placeholder="SSN"
                    value={validateCaller.ssn}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>DOB</label>
                </Col>
                <Col>
                  <input
                    type="date"
                    disabled={!edit}
                    name="dob"
                    max="2017-04-01"
                    onChange={inputsHandler}
                    placeholder="DOB"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    value={validateCaller.dob}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              <Row>
                <Col>
                  <label>ID Number</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    disabled={!edit}
                    name="idNumber"
                    onChange={inputsHandler}
                    placeholder="ID Number"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    value={validateCaller.idNumber}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>ID Type</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    disabled={!edit}
                    name="idType"
                    onChange={inputsHandler}
                    placeholder="ID Type"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    value={validateCaller.idType}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              <Row>
                <Col>
                  <label>ID Issue Date</label>
                </Col>
                <Col>
                  <input
                    type="date"
                    disabled={!edit}
                    name="idIssuanceDate"
                    onChange={inputsHandler}
                    placeholder="ID Issue Date"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    value={validateCaller.idIssuanceDate}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>ID Expiry Date</label>
                </Col>
                <Col>
                  <input
                    type="date"
                    disabled={!edit}
                    name="idExpirationDate"
                    onChange={inputsHandler}
                    placeholder="ID Expiry Date"
                    icon="calendar-alt"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    value={validateCaller.idExpirationDate}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ValidateCaller.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func
};

export default ValidateCaller;
