import React, { useEffect, useState } from 'react';
import FalconCloseButton from 'components/common/FalconCloseButton';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'react-bootstrap';
import Checkbox from 'react-three-state-checkbox';
import { loanService } from '_services/loanService';
import { useParams } from 'react-router-dom';
import FalconCardHeader from '../../FalconCardHeader';

const ValidateCaller = props => {
  const { loanId } = useParams();
  const [validateCaller, setValidateCaller] = useState(loanId);
  console.log('Props', props);

  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  //const { loanId } = useParams();
  //const [borrowerverify, setBorrowerverify] = useState(loanId);

  useEffect(() => {
    loanService
      .getBorrowerVerification(loanId)
      .then(res => setValidateCaller(res));
  }, []);

  console.log('validateCaller', validateCaller);

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

  console.log(inputsHandler);

  const handleChange = name => {
    // i=F, c=F
    // i=T, c=F
    // i=F, c=T
    // * i=F, c=F
    console.log('indeterminate', indeterminate, 'checked', checked);
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
      <Card show={props.show} className="h-lg-100 fs--1 mt-3">
        <FalconCardHeader
          title={'Validation'}
          titleClass={'fw-normal text-800 border-bottom pb-2'}
          endEl={
            <>
              <FalconCloseButton
                size="sm"
                className="position-absolute top-0 end-0 me-2 mt-2"
                onClick={() => handleCancel()}
              />
            </>
          }
        />
        <Card.Body>
          <Row>
            <Col
              md={6}
              lg={4}
              className="border-0 border-md-end border-md-bottom border-lg-bottom-0"
            >
              <Row className={'d-flex justify-content-center px-2'}>
                <Col xs={11} sm={12}>
                  <div className={'d-flex pt-0 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.loan}
                        indeterminate={indeterminate.loan}
                        onChange={() => handleChange('loan')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">Loan Number </p>
                    <p>
                      {validateCaller[0]?.loanNumber || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  disabled={false}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="loanNumber"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="Loan Number"*/}
                    {/*  defaultValue={validateCaller[0]?.loanNumber}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.borrower}
                        indeterminate={indeterminate.borrower}
                        onChange={() => handleChange('borrower')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">Borrower Name </p>
                    <p>
                      {validateCaller[0]?.borrowerName || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="borrowerName"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="Borrower Name"*/}
                    {/*    defaultValue={validateCaller[0]?.borrowerName}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.authname}
                        indeterminate={indeterminate.authname}
                        onChange={() => handleChange('authname')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">
                      Authorized Contact{' '}
                    </p>
                    <p>
                      {validateCaller[0]?.authorizedPartyName || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="authorizedPartyName"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="Authorized Party Name"*/}
                    {/*    defaultValue={validateCaller[0]?.authorizedPartyName}*/}
                    {/*/>*/}
                  </div>
                  <div
                    className={'d-flex pt-2 border-dashed-bottom border-md-0'}
                  >
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.authrel}
                        indeterminate={indeterminate.authrel}
                        onChange={() => handleChange('authrel')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">
                      Authorized Contact Relationship
                    </p>
                    <p>
                      {validateCaller[0]?.authorizedPartyRelationship || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="authorizedPartyRelationship"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="Authorized Party Relationship"*/}
                    {/*    defaultValue={*/}
                    {/*      validateCaller[0]?.authorizedPartyRelationship*/}
                    {/*    }*/}
                    {/*/>*/}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              lg={4}
              className="border-0 border-md-bottom border-lg-bottom-0 border-lg-end"
            >
              <Row className={'d-flex justify-content-center px-2'}>
                <Col xs={11} sm={12}>
                  <div className={'d-flex pt-2 pt-md-0 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.street}
                        name=""
                        indeterminate={indeterminate.street}
                        onChange={() => handleChange('street')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">Address </p>
                    <p>
                      <span className="d-block">
                        {validateCaller[0]?.street || (
                          <span className={'text-500 fst-italic'}>
                            Street Address
                          </span>
                        )}{' '}
                        <br />{' '}
                        {validateCaller[0]?.city || (
                          <span className={'text-500 fst-italic'}>City</span>
                        )}
                        ,{' '}
                        {validateCaller[0]?.stateName || (
                          <span className={'text-500 fst-italic'}>State</span>
                        )}
                        ,{' '}
                        {validateCaller[0]?.zipCode || (
                          <span className={'text-500 fst-italic'}>
                            Zip Not Found
                          </span>
                        )}
                      </span>
                    </p>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="street"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="Street"*/}
                    {/*    defaultValue={validateCaller[0]?.street}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.idNumber}
                        name=""
                        indeterminate={indeterminate.idNumber}
                        onChange={() => handleChange('idNumber')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">ID Number</p>
                    <p>
                      {validateCaller[0]?.idNumber || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  disabled={true}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="idNumber"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="ID Number"*/}
                    {/*  defaultValue={validateCaller[0]?.idNumber}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.idType}
                        name=""
                        indeterminate={checked.idType}
                        onChange={() => handleChange('idType')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">ID Type</p>
                    <p>
                      {validateCaller[0]?.idType || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  disabled={true}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="idType"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="ID Type"*/}
                    {/*  defaultValue={validateCaller[0]?.idType}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.idIssueDate}
                        name=""
                        indeterminate={checked.idIssueDate}
                        onChange={() => handleChange('idIssueDate')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">ID Issuance Date</p>
                    <p>
                      {validateCaller[0]?.idIssueDate || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/* todo: do we need a form input? or just the data? */}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="idIssueDate"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="ID Issue Date"*/}
                    {/*    defaultValue={validateCaller[0]?.idIssueDate}*/}
                    {/*/>*/}
                  </div>
                  <div
                    className={'d-flex pt-2 border-dashed-bottom border-md-0'}
                  >
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.idexpiry}
                        name=""
                        indeterminate={checked.idexpiry}
                        onChange={() => handleChange('idexpiry')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">
                      ID Expiration Date
                    </p>
                    <p>
                      {validateCaller[0]?.idIssueExperiationDate || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="idIssueExperiationDate"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="ID Expiry Date"*/}
                    {/*    icon="calendar-alt"*/}
                    {/*    defaultValue={validateCaller[0]?.idIssueExperiationDate}*/}
                    {/*/>*/}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="pt-3 pt-lg-0">
              <Row className={'d-flex justify-content-center px-2'}>
                <Col xs={11} sm={12}>
                  <div className={'d-flex pt-0 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.ssn}
                        name=""
                        indeterminate={indeterminate.ssn}
                        onChange={() => handleChange('ssn')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">SSN (Last 4)</p>
                    <p>
                      {validateCaller[0]?.ssn || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    disabled={true}*/}
                    {/*    style={{ background: 'transparent', border: 'none' }}*/}
                    {/*    name="ssn"*/}
                    {/*    onChange={inputsHandler}*/}
                    {/*    placeholder="SSN"*/}
                    {/*    defaultValue={validateCaller[0]?.ssn}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.dob}
                        name=""
                        indeterminate={indeterminate.dob}
                        onChange={() => handleChange('dob')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">DOB</p>
                    <p>
                      {validateCaller[0]?.dateOfBirth || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  disabled={true}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="dob"*/}
                    {/*  max="2017-04-01"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="DOB"*/}
                    {/*  defaultValue={validateCaller[0]?.dateOfBirth}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.email}
                        name=""
                        indeterminate={indeterminate.email}
                        onChange={() => handleChange('email')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">Email</p>
                    <p>
                      {validateCaller[0]?.email || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  //disabled={!edit}*/}
                    {/*  disabled={true}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="authorizedPartyEmail"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="Email"*/}
                    {/*  defaultValue={validateCaller[0]?.authorizedPartyEmail}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2 border-dashed-bottom'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.phonehome}
                        name=""
                        indeterminate={indeterminate.phonehome}
                        onChange={() => handleChange('phonehome')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">
                      Phone Number (Home)
                    </p>
                    <p>
                      {validateCaller[0]?.phonehome || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  disabled={true}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="homeNumber"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="Phone Number (Home)"*/}
                    {/*  defaultValue={validateCaller[0]?.homeNumber}*/}
                    {/*/>*/}
                  </div>
                  <div className={'d-flex pt-2'}>
                    <div className="justify-content-start">
                      <Checkbox
                        className={'me-2'}
                        checked={checked.phonemobile}
                        name=""
                        indeterminate={indeterminate.phonemobile}
                        onChange={() => handleChange('phonemobile')}
                      />
                    </div>
                    <p className="fw-semi-bold flex-grow-1">
                      Phone Number (Mobile)
                    </p>
                    <p>
                      {validateCaller[0]?.phonemobile || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  disabled={true}*/}
                    {/*  style={{ background: 'transparent', border: 'none' }}*/}
                    {/*  name="mobileNumber"*/}
                    {/*  onChange={inputsHandler}*/}
                    {/*  placeholder="Phone Number (Mobile)"*/}
                    {/*  defaultValue={validateCaller[0]?.mobileNumber}*/}
                    {/*/>*/}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
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
