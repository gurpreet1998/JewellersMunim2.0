import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BasicCardHeader from 'components/common/BasicCardHeader';
// import { Link } from 'react-router-dom';
// Data Placeholder
import { pendingSettlementService } from '_services/accounting';
import { CPPPaymentsTableData } from 'data/accounting/pendingSettlements';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const CPPTransaction = ({ merchantId }) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetchData(merchantId);
  }, []);

  const [SelectedRowID, setSelectedRowID] = useState([]);

  useEffect(() => {
    console.log('SelectedRowID', SelectedRowID);
  }, [SelectedRowID]);

  const fetchData = merchantId => {
    const res =
      pendingSettlementService.GetMerchantSettlementForCPPayMent(merchantId);
    res.then(res => setTableData(res));
  };

  return (
    <>
      <Card className={'h-lg-100'}>
        <Card.Body>
          <AdvanceTableWrapper
            columns={CPPPaymentsTableData.columns}
            data={tableData}
            selection
            sortable
            setSelectedRowIDs={val => setSelectedRowID(val)}
            pagination
            perPage={100}
            rowCount={tableData.length}
          >
            <Card className={'h-100'}>
              <BasicCardHeader name={''} fontSize={'fs-0'} />
              <Card.Body className="px-0 pt-0 pb-3">
                <AdvanceTable
                  table
                  headerClassName="bg-200 text-900 text-nowrap align-middle"
                  rowClassName="btn-reveal-trigger text-nowrap align-middle"
                  tableProps={{
                    size: 'sm',
                    className: 'fs--2 mb-0 overflow-hidden'
                  }}
                />
              </Card.Body>
              <Card.Footer>
                <AdvanceTableFooter
                  rowCount={tableData.length}
                  table
                  rowInfo
                  navButtons
                />
              </Card.Footer>
            </Card>
          </AdvanceTableWrapper>
        </Card.Body>
      </Card>
    </>
  );
};

CPPTransaction.propTypes = { merchantId: PropTypes.int };

export default CPPTransaction;
