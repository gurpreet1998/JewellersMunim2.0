import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const TransactionHandler = ({
  reconcileData,
  unReconcileData,
  matchData,
  unMatchData,
  postData,
  flag
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
            onChange={reconcileData}
          />
          <Form.Check
            inline
            type="radio"
            id="flexRadioDefault2"
            label="Un-Reconciled"
            name="ReconcileRadio"
            className="form-label-nogutter"
            onChange={unReconcileData}
            defaultChecked
          />
        </div>
        <div className="border-dashed-bottom my-3" />
        <Row>
          <Col>
            <Button
              size="sm"
              variant={'falcon-primary'}
              className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
              disabled={flag}
              onClick={matchData}
            >
              Match
            </Button>
            <Button
              size="sm"
              variant={'falcon-primary'}
              className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0 mb-lg-2"
              disabled={flag}
              onClick={unMatchData}
            >
              Un-Match
            </Button>
          </Col>
          <Col>
            <Button
              size="sm"
              variant={'falcon-warning'}
              disabled={flag}
              className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-2"
              // onClick={() => reconcileData()}
            >
              Reset
            </Button>
            <Button
              size="sm"
              variant={'falcon-success'}
              disabled={!flag}
              className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0"
              onClick={postData}
            >
              Post Transactions
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

TransactionHandler.propTypes = {
  reconcileData: PropTypes.func,
  unReconcileData: PropTypes.func,
  matchData: PropTypes.func,
  unMatchData: PropTypes.func,
  postData: PropTypes.func,
  flag: PropTypes.bool.isRequired
};

export default TransactionHandler;
