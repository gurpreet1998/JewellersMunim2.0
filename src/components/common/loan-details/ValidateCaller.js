import React, { useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card } from 'react-bootstrap';

const ValidateCaller = props => {
  const [validateCaller, setValidateCaller] = useState(props.data);
  //   {
  //   street: '',
  //   city: '',
  //   state: '',
  //   postalCode: '',
  //   idNumber: '',
  //   idType: '',
  //   idIssueDate: '',
  //   idIssueExperiationDate: '',
  //   authorizedPartyName: '',
  //   authorizedPartyEmail: '',
  //   addressId: null,
  //   addressTypeName: '',
  //   mobileNumber: '',
  //   homeNumber: null,
  //   authorizedPartyRelationship: ''
  // }

  const [edit, setEdit] = useState(false);

  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setValidateCaller({ ...validateCaller, [name]: value });
  };

  const handleSubmit = () => {
    setValidateCaller(validateCaller);
    setEdit(false);
  };
  // eslint-disable-next-line no-unused-vars
  const [modal, setModal] = useState(props.show);

  const editOnClick = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    props.closeModal();
  };
  return (
    <>
      <Card
        show={modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Card.Header>
          <Card.Title id="contained-modal-title-vcenter">
            Validate Caller
          </Card.Title>
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
        </Card.Header>
        <Card.Body className="ml-3">
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
                      disabled={true}
                      name="addressType"
                      onChange={inputsHandler}
                      placeholder="Address Type"
                      defaultValue={validateCaller?.addressTypeName}
                    />
                  </Col>
                  {/* {console.log(validateCaller.street)}
                  {console.log(validateCaller)} */}
                </Row>
                <Row>
                  <Col>
                    <label>Street</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      name="street"
                      onChange={inputsHandler}
                      placeholder="Street"
                      defaultValue={validateCaller?.street}
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
                      disabled={true}
                      name="city"
                      onChange={inputsHandler}
                      placeholder="City"
                      defaultValue={validateCaller?.city}
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
                      disabled={true}
                      name="state"
                      onChange={inputsHandler}
                      placeholder="State"
                      defaultValue={validateCaller?.state}
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
                      disabled={true}
                      name="postalCode"
                      onChange={inputsHandler}
                      placeholder="ZipCode"
                      defaultValue={validateCaller?.postalCode}
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
                      defaultValue={validateCaller?.authorizedPartyEmail}
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
                      defaultValue={validateCaller?.authorizedPartyRelationship}
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
                      name="mobileNumber"
                      //
                      onChange={inputsHandler}
                      placeholder="Mobile Phone"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '25px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={validateCaller?.mobileNumber}
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
                      name="homeNumber"
                      //
                      onChange={inputsHandler}
                      placeholder="Home Phone"
                      // style={{ marginRight: '5px', marginLeft: '25px' }}
                      defaultValue={validateCaller?.homeNumber}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        </Card.Body>
        <Card.Footer>
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
                    disabled={true}
                    name="ssn"
                    onChange={inputsHandler}
                    placeholder="SSN"
                    defaultValue={validateCaller?.ssn}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>DOB</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    disabled={true}
                    name="dob"
                    max="2017-04-01"
                    onChange={inputsHandler}
                    placeholder="DOB"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    defaultValue={validateCaller?.dob}
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
                    disabled={true}
                    name="idNumber"
                    onChange={inputsHandler}
                    placeholder="ID Number"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    defaultValue={validateCaller?.idNumber}
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
                    disabled={true}
                    name="idType"
                    onChange={inputsHandler}
                    placeholder="ID Type"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    defaultValue={validateCaller?.idType}
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
                    type="text"
                    disabled={true}
                    name="idIssueDate"
                    onChange={inputsHandler}
                    placeholder="ID Issue Date"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    defaultValue={validateCaller?.idIssueDate}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>ID Expiry Date</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    disabled={true}
                    name="idIssueExperiationDate"
                    onChange={inputsHandler}
                    placeholder="ID Expiry Date"
                    icon="calendar-alt"
                    // style={{
                    //   marginRight: '5px',
                    //   marginLeft: '5px',
                    //   marginBottom: '5px'
                    // }}
                    defaultValue={validateCaller?.idIssueExperiationDate}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

ValidateCaller.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  loanId: PropTypes.array,
  data: PropTypes.array
};

export default ValidateCaller;
