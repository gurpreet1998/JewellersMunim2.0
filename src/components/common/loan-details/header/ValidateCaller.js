import React, { useEffect, useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'react-bootstrap';
import Checkbox from 'react-three-state-checkbox';
import { loanService } from '_services/loanService';
import { useParams } from 'react-router-dom';

const ValidateCaller = props => {
  const { loanId } = useParams();
  const [validateCaller, setValidateCaller] = useState(loanId);
  console.log('Props', props);

  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');

  //const { loanId } = useParams();
  //const [borrowerverify, setBorrowerverify] = useState(loanId);
  useEffect(() => {
    loanService
      .getBorrowerVerification(loanId)
      .then(res => setValidateCaller(res));
  }, []);

  console.log(validateCaller);

  // const radios = [
  //   { name: 'Fail', value: '2' },
  //   { name: 'Pass', value: '1' }
  // ];

  //const [edit, setEdit] = useState(false);

  //const [modal, setModal] = useState(props.show);

  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setValidateCaller({ ...validateCaller, [name]: value });
  };

  const handleChange = name => {
    // i=F, c=F
    // i=T, c=F
    // i=F, c=T
    // * i=F, c=F
    console.log(indeterminate, checked);
    if (!indeterminate?.[name]) {
      if (checked?.[name]) {
        setChecked({ ...checked, [name]: false });
        setIndeterminate({ ...indeterminate, [name]: false });
      } else {
        setIndeterminate({ ...indeterminate, [name]: true });
      }
    } else {
      if (checked?.[name]) {
        setChecked({ ...checked, [name]: false });
        setIndeterminate({ ...indeterminate, [name]: false });
      } else {
        setIndeterminate({ ...indeterminate, [name]: false });
        setChecked({ ...checked, [name]: true });
      }
    }
  };

  // const handleSubmit = () => {
  //   setValidateCaller(validateCaller);
  //   setEdit(false);
  // };
  // // eslint-disable-next-line no-unused-vars
  // const [modal, setModal] = useState(props.show);

  // const editOnClick = () => {
  //   setEdit(true);
  // };

  const handleCancel = () => {
    //setEdit(false);
    props.closeModal();
  };
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
                  {/* <Col sm={2} xxl={2} classname={'mx-3'}>
                    <Form.Check aria-label="option 1" />
                  </Col>
                  <Col sm={2} xxl={2}>
                    <Form.Check aria-label="option 1" />
                  </Col> */}

                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.loan}
                        name=""
                        indeterminate={indeterminate.loan}
                        onChange={() => handleChange('loan')}
                      />
                      &nbsp;
                      <label>Loan Number</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="loanNumber"
                      onChange={inputsHandler}
                      placeholder="Loan Number"
                      defaultValue={validateCaller[0]?.loanNumber}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.borrower}
                        name=""
                        indeterminate={indeterminate.borrower}
                        onChange={() => handleChange('borrower')}
                      />
                      &nbsp;
                      <label>Borrower Name</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="borrowerName"
                      onChange={inputsHandler}
                      placeholder="Borrower Name"
                      defaultValue={validateCaller[0]?.borrowerName}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.authname}
                        name=""
                        indeterminate={indeterminate.authname}
                        onChange={() => handleChange('authname')}
                      />
                      &nbsp;
                      <label>Authorized Party Name</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="authorizedPartyName"
                      onChange={inputsHandler}
                      placeholder="Authorized Party Name"
                      defaultValue={validateCaller[0]?.authorizedPartyName}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.authrel}
                        name=""
                        indeterminate={indeterminate.authrel}
                        onChange={() => handleChange('authrel')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>Authorized Party Relationship</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="authorizedPartyRelationship"
                      onChange={inputsHandler}
                      placeholder="Authorized Party Relationship"
                      defaultValue={
                        validateCaller[0]?.authorizedPartyRelationship
                      }
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
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.street}
                        name=""
                        indeterminate={indeterminate.street}
                        onChange={() => handleChange('street')}
                      />
                      &nbsp;
                      <label>Street</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="street"
                      onChange={inputsHandler}
                      placeholder="Street"
                      defaultValue={validateCaller[0]?.street}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.apt}
                        name=""
                        indeterminate={indeterminate.apt}
                        onChange={() => handleChange('apt')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>Apt/Unit #</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="addressType"
                      onChange={inputsHandler}
                      placeholder="Apt/Unit #"
                      defaultValue={validateCaller[0]?.apt}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.city}
                        name=""
                        indeterminate={indeterminate.city}
                        onChange={() => handleChange('city')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>City</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="city"
                      onChange={inputsHandler}
                      placeholder="City"
                      defaultValue={validateCaller[0]?.city}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.state}
                        name=""
                        indeterminate={indeterminate.state}
                        onChange={() => handleChange('state')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>State</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="state"
                      onChange={inputsHandler}
                      placeholder="State"
                      defaultValue={validateCaller[0]?.state}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.zip}
                        name=""
                        indeterminate={indeterminate.zip}
                        onChange={() => handleChange('zip')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>Zip/Postal Code</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="postalCode"
                      onChange={inputsHandler}
                      placeholder="Zip/Postal Code"
                      defaultValue={validateCaller[0]?.postalCode}
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
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.idNumber}
                        name=""
                        indeterminate={indeterminate.idNumber}
                        onChange={() => handleChange('idNumber')}
                      />
                      &nbsp;
                      <label>ID Number</label>
                    </div>
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
                      defaultValue={validateCaller[0]?.idNumber}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.idType}
                        name=""
                        indeterminate={indeterminate.idType}
                        onChange={() => handleChange('idType')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>ID Type</label>
                    </div>
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
                      defaultValue={validateCaller[0]?.idType}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.idIssueDate}
                        name=""
                        indeterminate={indeterminate.idIssueDate}
                        onChange={() => handleChange('idIssueDate')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>ID Issue Date</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="idIssueDate"
                      onChange={inputsHandler}
                      placeholder="ID Issue Date"
                      defaultValue={validateCaller[0]?.idIssueDate}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      {/* <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.idexpiry}
                        name=""
                        indeterminate={indeterminate.idexpiry}
                        onChange={() => handleChange('idexpiry')}
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <label>ID Expiry Date</label>
                    </div>
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
                      defaultValue={validateCaller[0]?.idIssueExperiationDate}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.ssn}
                        name=""
                        indeterminate={indeterminate.ssn}
                        onChange={() => handleChange('ssn')}
                      />
                      &nbsp;
                      <label>SSN</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="ssn"
                      onChange={inputsHandler}
                      placeholder="SSN"
                      defaultValue={validateCaller[0]?.ssn}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.dob}
                        name=""
                        indeterminate={indeterminate.dob}
                        onChange={() => handleChange('dob')}
                      />
                      &nbsp;
                      <label>DOB</label>
                    </div>
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
                      defaultValue={validateCaller[0]?.dateOfBirth}
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.email}
                        name=""
                        indeterminate={indeterminate.email}
                        onChange={() => handleChange('email')}
                      />
                      &nbsp;
                      <label>Email</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={!edit}
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="authorizedPartyEmail"
                      onChange={inputsHandler}
                      placeholder="Email"
                      defaultValue={validateCaller[0]?.authorizedPartyEmail}
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
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked?.phonehome}
                        name="phone"
                        indeterminate={indeterminate?.phonehome}
                        onChange={() => handleChange('phonehome')}
                      />
                      &nbsp;
                      <label>Phone Number (Home)</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={!edit}
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="homeNumber"
                      //
                      onChange={inputsHandler}
                      placeholder="Phone Number (Home)"
                      // style={{
                      //   marginRight: '5px',
                      //   marginLeft: '25px',
                      //   marginBottom: '5px'
                      // }}
                      defaultValue={validateCaller[0]?.homeNumber}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div style={{ display: 'flex' }}>
                      <Checkbox
                        style={{ marginTop: '3px' }}
                        checked={checked.phonemobile}
                        name=""
                        indeterminate={indeterminate.phonemobile}
                        onChange={() => handleChange('phonemobile')}
                      />
                      &nbsp;
                      <label>Phone Number (Mobile)</label>
                    </div>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      //disabled={!edit}
                      disabled={true}
                      style={{ background: 'transparent', border: 'none' }}
                      name="homeNumber"
                      //
                      onChange={inputsHandler}
                      placeholder="Phone Number (Mobile)"
                      // style={{ marginRight: '5px', marginLeft: '25px' }}
                      defaultValue={validateCaller[0]?.mobileNumber}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        </Card.Body>
        <Card.Footer>
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