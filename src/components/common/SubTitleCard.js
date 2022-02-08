import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

const SubTitleCard = ({ title, endEl }) => {
  return (
    <Card className="bg-100 shadow-none border mb-2 py-2">
      <Card.Body className="position-relative">
        <Row className="g-2 align-items-sm-center">
          <Col>
            <Row className="g-2 align-items-sm-center">
              <Col>
                <Row className="align-items-center">
                  <Col className="pe-xl-8">
                    <div className="fs-0 fs-md-1 mb-2 mb-md-0 text-primary">
                      {title}
                    </div>
                  </Col>
                  <Col xs="12" sm="6" md="5" className="ms-auto">
                    {endEl}
                  </Col>
                </Row>
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
