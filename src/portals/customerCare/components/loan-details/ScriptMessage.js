import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const ScriptMessage = props => {
  const [modal, setModal] = useState(props.show);
  const handleCancel = () => {
    setModal(!props.show);
    props.closeModal();
  };

  return (
    <>
      <Modal
        show={modal}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body className="ml-3">
          <Row>
            <h5>{props.message}</h5>
          </Row>
        </Modal.Body>
        <Modal.Footer>
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
        </Modal.Footer>
      </Modal>
    </>
  );
};
ScriptMessage.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  message: PropTypes.string
};
export default ScriptMessage;
