import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { pendingSettlementService } from '_services/accounting';
import { PendingSettlementsSummaryColumns } from 'data/accounting/pendingSettlements';

const Summary = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    GetSummaryTableData();
  }, []);

  const GetSummaryTableData = () => {
    const resp = pendingSettlementService.getMerchantSettlementSummary();
    console.log('resp :', resp);
    resp.then(res => setTableData(res));
  };

  let cmlAmount = 0;
  let cmlRefundAmount = 0;
  let cpPaymentAmount = 0;
  let cpRefundAmount = 0;
  let cpPromoAmount = 0;
  for (let i = 0; i < tableData.length; i++) {
    cmlAmount += tableData[i].cmlPaymentAmount;
    cmlRefundAmount += tableData[i].cmlRefundAmount;
    cpPaymentAmount += tableData[i].cpPaymentAmount;
    cpRefundAmount += tableData[i].cpRefundAmount;
    cpPromoAmount += tableData[i].cpPromoAmount;
  }
  return (
    <>
      <AdvanceTableWrapper
        columns={PendingSettlementsSummaryColumns.columns}
        data={tableData}
        selection
        sortable
        pagination
        perPage={7}
        preSelectAll={true}
        rowCount={tableData.length}
      >
        <Card className={'h-100'}>
          <FalconCardHeader
            title={'Settlement Summary Table'}
            endEl={
              <Button type="button" variant="primary" size={'sm'}>
                Settle to Merchant
              </Button>
            }
          />
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
            <Col xs="auto" className="d-flex align-items-end pe-6">
              <h6 className="mb-0 text-nowrap">
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
            <Col xs="auto" className="d-flex align-items-end pe-6">
              <h6 className="mb-0 text-nowrap">
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
            <Col xs="auto" className="d-flex align-items-end pe-4">
              <h6 className="mb-0 text-nowrap">
                <NumberFormat
                  value={cpPromoAmount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </h6>
            </Col>
          </Row>
          <Card.Footer>
            <AdvanceTableFooter
              table
              rowCount={tableData.length >= 10 ? tableData.length : false}
              rowInfo={tableData.length > 10}
              navButtons={tableData.length >= 10}
            />
          </Card.Footer>
        </Card>
      </AdvanceTableWrapper>
    </>
  );
};

export default Summary;
