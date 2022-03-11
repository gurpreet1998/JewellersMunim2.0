import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import BasicCardHeader from 'components/common/BasicCardHeader';
// import { Link } from 'react-router-dom';
// Data Placeholder
import { pendingSettlementService } from '_services/accounting';
import { PendingSettelmentsSummaryColumns } from 'data/accounting/pendingSettlements';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const Summary = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // console.log(tableData);
    GetSummaryTableData();
  }, []);

  const [SelectedRowID, setSelectedRowID] = useState([]);

  useEffect(() => {
    console.log('SelectedRowID', SelectedRowID);
  }, [SelectedRowID]);

  const GetSummaryTableData = () => {
    const resp = pendingSettlementService.getMerchantSettlementSummary();
    console.log('resp :', resp);
    // setTableData(resp);
    resp.then(res => setTableData(res));
  };

  return (
    <>
      <Card className={'h-lg-100'}>
        <Card.Body>
          <AdvanceTableWrapper
            columns={PendingSettelmentsSummaryColumns.columns}
            data={tableData}
            selection
            sortable
            setSelectedRowIDs={val => setSelectedRowID(val)}
            pagination
            perPage={7}
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
      {/* <PostPayment show={show} closeModal={closeModal} /> */}
    </>
  );
};

// Summary.propTypes = {
//   merchant: PropTypes.string
// };

export default Summary;
