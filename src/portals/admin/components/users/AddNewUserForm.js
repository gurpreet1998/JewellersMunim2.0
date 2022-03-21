/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Users,
  roleBased_Permission,
  userService
} from '_services/userService';
import { Col, Row, Button, Form, Card } from 'react-bootstrap';
import styles from './Users.module.css';
import PropTypes from 'prop-types';
import { merchantService } from '_services/merchantService';

const AddNewUserForm = ({ setaddNewUserFormShow }) => {
  const [FormData, setFormData] = useState({});
  const [Error, setError] = useState('');
  const [MerchantDatas, setMerchantDatas] = useState([]);
  const [RolesData, setRolesData] = useState([]);

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...FormData, [name]: value });
  };

  const AddNewUserHandler = async () => {
    let form_data = { ...FormData };
    form_data = {
      ...form_data,
      CreatedOn: new Date().toLocaleString(),
      ModifiedOn: new Date().toLocaleString(),
      Borrower: 'string',
      //Merchant: "string",
      mailNickname: 'string'
      //   passwordProfile: {
      //     forceChangePasswordNextSignIn: true,
      //     password: FormData.Password
      //   }
    };
    // delete form_data.Password;
    // delete form_data.RoleId;

    // Check If User Exists
    const resp = await Users.checkIfUserExists(form_data.Email);

    if (resp.status == 200) {
      // User Exists
      setError('User ALready Exists');
      return;
    } else {
      // console.log('New User');
      setError('');
    }
    const data = await Users.addNewUser(form_data);
    // Refreshing All User Details
    setaddNewUserFormShow(false);
  };

  useEffect(() => {
    merchantService.getAllMerchants().then(res => setMerchantDatas(res));

    roleBased_Permission.getRoles().then(res => setRolesData(res));
  }, []);

  //console.log(RolesData);

  return (
    <>
      <Card className={styles.addUserForm}>
        <Card.Header style={{ borderBottom: '1px solid gray' }}>
          Add User
        </Card.Header>
        <Card.Body style={{ fontSize: '12px' }}>
          <Form
            action="javascript:void(0)"
            method="POST"
            id="add-new-user-form"
            onSubmit={AddNewUserHandler}
          >
            {Error !== '' && <h6 style={{ color: 'red' }}>Error: {Error} </h6>}
            <Row>
              <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                  <Form.Label column sm="4">
                    First Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      onChange={inputHandler}
                      name="FirstName"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  name="Password"
                  controlId="formUsername"
                >
                  <Form.Label column sm="4">
                    Temp Password
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      //disabled
                      onChange={inputHandler}
                      name="Password"
                      type="password"
                      placeholder="Enter Temp Password"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPassword">
                  <Form.Label column sm="4">
                    Role
                  </Form.Label>
                  <Col sm="8">
                    <Form.Select
                      name="RoleId"
                      required
                      onChange={inputHandler}
                      aria-label="Default select example"
                      // placeholder="Select Role"
                    >
                      <option disabled value="" selected>
                        Select Role
                      </option>
                      {RolesData.map((Data, index) => (
                        <option value={Data.roleId} key={index}>
                          {Data.roleName}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formlastName">
                  <Form.Label column sm="4">
                    Last Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      onChange={inputHandler}
                      name="LastName"
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPassword">
                  <Form.Label column sm="4">
                    Email
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      onChange={inputHandler}
                      name="Email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formMearchant">
                  <Form.Label column sm="4">
                    Merchant
                  </Form.Label>
                  <Col sm="8">
                    <Form.Select
                      name="Merchant"
                      aria-label="Default select example"
                      onChange={inputHandler}
                    >
                      <option disabled selected>
                        Select Merchant
                      </option>
                      {MerchantDatas.map((MerchantData, index) => (
                        <option value={MerchantData.merchantId} key={index}>
                          {MerchantData.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formUsername">
                  <Form.Label column sm="4">
                    Temp UserName
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      onChange={inputHandler}
                      name="UserName"
                      type="text"
                      placeholder="Enter Temp Username"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPassword">
                  <Form.Label column sm="4">
                    Phone
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      className={styles.phoneNumberInput}
                      onChange={inputHandler}
                      name="PhoneNumber"
                      type="number"
                      // maxLength="10"
                      placeholder="Enter Phone"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer
          style={{ borderTop: '1px solid gray', textAlign: 'right' }}
        >
          <Button type="submit" form="add-new-user-form" variant="primary">
            Save
          </Button>
          <Button
            type="button"
            style={{ marginLeft: '2rem' }}
            onClick={() => setaddNewUserFormShow(false)}
            variant="secondary"
          >
            CANCEL
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

AddNewUserForm.propTypes = { setaddNewUserFormShow: PropTypes.func.isRequired };

export default AddNewUserForm;
