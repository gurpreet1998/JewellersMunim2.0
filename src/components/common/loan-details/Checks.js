import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
export default function Checks(props) {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <label className="p-0">
          <input
            className="form-check-input"
            type="checkbox"
            name="ReconcileRadio"
            id="flexRadioDefault1"
            disabled={true}
            checked={true}
            style={{ marginRight: '5px' }}
          />
          AutoPay
        </label>
        <label className="p-2 mr-5">
          <input
            className="form-check-input p-1"
            type="checkbox"
            disabled={true}
            checked={true}
            name="ReconcileRadio"
            id="flexRadioDefault1"
            style={{ marginRight: '5px' }}
          />
          Open Complaints/Disputes
        </label>
        <label className="p-2 mr-5">
          <input
            className="form-check-input p-1"
            type="checkbox"
            disabled={true}
            checked={true}
            name="ReconcileRadio"
            id="flexRadioDefault1"
            style={{ marginRight: '5px' }}
          />
          Alerts
        </label>
        <label className="p-2 mr-5">
          <input
            className="form-check-input p-1"
            type="checkbox"
            checked={true}
            disabled={true}
            name="ReconcileRadio"
            id="flexRadioDefault1"
            style={{ marginRight: '5px' }}
          />
          Cease/Desist
        </label>
        <label className="p-2 mr-5">
          <input
            className="form-check-input p-1"
            type="checkbox"
            disabled={true}
            checked={true}
            name="ReconcileRadio"
            id="flexRadioDefault1"
            style={{ marginRight: '5px' }}
          />
          Do Not Call
        </label>
      </Col>
    </Row>
  );
}
Checks.propTypes = {
  loanId: PropTypes.array
};
