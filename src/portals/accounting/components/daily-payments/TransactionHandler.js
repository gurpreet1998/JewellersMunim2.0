import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const TransactionHandler = ({ reconcileData, unReconcileData, flag }) => {
  useEffect(() => {
    unReconcileData()
  }, [])
  
  return (
    <Card className="bg-transparent-50 shadow-none border border-200">
      <Card.Body>
        <div>
        <Form.Check
            inline
            type="radio"
            id="flexRadioDefault2"
            label="View Matched"
            name="ReconcileRadio"
            className="form-label-nogutter"
            onChange={unReconcileData}
            defaultChecked
          />
          <Form.Check
            inline
            type="radio"
            id="flexRadioDefault1"
            label="View Un-Matched"
            name="ReconcileRadio"
            className="form-label-nogutter"
            onChange={reconcileData}
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
              // onClick={() => reconcileData()}
            >
              Match
            </Button>
            <Button
              size="sm"
              variant={'falcon-primary'}
              className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-100 text-truncate mb-0 mb-lg-2"
              disabled={flag}
              // onClick={() => reconcileData()}
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
              // onClick={() => reconcileData()}
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
  flag: PropTypes.bool.isRequired
};

export default TransactionHandler;