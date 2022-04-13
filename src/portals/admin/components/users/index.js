import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import SubTitleCard from 'components/common/SubTitleCard';
import Flex from 'components/common/Flex';
import AddNewUserForm from './AddNewUserForm';
import AllUsersTable from './AllUsersTable';
import EditUser from './EditUser';

const Users = () => {
  const [addNewUserFormShow, setaddNewUserFormShow] = useState(false);
  const [searchKeyword, setsearchKeyword] = useState('');
  const [editUserState, seteditUserState] = useState({});

  useEffect(() => {
    //console.log(Object.keys(editUserState || {}).length !== 0);
    seteditUserState({});
  }, [addNewUserFormShow]);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <Col md={12}>
            <SubTitleCard
              title={
                addNewUserFormShow ? (
                  <>
                    Users | <span>Add User</span>
                  </>
                ) : (
                  <>Users</>
                )
              }
            />
          </Col>
        </Col>

        {!addNewUserFormShow && (
          <Flex style={{ display: 'flex', justifyContent: 'right' }}>
            <Form.Control
              style={{ height: '2.3rem', width: '11rem', marginRight: '1rem' }}
              placeholder="Search"
              onChange={e => setsearchKeyword(e.target.value)}
              value={searchKeyword}
            />
            <Button size="xm" className="px-3 ms-1 mb-2 w-0 float-right">
              Delete
            </Button>
            <Button
              size="xm"
              variant={'primary'}
              className="px-3 ms-1 mb-2 w-0 float-right"
              onClick={() => setaddNewUserFormShow(true)}
            >
              <i className="fa-solid fa-circle-plus"></i> Add User
            </Button>
          </Flex>
        )}

        <Col md={12}>
          {addNewUserFormShow ? (
            <AddNewUserForm setaddNewUserFormShow={setaddNewUserFormShow} />
          ) : (
            <>
              {Object.keys(editUserState).length !== 0 ? (
                <EditUser
                  seteditUserState={seteditUserState}
                  FormData={editUserState}
                />
              ) : (
                <AllUsersTable
                  seteditUserState={seteditUserState}
                  searchKeyword={searchKeyword}
                />
              )}
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Users;
