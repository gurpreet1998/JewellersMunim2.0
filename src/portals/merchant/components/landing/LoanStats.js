import React from 'react';
import { Card, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import AlertError from 'components/errors/AlertError';
import Flex from 'components/common/Flex';
import IconItem from 'components/common/icon/IconItem';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import { numberFormatter } from 'helpers/utils';
import { useMerchantLoanData } from 'hooks/useLoanData';

const LoanStats = () => {
  const merchantId = 1; // todo: update merchantId. Set to 1 until login implemented

  const { isLoading, data, isError, error } = useMerchantLoanData(merchantId);
  const avgLoanAmt = data?.data?.avgLoanAmount;
  const merchantLoanCount = data?.data?.count;
  const totalFundedAmount = data?.data?.loanFunded;

  if (isError) {
    return (
      <>
        <AlertError variant={'info'} messageText={error.message} />
      </>
    );
  }

  return (
    <Card className={'h-lg-100'}>
      <Card.Header className="pb-0">
        <h5 className="fw-normal text-800 mb-0 mt-2">Loan Stats</h5>
      </Card.Header>
      <Card.Body>
        {isLoading === false ? (
          <Row>
            <Col
              xxl={4}
              lg={6}
              sm={4}
              className={
                'border-bottom border-sm-0 border-sm-end border-lg-bottom border-xxl-0 border-xxl-end ps-4'
              }
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                className="my-3"
              >
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
                  <p className="font-sans-serif cursor-default lh-1 fs-3 fs-sm-4 fs-xl-4 fs-xxl-3 pe-2">
                    ${numberFormatter(avgLoanAmt, 2)}
                  </p>
                </OverlayTrigger>
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
              <Flex
                justifyContent="center"
                alignItems="center"
                className="my-3"
              >
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
                <p className="font-sans-serif lh-1 fs-3 fs-sm-4 fs-xl-4 fs-xxl-3 pe-2">
                  {numberFormatter(merchantLoanCount, 0)}
                </p>
              </Flex>
            </Col>
            <Col
              xxl={4}
              lg={6}
              sm={4}
              className={'border-lg-end border-xxl-0 ps-4'}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                className="my-3"
              >
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
                  <p className="font-sans-serif cursor-default lh-1 fs-3 fs-sm-4 fs-xl-4 fs-xxl-3 pe-2">
                    ${numberFormatter(totalFundedAmount, 1)}
                  </p>
                </OverlayTrigger>
              </Flex>
            </Col>
          </Row>
        ) : (
          <Row className={'py-3'}>
            <LoadingSpinner messageText={'Loading...'} />
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default LoanStats;
