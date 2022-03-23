import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import BasicCardHeader from '../common/BasicCardHeader';
import IconAlert from '../common/IconAlert';

const AlertError = ({ messageText = '', variant = 'info' }) => {
  return (
    <Card className={'h-lg-100'}>
      <BasicCardHeader name={'Portal Snapshot'} fontSize={'fs-0'} />
      <Card.Body>
        <div className="px-3 pb-4 pt-3">
          <Row>
            <Col xs={12}>
              <IconAlert variant={variant}>
                <Alert.Heading>Uh Oh! Something Went Wrong!</Alert.Heading>
                <p className="mb-0">{messageText}</p>
              </IconAlert>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

AlertError.propTypes = {
  messageText: PropTypes.any,
  variant: PropTypes.string
};

export default AlertError;
