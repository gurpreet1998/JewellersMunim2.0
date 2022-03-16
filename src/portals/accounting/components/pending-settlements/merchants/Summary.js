import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
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
  let cmlAmount = 0;
  let cmlRefundAmount = 0;
  let cpPaymentAmount = 0;
  let cpRefundAmount = 0;
  for (let i = 0; i < tableData.length; i++) {
    cmlAmount += tableData[i].cmlPaymentAmount;
    cmlRefundAmount += tableData[i].cmlRefundAmount;
    cpPaymentAmount += tableData[i].cpPaymentAmount;
    cpRefundAmount += tableData[i].cpRefundAmount;
  }
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
              <Row className="flex-end-center">
                <Col xs="auto" className="d-flex align-items-end pe-6">
                  <h6 className="mb-0 text-nowrap">Total: </h6>
                </Col>

                <Col xs="auto" className="d-flex align-items-end pe-4">
                  <h6 className="mb-0 text-nowrap">
                    {' '}
                    <NumberFormat
                      value={cmlAmount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </h6>
                </Col>
                <Col xs="auto" className="d-flex align-items-end pe-4">
                  <h6 className="mb-0 text-nowrap">
                    {' '}
                    <NumberFormat
                      value={cmlRefundAmount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </h6>
                </Col>
                <Col xs="auto" className="d-flex align-items-end pe-4">
                  <h6 className="mb-0 text-nowrap">
                    {' '}
                    <NumberFormat
                      value={cpPaymentAmount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </h6>
                </Col>
                <Col xs="auto" className="d-flex align-items-end pe-4">
                  <h6 className="mb-0 text-nowrap">
                    {' '}
                    <NumberFormat
                      value={cpRefundAmount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </h6>
                </Col>
                <Col xs="auto" className="d-flex align-items-end pe-4" />
                <Col xs="auto" className="d-flex align-items-end pe-4" />
                <Col xs="auto" className="d-flex align-items-end pe-4" />
                <Col xs="auto" className="d-flex align-items-end pe-4" />
                <Col xs="auto" className="d-flex align-items-end pe-4" />
                <Col xs="auto" className="d-flex align-items-end pe-4" />
                <Col xs="auto" className="d-flex align-items-end pe-4" />
              </Row>
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
        <Card.Footer className={'bg-100'}></Card.Footer>
      </Card>
      {/* <PostPayment show={show} closeModal={closeModal} /> */}
    </>
  );
};

// Summary.propTypes = {
//   merchant: PropTypes.string
// };

export default Summary;
