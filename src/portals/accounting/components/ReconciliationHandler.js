import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const ReconciliationHandler = ({
  reconciledAction,
  unReconciledAction,
  matchAction,
  unMatchAction,
  resetAction,
  postAction,
  selectedFilter,
  reconciledChecked,
  disabled
}) => {
  return (
    <Card className="bg-transparent-50 shadow-none border border-200">
      <Card.Body>
        <div>
          <Form.Check
            inline
            type="radio"
            id="flexRadioDefault1"
            label="Reconciled"
            name="ReconcileRadio"
            className="form-label-nogutter"
            onChange={() => {
              reconciledAction(selectedFilter);
            }}
            defaultChecked={true}
          />
          <Form.Check
            inline
            type="radio"
            id="flexRadioDefault2"
            label="Un-Reconciled"
            name="ReconcileRadio"
            className="form-label-nogutter"
            onChange={() => {
              unReconciledAction(selectedFilter);
            }}
          />
        </div>
        <div className="border-dashed-bottom my-3" />
        <div>
          <Row>
            <Col xs={6} lg={12}>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
                disabled={reconciledChecked}
                onClick={() => matchAction()}
              >
                Match
              </Button>
              <Button
                size="sm"
                variant={'falcon-primary'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0 mb-lg-2"
                disabled={!reconciledChecked}
                onClick={() => {
                  unMatchAction();
                }}
              >
                Un-Match
              </Button>
            </Col>
            <Col xs={6} lg={12}>
              <Button
                size="sm"
                variant={'falcon-warning'}
                disabled={!disabled}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
                onClick={() => resetAction()}
              >
                Reset
              </Button>
              <Button
                size="sm"
                variant={'falcon-success'}
                disabled={!disabled}
                className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0"
                onClick={() => postAction()}
              >
                Post Transactions
              </Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

ReconciliationHandler.propTypes = {
  reconciledAction: PropTypes.func.isRequired,
  unReconciledAction: PropTypes.func.isRequired,
  matchAction: PropTypes.func.isRequired,
  unMatchAction: PropTypes.func.isRequired,
  resetAction: PropTypes.func.isRequired,
  postAction: PropTypes.func.isRequired,
  reconciledChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  selectedFilter: PropTypes.string
};

export default ReconciliationHandler;
