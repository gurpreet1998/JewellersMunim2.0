import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card } from 'react-bootstrap';
const ScriptMessage = props => {
  const [modal, setModal] = useState(props.show);
  const handleCancel = () => {
    setModal(!props.show);
    props.closeModal();
  };

  return (
    <>
      <Card
        show={modal}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Card.Body className="ml-3">
          <Row>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h5
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              {props.message}
            </h5>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              <Button variant={'falcon-primary'} onClick={() => handleCancel()}>
                Cancel
              </Button>{' '}
            </Col>
            <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              <Button variant={'falcon-primary'} onClick={() => handleCancel()}>
                Complete
              </Button>
            </Col>
            <Col
              xxl={2}
              sm={4}
              className={
                'border-bottom border-sm-0 border-xxl-0 border-xxl-end'
              }
            >
              <Button variant={'falcon-primary'} onClick={() => handleCancel()}>
                Next
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
ScriptMessage.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  message: PropTypes.string
};
export default ScriptMessage;