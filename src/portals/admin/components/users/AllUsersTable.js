// import StatusAccordionTable from 'components/status-accordion/StatusAccordionTable';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { roleBased_Permission, Users } from '_services/userService';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import PropTypes from 'prop-types';
import styles from './Users.module.css';
//import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTablePagination from 'components/common/advance-table/AdvanceTablePagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AllUsersTable({ seteditUserState, searchKeyword }) {
  const [UsersData, setUsersData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [RolesData, setRolesData] = useState([]);

  const onDelete = async id => {
    if (confirm('Do You want to delete?')) {
      const aaid = id;
      const resp = await Users.deleteuser(aaid);
      if (resp === 1) {
        window.alert('User Deleted Successfully');
        GetUsersData();
      }
    }
  };

  // Function to search In Table
  const SearchTable = sk => {
    const keyword = sk;
    const AllRecords = [...UsersData];
    const fRecords = AllRecords.filter(item => {
      const kk = Object.keys(item);
      for (let j = 0; j < kk.length; j++) {
        const element = item?.[kk[j]];
        //console.log(element);
        if (
          element?.toString()?.toLowerCase().includes(keyword?.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    setfilteredData(fRecords);
  };

  useEffect(() => {
    SearchTable(searchKeyword);
  }, [searchKeyword]);

  // Function to add BorrowerName in Data
  const addBorrowerName = Data => {
    let allUsersData = [...Data];
    for (let i = 0; i < allUsersData.length; i++) {
      //const element = allUsersData[i];
      allUsersData[i] = {
        ...allUsersData[i],

        sno: i + 1
      };
    }
    return allUsersData;
  };

  useEffect(() => {
    roleBased_Permission.getRoles().then(res => setRolesData(res));
  }, []);

  const GetRoleById = roleId => {
    const roleObj = RolesData?.find(elem => elem.roleId === roleId);
    console.log(RolesData, roleObj);
    return roleObj?.roleName;
  };

  //Get Users Handler
  const GetUsersData = async () => {
    const resp = await Users.getAllUsers();
    // console.log(resp);
    const bData = addBorrowerName(resp);
    setUsersData(bData);
    setfilteredData(bData);
  };
  useEffect(() => {
    // Calling Get users APi
    GetUsersData();
  }, []);
  //delete users

  // to add data from getusers api
  const columns = [
    // {
    //   accessor: 'sno',
    //   Header: 'SNo'
    // },
    {
      accessor: 'firstName',
      Header: 'First Name'
    },
    {
      accessor: 'lastName',
      Header: 'Last Name'
    },
    {
      accessor: 'userName',
      Header: 'User Name'
    },
    {
      accessor: 'roleId',
      Header: 'Role',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return <>{GetRoleById(tableData.roleId)}</>;
        // GetRoleById()
      }
    },
    {
      accessor: 'merchant',
      Header: 'Merchant'
    },
    {
      //accessor: 'Action',
      Header: 'Action',
      Cell: rowData => {
        const tableData = rowData.data[rowData.row.index];
        return (
          <>
            <FontAwesomeIcon
              onClick={() => seteditUserState(tableData)}
              icon={faPen}
            />
            <FontAwesomeIcon
              onClick={() => onDelete(tableData?.aadId)}
              icon={faTrash}
              style={{ marginLeft: '1rem' }}
            />
          </>
        );
      }
    }
  ];

  return (
    <>
      {filteredData.length > 0 && (
        <AdvanceTableWrapper
          columns={columns}
          data={filteredData}
          selection
          sortable
          setSelectedRowIDs={val => this.setState({ SelectedRowID: val })}
          pagination
          perPage={10} // Need to modify
          rowCount={filteredData.length}
        >
          <Card className={styles.allUsersCard}>
            {/* <BasicCardHeader /> */}
            {/* <Card.Header style={{ textAlign: 'right' }}>
              <Button>Edit</Button>
              <Button style={{ marginLeft: '2rem' }}>Delete</Button>
            </Card.Header> */}
            <Card.Body className="p-3">
              <AdvanceTable
                table
                headerClassName="bg-200 text-900 text-nowrap align-middle"
                rowClassName="btn-reveal-trigger text-nowrap align-middle"
                tableProps={{
                  size: 'sm',
                  className: 'fs--1 mb-0 overflow-hidden'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <AdvanceTablePagination align="end" showicon={true} />
            </Card.Footer>
          </Card>
        </AdvanceTableWrapper>
      )}
    </>
  );
}

AllUsersTable.propTypes = {
  searchKeyword: PropTypes.any.isRequired,
  seteditUserState: PropTypes.any.isRequired
};
