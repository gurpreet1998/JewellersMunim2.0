import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import BasicCardHeader from 'components/common/BasicCardHeader';
import { useParams } from 'react-router-dom';
import { pendingSettlementService } from '_services/accounting';
import { CPPPaymentsTableData } from 'data/accounting/pendingSettlements';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';

const CPPTransaction = () => {
  const merchantId = useParams().merchantId;
  console.log('merchantId', merchantId);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetchData(merchantId);
  }, []);

  const fetchData = merchantId => {
    const res =
      pendingSettlementService.GetMerchantSettlementForCPPayMent(merchantId);
    res.then(res => setTableData(res));
  };
  let totalPrincipalAmount = 0;
  let totalMerchantInterest = 0;
  let totalChoiceInterest = 0;
  let sumTotalInterest = 0;
  let totalSumAmount = 0;
  for (let i = 0; i < tableData.length; i++) {
    totalPrincipalAmount += tableData[i].principalAmount;
    totalChoiceInterest += tableData[i].choiceInterest;
    totalMerchantInterest += tableData[i].merchantInterest;
    sumTotalInterest += tableData[i].totalInterest;
    totalSumAmount += tableData[i].totalAmount;
  }
  return (
    <>
      <Card className={'h-lg-100'}>
        <Card.Body>
          <AdvanceTableWrapper
            columns={CPPPaymentsTableData.columns}
            data={tableData}
            selection
            sortable
            pagination
            perPage={100}
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
                <Col xs="auto" className="d-flex align-items-end pe-6">
                  <h6 className="mb-0 text-nowrap">Total: </h6>
                </Col>

                <Col xs="auto" className="d-flex align-items-end pe-4">
                  <h6 className="mb-0 text-nowrap">
                    {' '}
                    <NumberFormat
                      value={totalPrincipalAmount}
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
                      value={totalMerchantInterest}
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
                      value={totalChoiceInterest}
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
                      value={sumTotalInterest}
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

CPPTransaction.propTypes = { merchantId: PropTypes.int };

export default CPPTransaction;
