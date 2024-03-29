import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import BasicCardHeader from 'components/common/BasicCardHeader';
import { useParams } from 'react-router-dom';
import { pendingSettlementService } from '_services/accounting';
import { CMLPaymentsTableData } from 'data/accounting/pendingSettlements';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const CMLTransaction = () => {
  const merchantId = useParams().merchantId;
  console.log('merchantId', merchantId);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // console.log(tableData);
    fetchData(merchantId);
  }, []);

  const fetchData = merchantId => {
    const res =
      pendingSettlementService.getMerchantSettlementForCMLPayment(merchantId);
    res.then(res => setTableData(res));
    console.log('tableData', tableData);
  };
  let totalSettlementAmount = 0;
  let mdrTotal = 0;
  let totalLoanAmount = 0;
  for (let i = 0; i < tableData.length; i++) {
    totalSettlementAmount += tableData[i].settlementAmount;
    mdrTotal += tableData[i].mdr;
    totalLoanAmount += tableData[i].loanAmount;
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
            pagination
            perPage={7}
            preSelectAll={true}
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
                <Col xs="auto" className="d-flex align-items-end pe-4">
                  <h6 className="mb-0 text-nowrap">Total: </h6>
                </Col>

                <Col xs="auto" className="d-flex align-items-end pe-2">
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
                <Col xs="auto" className="d-flex align-items-end pe-2">
                  <h6 className="mb-0 text-nowrap">
                    {' '}
                    <NumberFormat
                      value={totalSettlementAmount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </h6>
                </Col>
                <Col xs="auto" className="d-flex align-items-end pe-6" />
                <Col xs="auto" className="d-flex align-items-end pe-6" />
                <Col xs="auto" className="d-flex align-items-end pe-6" />
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
      {/* <PostPayment show={show} closeModal={closeModal} /> */}
    </>
  );
};

export default CMLTransaction;
