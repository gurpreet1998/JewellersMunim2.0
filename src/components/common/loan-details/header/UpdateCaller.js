import React, { useEffect, useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { loanService } from '_services/loanService';

const UpdateCaller = props => {
  const { loanId } = useParams();
  const [updateCaller, setUpdateCaller] = useState(loanId);
  //const [updateValue, setUpdateValue] = useState({});
  console.log('Props', props);

  // useEffect(() => {
  //   loanService
  //     .getBorrowerVerification(loanId)
  //     .then(res => setUpdateCaller(res));
  // }, []);

  // const [checked, setChecked] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');

  // const radios = [
  //   { name: 'Fail', value: '2' },
  //   { name: 'Pass', value: '1' }
  // ];

  //const [edit, setEdit] = useState(false);

  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setUpdateCaller({ ...updateCaller, [name]: value });
  };

  // eslint-disable-next-line no-unused-vars
  //const [modal, setModal] = useState(props.show);

  // const handleChange = e => {
  //   setUpdateValue({ ...updateValue, [e.target.name]: e.target.value });
  // };

  // console.log('values', updateValue);

  const handleCancel = () => {
    //setEdit(false);
    props.closeModal();
  };

  const UpdateHandler = async () => {
    const resp = await loanService.updateBorrowerDetails(loanId, updateCaller);
    // Refreshing All User Details
    //seteditUserState({});
    if (resp === 200) props.closeModal();
  };

  useEffect(() => {
    const dta = props.data[0];
    setUpdateCaller({ ...dta });
  }, [props.data]);

  return (
    <>
      <Card show={props.show} size="lg" className={'mt-3'}>
        <Card.Header>
          <Row>
            {/* <Card.Title>Validate Caller</Card.Title>
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
            </Col> */}
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
                className={
                  'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
                }
              >
                {/* <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Form.Check
                        type="switch"
                        id="custom-switch"
                        // label="Check this switch"
                      /> */
                /*<label>Pass</label>&nbsp;
                      <label>Fail</label>
                    </div>
                  </Col>
                </Row> */}
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Form.Check
                        type="switch"
                        id="custom-switch"
                        // label="Check this switch"
                      /> */}
                      <label>Loan Number</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="street"
                      onChange={inputsHandler}
                      placeholder="Loan Number"
                      defaultValue={updateCaller?.loanNumber}
                      //onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Borrower Name</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="addressType"
                      onChange={inputsHandler}
                      placeholder="Borrower Name"
                      defaultValue={updateCaller?.borrowerName}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Authorized Party Name</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={true}
                      //style={{ background: 'transparent', border: 'none' }}
                      name="AuthorizedPartyName"
                      onChange={inputsHandler}
                      placeholder="Authorized Party Name"
                      defaultValue={updateCaller?.authorizedPartyName}
                      //onChange={handleChange}
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
                      //disabled={true}
                      //style={{ background: 'transparent', border: 'none' }}
                      name="AuthorizedPartyRelationship"
                      onChange={inputsHandler}
                      placeholder="Authorized Party Relationship"
                      defaultValue={updateCaller?.authorizedPartyRelationship}
                      //onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                className={
                  'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
                }
              >
                <Row>
                  <Col>
                    <label>Street</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="street"
                      onChange={inputsHandler}
                      placeholder="Street"
                      defaultValue={updateCaller?.street}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Apt/Unit #</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="addressType"
                      onChange={inputsHandler}
                      placeholder="Apt/Unit #"
                      defaultValue={updateCaller?.apt}
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
                      style={{ background: 'transparent', border: 'none' }}
                      name="city"
                      onChange={inputsHandler}
                      placeholder="City"
                      defaultValue={updateCaller?.city}
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
                      style={{ background: 'transparent', border: 'none' }}
                      name="state"
                      onChange={inputsHandler}
                      placeholder="State"
                      defaultValue={updateCaller?.state}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Zip/Postal Code</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="postalCode"
                      onChange={inputsHandler}
                      placeholder="Zip/Postal Code"
                      defaultValue={updateCaller?.postalCode}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
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
                      style={{ background: 'transparent', border: 'none' }}
                      name="idNumber"
                      onChange={inputsHandler}
                      placeholder="ID Number"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '5px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={updateCaller?.idNumber}
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
                      style={{ background: 'transparent', border: 'none' }}
                      name="idType"
                      onChange={inputsHandler}
                      placeholder="ID Type"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '5px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={updateCaller?.idType}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>ID Issue Date</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="idIssueDate"
                      onChange={inputsHandler}
                      placeholder="ID Issue Date"
                      defaultValue={updateCaller?.idIssueDate}
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
                      style={{ background: 'transparent', border: 'none' }}
                      name="idIssueExperiationDate"
                      onChange={inputsHandler}
                      placeholder="ID Expiry Date"
                      icon="calendar-alt"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '5px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={updateCaller?.idIssueExperiationDate}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <label>SSN</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="ssn"
                      onChange={inputsHandler}
                      placeholder="SSN"
                      defaultValue={updateCaller?.ssn}
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
                      style={{ background: 'transparent', border: 'none' }}
                      name="dob"
                      max="2017-04-01"
                      onChange={inputsHandler}
                      placeholder="DOB"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '5px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={updateCaller?.dob}
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <label>Email</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={!edit}
                      //disabled={true}
                      //style={{ background: 'transparent', border: 'none' }}
                      name="AuthorizedPartyEmail"
                      onChange={inputsHandler}
                      placeholder="Email"
                      defaultValue={updateCaller?.authorizedPartyEmail}
                      //onChange={handleChange}
                    />
                  </Col>
                </Row>
                {/* <Row>
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
                </Row> */}
                <Row>
                  <Col>
                    <label>Phone Number (Home)</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={!edit}
                      //disabled={true}
                      //style={{ background: 'transparent', border: 'none' }}
                      name="HomeNumber"
                      //
                      onChange={inputsHandler}
                      placeholder="Phone Number (Home)"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '25px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={updateCaller?.homeNumber}
                      //onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Phone Number (Mobile)</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={!edit}
                      //disabled={true}
                      //style={{ background: 'transparent', border: 'none' }}
                      name="MobileNumber"
                      //
                      onChange={inputsHandler}
                      placeholder="Phone Number (Mobile)"
                      // style={{ marginRight: '5px', marginLeft: '25px' }}
                      defaultValue={updateCaller?.mobileNumber}
                      //onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        </Card.Body>
        <Card.Footer
          style={{ borderTop: '1px solid gray', textAlign: 'right' }}
        >
          {console.log('uv', updateCaller)}
          <Button
            type="submit"
            form="add-new-user-form"
            variant="secondary"
            onClick={() => handleCancel()}
          >
            Close
          </Button>
          <Button
            type="button"
            style={{ marginLeft: '2rem' }}
            onClick={() => UpdateHandler()}
            variant="primary"
          >
            Save
          </Button>
          {/* <Row> */}
          {/* <Col
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
            </Col> */}
          {/* <Col
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
              </Row> */}
          {/* </Col> */}
          {/* <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            > */}
          {/* <Row>
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
              </Row> */}
          {/* </Col> */}
          {/* </Row> */}
        </Card.Footer>
      </Card>
    </>
  );
};

UpdateCaller.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  loanId: PropTypes.array,
  data: PropTypes.array
};

export default UpdateCaller;
