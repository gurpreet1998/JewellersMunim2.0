import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import SoftBadge from 'components/common/SoftBadge';

const LoanSummary = ({
  loanAmount,
  downPayment,
  interestRate,
  term,
  origFee,
  monthlyPayment,
  loanProgramName,
  payableTotal,
  apr,
  floridaTax,
  ...rest
}) => {
  return (
    <Card className="mt-2 my-sm-3 pe-card border-0 shadow-none" {...rest}>
      <Card.Header className="bg-none border-bottom ms-3 ps-sm-4 ps-xl-0 d-flex flex-between-center">
        <h5 className="mb-0">Finance Details</h5>
        <SoftBadge pill bg="primary" className="me-2">
          {loanProgramName}
        </SoftBadge>
      </Card.Header>
      <Card.Body className={'ms-3 ps-sm-4 ps-xl-0'}>
        <Table borderless className="fs--1 mb-0">
          <tbody>
            <>
              <tr className="border-bottom">
                <th className={'ps-0 pt-0'}>
                  Financed Amount:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className={'pe-0 text-end pt-0'}>
                  <NumberFormat
                    value={loanAmount}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </th>
              </tr>
              <tr className="border-bottom">
                <th className="ps-0">
                  APR:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className="pe-0 text-end">{apr}%</th>
              </tr>
              <tr className="border-bottom">
                <th className="ps-0">
                  Interest Rate:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className="pe-0 text-end">{interestRate}%</th>
              </tr>
              <tr className="border-bottom">
                <th className="ps-0">
                  Term Length:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className="pe-0 text-end">{term} Months</th>
              </tr>
              <tr className="border-bottom">
                <th className="ps-0">
                  Monthly Payment:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className="pe-0 text-end">
                  <NumberFormat
                    value={monthlyPayment}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </th>
              </tr>
              <tr className="border-bottom">
                <th className="ps-0">
                  Down Payment:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className="pe-0 text-end">
                  <NumberFormat
                    value={downPayment}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </th>
              </tr>
              <tr className="border-bottom">
                <th className="ps-0">
                  Origination Fee:
                  <div className="text-400 fw-normal fs--2" />
                </th>
                <th className="pe-0 text-end">
                  <NumberFormat
                    value={origFee}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </th>
              </tr>
              {floridaTax > 0 ? (
                <tr>
                  <th className="ps-0">
                    Florida State Tax:
                    <div className="text-400 fw-normal fs--2" />
                  </th>
                  <th className="pe-0 text-end">
                    {
                      <NumberFormat
                        value={floridaTax}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    }
                  </th>
                </tr>
              ) : (
                ''
              )}
              <tr className="border-top-2">
                <th className="ps-0 fs-1">Net Total:</th>
                <th className="pe-0 fs-1 text-primary text-end">
                  <NumberFormat
                    value={payableTotal}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </th>
              </tr>
            </>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

LoanSummary.propTypes = {
  downPayment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loanAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  interestRate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  term: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  origFee: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  monthlyPayment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  payableTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  apr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  floridaTax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loanProgramName: PropTypes.string.isRequired
};

export default LoanSummary;
