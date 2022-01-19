import React from 'react';
import { Card, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Flex from 'components/common/Flex';
import IconItem from 'components/common/icon/IconItem';
import { MerchantLoanData } from '_services/loan';
import { numberFormatter } from 'helpers/utils';
import LoadingSpinner from '../../../../components/loading-spinner/LoadingSpinner';

const LoanStats = () => {
  let avgLoanAmt = MerchantLoanData().avgLoanAmount;
  let merchantLoanCount = MerchantLoanData().count;
  let totalFundedAmount = MerchantLoanData().loanFunded;

  return (
    <Card className={'h-lg-100'}>
      <Card.Header className="pb-0">
        <h5 className="fw-normal text-800 mb-0 mt-2">Loan Stats</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col
            xxl={4}
            lg={6}
            sm={4}
            className={
              'border-bottom border-sm-0 border-sm-end border-lg-bottom border-xxl-0 border-xxl-end ps-4'
            }
          >
            <Flex justifyContent="center" alignItems="center" className="my-3">
              <IconItem
                tag="div"
                icon="money-check-alt"
                bg={`soft-primary`}
                color="primary"
                size="sm"
                iconClass="fs--2"
                className="me-2 shadow-none"
              />
              <h6 className="mb-0 flex-1 fs-lg--2">Avg Amount</h6>
            </Flex>
            <Flex className="my-3">
              {avgLoanAmt !== undefined ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="fullAvgLoanAmt">
                      <NumberFormat
                        value={avgLoanAmt}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    </Tooltip>
                  }
                >
                  <p className="font-sans-serif lh-1 fs-3 fs-sm-4 fs-xl-4 fs-xxl-3 pe-2">
                    ${numberFormatter(avgLoanAmt, 2)}
                  </p>
                </OverlayTrigger>
              ) : (
                <LoadingSpinner />
              )}
            </Flex>
          </Col>
          <Col
            xxl={4}
            lg={6}
            sm={4}
            className={
              'border-bottom border-sm-0 border-sm-end border-lg-bottom border-lg-end-0 border-xxl-0 border-xxl-end  ps-4'
            }
          >
            <Flex justifyContent="center" alignItems="center" className="my-3">
              <IconItem
                tag="div"
                icon="plus"
                bg={`soft-primary`}
                color="primary"
                size="sm"
                iconClass="fs--2"
                className="me-2 shadow-none"
              />
              <h6 className="mb-0 flex-1 fs-lg--2">Loan Count</h6>
            </Flex>
            <Flex className="my-3">
              {merchantLoanCount !== undefined ? (
                <p className="font-sans-serif lh-1 fs-3 fs-sm-4 fs-xl-4 fs-xxl-3 pe-2">
                  {numberFormatter(merchantLoanCount, 0)}
                </p>
              ) : (
                <LoadingSpinner />
              )}
            </Flex>
          </Col>
          <Col
            xxl={4}
            lg={6}
            sm={4}
            className={'border-lg-end border-xxl-0 ps-4'}
          >
            <Flex justifyContent="center" alignItems="center" className="my-3">
              <IconItem
                tag="div"
                icon="funnel-dollar"
                bg={`soft-primary`}
                color="primary"
                size="sm"
                iconClass="fs--2"
                className="me-2 shadow-none"
              />
              <h6 className="mb-0 flex-1 fs-lg--2">Total Funded</h6>
            </Flex>
            <Flex className="my-3">
              {totalFundedAmount !== undefined ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="fullTotalFundedAmt">
                      <NumberFormat
                        value={totalFundedAmount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    </Tooltip>
                  }
                >
                  <p className="font-sans-serif lh-1 fs-3 fs-sm-4 fs-xl-4 fs-xxl-3 pe-2">
                    ${numberFormatter(totalFundedAmount, 1)}
                  </p>
                </OverlayTrigger>
              ) : (
                <LoadingSpinner />
              )}
            </Flex>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoanStats;
