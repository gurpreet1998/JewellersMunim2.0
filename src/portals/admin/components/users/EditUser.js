import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import {
  Users,
  roleBased_Permission
  //userService
} from '_services/userService';
import styles from './Users.module.css';
import PropTypes from 'prop-types';
import { merchantService } from '_services/merchantService';

export default function EditUser({ FormData, seteditUserState }) {
  const [formData, setformData] = useState({ ...FormData });
  const [MerchantDatas, setMerchantDatas] = useState([]);
  const [RolesData, setRolesData] = useState([]);
  const [errorState, seterrorState] = useState('');

  const EditUserHandler = async () => {
    // let form_data = { ...FormData };
    let form_data = {
      FirstName: formData?.firstName,
      LastName: formData?.lastName,
      UserName: formData?.userName,
      mailNickname: formData?.mailNickname || 'Nickname',
      PhoneNumber: formData?.phoneNumber,
      IsActive: formData?.isActive,
      CreatedOn: formData?.createdOn,
      ModifiedOn: new Date().toLocaleString(),
      RoleId: formData?.roleId,
      Merchant: formData?.merchant,
      Borrower: formData?.borrower,
      Email: formData?.email
    };

    if (FormData.email !== form_data.Email) {
      // Check If User Exists
      const resp = await Users.checkIfUserExists(form_data.Email);

      if (resp.status == 200) {
        // User Exists
        seterrorState('User ALready Exists');
        return;
      } else {
        // console.log('New User');
        seterrorState('');
      }
    }
    await Users.edituser(FormData.aadId, form_data);
    // Refreshing All User Details
    seteditUserState({});
  };

  useEffect(() => {
    setformData({ ...FormData });
  }, [FormData]);

  const inputHandler = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    merchantService.getAllMerchants().then(res => setMerchantDatas(res));

    roleBased_Permission.getRoles().then(res => setRolesData(res));
  }, []);

  return (
    <>
      <Card className={styles.addUserForm}>
        <Card.Header style={{ borderBottom: '1px solid gray' }}>
          Edit User
        </Card.Header>
        <Card.Body style={{ fontSize: '12px' }}>
          <Form
            action="javascript:void(0)"
            method="POST"
            id="add-new-user-form"
            onSubmit={EditUserHandler}
          >
            {errorState !== '' && (
              <h6 style={{ color: 'red' }}>Error: {errorState} </h6>
            )}
            <Row>
              <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                  <Form.Label column sm="4">
                    First Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      value={formData?.firstName}
                      onChange={inputHandler}
                      name="firstName"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  name="password"
                  controlId="formUsername"
                >
                  <Form.Label column sm="4">
                    Temp Password
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      //required
                      disabled
                      value={formData?.password}
                      onChange={inputHandler}
                      name="password"
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
                      name="roleId"
                      value={formData?.roleId}
                      //required
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
                      value={formData?.lastName}
                      onChange={inputHandler}
                      name="lastName"
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
                      value={formData?.email}
                      onChange={inputHandler}
                      name="email"
                      disabled={true}
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
                      disabled
                      value={formData?.merchant}
                      name="merchant"
                      aria-label="Default select example"
                      onChange={inputHandler}
                    >
                      <option disabled selected>
                        Select Merchant
                      </option>
                      {MerchantDatas.map((MerchantData, index) => (
                        <option value={MerchantData.name} key={index}>
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
                      value={formData?.userName}
                      onChange={inputHandler}
                      name="userName"
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
                      value={formData?.phoneNumber}
                      className={styles.phoneNumberInput}
                      onChange={inputHandler}
                      name="phoneNumber"
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
            onClick={() => seteditUserState({})}
            variant="secondary"
          >
            CANCEL
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

EditUser.propTypes = {
  FormData: PropTypes.any,
  seteditUserState: PropTypes.any
};
