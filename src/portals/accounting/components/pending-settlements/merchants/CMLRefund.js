import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import BasicCardHeader from 'components/common/BasicCardHeader';
// import { Link } from 'react-router-dom';
// Data Placeholder
import { pendingSettlementService } from '_services/accounting';
import { CMLPaymentsTableData } from 'data/accounting/pendingSettlements';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const CMLRefund = ({ merchantId }) => {
  // console.log(merchantId);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // console.log(tableData);
    fetchData(merchantId);
  }, []);

  const [SelectedRowID, setSelectedRowID] = useState([]);

  useEffect(() => {
    console.log('SelectedRowID', SelectedRowID);
  }, [SelectedRowID]);

  const fetchData = merchantId => {
    const res =
      pendingSettlementService.GetMerchantSettlementForCMLRefund(merchantId);
    res.then(res => setTableData(res));
  };
  let totalLoanAmount = 0;
  let mdrTotal = 0;
  let totalSumAmount = 0;
  for (let i = 0; i < tableData.length; i++) {
    totalLoanAmount += tableData[i].loanAmount;
    mdrTotal += tableData[i].mdr;
    totalSumAmount += tableData[i].totalAmount;
  }

  return (
    <>
      <Card className={'h-lg-100'}>
        <Card.Body>
          <AdvanceTableWrapper
            columns={CMLPaymentsTableData.columns}
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
                      value={totalLoanAmount}
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
                      value={mdrTotal}
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
                      value={totalSumAmount}
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
      </Card>
    </>
  );
};

CMLRefund.propTypes = { merchantId: PropTypes.int };
export default CMLRefund;
