import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AlertError from 'components/errors/AlertError';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import { useMerchantMonthWiseData } from 'hooks/useLoanData';
import {
  getCurrentMonth,
  isIterableArray,
  numberFormatter,
  monthNames
} from 'helpers/utils';

let cMonth = getCurrentMonth();

const SnapshotItem = ({
  month,
  newApplicationsMonthWise,
  totalLoanAmount,
  lessThanLastMonth
}) => {
  let loanTotal = totalLoanAmount;

  return (
    <div className="px-5 px-sm-6">
      <Row>
        <h1 className="fs-3 fw-normal text-700 mb-3 lh-1">
          {monthNames[month - 1]}
        </h1>
      </Row>
      <Row>
        <Col md={'4'} className={'mb-2 pe-md-0'}>
          <Card className="bg-100 shadow-none border">
            <Card.Body className="pt-3 pb-0">
              <p className="font-sans-serif lh-1 fs-4 pe-2">
                {newApplicationsMonthWise}
              </p>
            </Card.Body>
            <Card.Footer className="pb-2 pt-0">
              <h4 className="fs--1 fw-normal text-primary text-truncate mb-0 mt-0">
                New Applications
              </h4>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={'4'} className={'mb-2 pe-md-0'}>
          <Card className="bg-100 shadow-none border">
            <Card.Body className="pt-3 pb-0">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="totalLoanAmt">
                    <NumberFormat
                      value={loanTotal}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </Tooltip>
                }
              >
                <p className="font-sans-serif lh-1 fs-4 pe-2 cursor-default">
                  ${numberFormatter(loanTotal, 0)}
                </p>
              </OverlayTrigger>
            </Card.Body>
            <Card.Footer className="pb-2 pt-0">
              <h4 className="fs--1 fw-normal text-primary text-truncate mb-0 mt-0">
                Total Loan Amount
              </h4>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={'4'} className={'mb-5 mb-sm-2 pe-md-0'}>
          <Card className="bg-100 shadow-none border">
            <Card.Body className="pt-3 pb-0">
              <p className="font-sans-serif lh-1 fs-4 pe-2">
                {lessThanLastMonth}
              </p>
            </Card.Body>
            <Card.Footer className="pb-2 pt-0">
              <h4 className="fs--1 fw-normal text-primary text-truncate mb-0 mt-0">
                Less Than Last Month
              </h4>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  initialSlide: cMonth,
  dots: true
};

const PortalSnapshot = () => {
  const merchantId = 1; // todo: update merchantId. Set to 1 until login implemented
  const { isLoading, data, isError, error } =
    useMerchantMonthWiseData(merchantId);
  const portalSnapshotNewApps = data?.data;

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
        <h5 className="fw-normal text-800 mb-0 mt-2">Portal Snapshot</h5>
      </Card.Header>
      <Card.Body>
        <div className="text-center px-4 pb-4 pt-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Slider {...settings}>
                {isLoading === false ? (
                  isIterableArray(portalSnapshotNewApps) &&
                  portalSnapshotNewApps.map((item, index) => (
                    <SnapshotItem {...item} key={index} />
                  ))
                ) : (
                  <LoadingSpinner messageText={'Loading...'} />
                )}
              </Slider>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

SnapshotItem.propTypes = {
  month: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  newApplicationsMonthWise: PropTypes.number.isRequired,
  totalLoanAmount: PropTypes.number.isRequired,
  lessThanLastMonth: PropTypes.number.isRequired
};

export default PortalSnapshot;
