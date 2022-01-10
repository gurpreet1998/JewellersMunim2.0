import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import Background from 'components/common/Background';

const SubTitleCard = ({ title, endEl }) => {
  return (
    <Card>
      <Background
        // image={bgImage}
        className="bg-card"
        style={{
          borderTopRightRadius: '0.375rem',
          borderBottomRightRadius: '0.375rem'
        }}
      />

      <Card.Body className="position-relative">
        <Row className="g-2 align-items-sm-center">
          <Col>
            <Row className="align-items-center">
              <Col className="pe-xl-8">
                <h5 className="fs-1 mb-3 mb-sm-0 text-primary">{title}</h5>
              </Col>
              <Col xs="auto" className="ms-auto">
                {endEl}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

SubTitleCard.propTypes = {
  title: PropTypes.node.isRequired,
  endEl: PropTypes.node
};

export default SubTitleCard;
