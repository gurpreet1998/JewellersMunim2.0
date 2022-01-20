import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import { Button, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import useOfferHook from './useOfferHook';

const OfferGrid = ({ offer, ...rest }) => {
  const {
    loanProgramName,
    loanType,
    loanAmount,
    intrestRate,
    downPayment,
    term,
    monthlyPayment,
    autopay
  } = offer;

  const { handleAddToSelectedOffers } = useOfferHook(offer);

  return (
    <Col className="mb-4" {...rest}>
      <Flex
        direction="column"
        justifyContent="between"
        className="border rounded-1 h-100 pb-3"
      >
        <div className="overflow-hidden">
          <div className="p-3">
            <h5 className="fs-1 fs-md-0 fs-lg-1">{loanProgramName}</h5>
            <p className="fs--1 fs-lg-0 mb-3 text-500">{loanType}</p>
            <h5 className="fs-2 fs-md-0 fs-lg-2 text-primary mb-0 d-flex align-items-center mb-3">
              <NumberFormat
                value={loanAmount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </h5>
            <p className="fs-0 fs-md--1 fs-lg-0 mb-1">
              Monthly Payment:{' '}
              <strong>
                <NumberFormat
                  value={monthlyPayment}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </strong>
            </p>
            <p className="fs-0 fs-md--1 fs-lg-0 mb-1">
              Down Payment:{' '}
              <strong>
                {
                  <NumberFormat
                    value={downPayment}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                }
              </strong>
            </p>
            <p className="fs-0 fs-md--1 fs-lg-0 mb-1">
              Interest Rate:{' '}
              <strong>
                {`${autopay ? `*${intrestRate}%` : `${intrestRate}%`}`}
              </strong>
            </p>
            <p className="fs-0 fs-md--1 fs-lg-0 mb-1">
              Term: <strong>{term} Months</strong>
            </p>
          </div>
        </div>
        <Flex alignItems="center" className="px-3">
          <div className="flex-1 fs--1 fs-md--2 fs-lg--1">
            {`${autopay ? '*Auto-Pay Required' : ''}`}
          </div>
          <Button
            size="sm ms-2"
            variant="falcon-default"
            onClick={() => handleAddToSelectedOffers(1, false, true)}
          >
            Apply
          </Button>
        </Flex>
      </Flex>
    </Col>
  );
};

OfferGrid.propTypes = {
  offer: PropTypes.shape({
    loanProgramName: PropTypes.string.isRequired,
    loanType: PropTypes.string,
    loanAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    intrestRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    monthlyPayment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    downPayment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    term: PropTypes.number,
    autopay: PropTypes.bool
  })
};

export default OfferGrid;
