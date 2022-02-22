// import StatusAccordionTable from 'components/status-accordion/StatusAccordionTable';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Users } from '_services/userService';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import PropTypes from 'prop-types';
import styles from './Users.module.css';

export default function AllUsersTable({ searchKeyword }) {
  const [UsersData, setUsersData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

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
      const element = allUsersData[i];
      allUsersData[i] = {
        ...allUsersData[i],

        sno: i + 1
      };
    }
    return allUsersData;
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
  // to add data from getusers api
  const columns = [
    {
      accessor: 'sno',
      Header: 'SNo'
    },
    {
      accessor: 'borrower',
      Header: 'Borrower Name'
    },

    {
      accessor: 'userName',
      Header: 'User Name'
    },
    {
      accessor: 'email',
      Header: 'Email'
    }
  ];

  return (
    <>
      {filteredData.length > 0 && (
        <AdvanceTableWrapper
          columns={columns}
          data={filteredData}
          pagination
          perPage={10} // Need to modify
          rowCount={filteredData.length}
        >
          <Card className={styles.allUsersCard}>
            {/* <BasicCardHeader /> */}
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
          </Card>
        </AdvanceTableWrapper>
      )}
    </>
  );
}

AllUsersTable.propTypes = { searchKeyword: PropTypes.any.isRequired };
