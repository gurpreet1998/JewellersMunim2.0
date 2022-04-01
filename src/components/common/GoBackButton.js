import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function GoBackButton() {
  const history = useHistory();

  return (
    <Col md="auto">
      <Button onClick={() => history.goBack()}>
        <FontAwesomeIcon
          icon="chevron-left"
          transform="shrink-4 down-1"
          className="me-1"
        />
        Go Back
      </Button>
    </Col>
  );
}
