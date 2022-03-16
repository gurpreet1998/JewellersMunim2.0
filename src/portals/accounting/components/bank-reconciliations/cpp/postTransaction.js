import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import FalconCloseButton from 'components/common/FalconCloseButton';
const PostTransaction = ({ show, closeModal }) => {
  const handleCloseTransaction = () => {
    closeModal();
  };
  const handlePostTransaction = () => {
    toast.success('Post Successful');
    console.log('Post Successful');
  };

  // depositService.savePostTransaction(bank).then(res => {
  //   if (res.result === 'Please try again') {
  //     toast.warning(res.result);
  //   } else {
  //     toast.success(res.result);
  //   }
  // });

  return (
    <>
      <Modal
        show={show}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="example-modal-sizes-title-xs"
        centered
      >
        <Modal.Header>
          <FalconCloseButton
            size="sm"
            className="position-absolute end-0 me-2 mt-2 mb-2"
            onClick={() => handleCloseTransaction()}
          />
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Post 
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="ml-3">
          <Row className="fs--1 fs-xxl--1 px-2 text-truncate mb-5">
            <Col>Do you want to Post all transactions?</Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant={'falcon-danger'}
                className="fs--1 fs-lg--2 fs-xxl--1 px-20 text-truncate mb-2"
                onClick={() => handleCloseTransaction()}
              >
                Cancel
              </Button>
            </Col>
            <Col>
              <Link to="/portal/accounting/home">
                <Button
                  variant={'falcon-success'}
                  className="fs--1 fs-lg--2 fs-xxl--1 px-20 text-truncate mb-2"
                  onClick={() => handlePostTransaction()}
                >
                  Post Transaction
                </Button>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => handlePostTransaction()}>Cancel</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
PostTransaction.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func
};
export default PostTransaction;
