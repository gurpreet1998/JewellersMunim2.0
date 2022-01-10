import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Row, Button, ToggleButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DepositoryAccountsHeader = ({ selectedRowIds }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Row className="flex-between-center">
      <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
          Depository Account Details
        </h5>
      </Col>
      <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
        {Object.keys(selectedRowIds).length > 0 ? (
          <div className="d-flex">
            <Form.Select size="sm" aria-label="Bulk actions">
              <option>Bulk Actions...</option>
              <option value="toExceptions">Add to Exceptions</option>
              <option value="reconcile">Reconcile</option>
              {/*<option value="refund">Refund</option>*/}
            </Form.Select>
            <Button
              type="button"
              variant="falcon-default"
              size="sm"
              className="ms-2"
            >
              Apply
            </Button>
          </div>
        ) : (
          <div id="loan-actions">
            <ToggleButton
              size="sm"
              transform="shrink-3"
              className="mx-2 mt-2"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              checked={checked}
              value="1"
              onChange={e => setChecked(e.currentTarget.checked)}
            >
              <span className="d-inline-block ms-1">
                <FontAwesomeIcon icon="filter" className="me-2" />
                Filter Matched
              </span>
            </ToggleButton>
          </div>
        )}
      </Col>
    </Row>
  );
};

DepositoryAccountsHeader.propTypes = {
  selectedRowIds: PropTypes.object
};

export default DepositoryAccountsHeader;
