import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'react-bootstrap';
import Flex from '../../Flex';
import IconButton from '../../IconButton';
import FalconCloseButton from '../../FalconCloseButton';

const ScriptMessage = props => {
  const [modal, setModal] = useState(props.show);

  const handleCancel = () => {
    setModal(!props.show);
    props.closeModal();
  };

  return (
    <>
      <Card show={modal} size="lg" className={'mt-3'}>
        <Card.Header className={'border-bottom'}>
          <div className={'fs-1'}> {props.message}</div>
          <FalconCloseButton
            size="sm"
            className="position-absolute top-0 end-0 me-2 mt-2"
            onClick={() => handleCancel()}
          />
        </Card.Header>
        <Card.Body>
          <Row>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col sm={'auto'} className="d-flex pt-2 pt-md-0">
              <Flex>
                <IconButton
                  variant="falcon-success"
                  size="sm"
                  icon="check"
                  transform="shrink-3"
                  className="mx-2"
                  onClick={() => handleCancel()}
                >
                  <span className="d-none d-sm-inline-block ms-1">
                    Complete
                  </span>
                </IconButton>
                <IconButton
                  variant="falcon-default"
                  size="sm"
                  icon="arrow-right"
                  transform="shrink-3"
                  onClick={() => handleCancel()}
                >
                  <span className="d-none d-sm-inline-block ms-1">Next</span>
                </IconButton>
              </Flex>
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
