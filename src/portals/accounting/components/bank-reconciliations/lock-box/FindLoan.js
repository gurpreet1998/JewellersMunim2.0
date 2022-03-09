import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import PostPayment from './PostPayment';
import Select from 'react-select';
import { loanData } from 'data/accounting/lockBox';
import FalconCloseButton from 'components/common/FalconCloseButton';
const FindLoan = ({ show, closeModal }) => {
  const options = [
    { value: 'L10000003', label: 'L10000003' },
    { value: 'TRN010109571', label: 'TRN010109571' },
    { value: 'CH349008', label: 'CH349008' },
    { value: 'L10000004', label: 'L10000004' },
    { value: 'TRN010157204', label: 'TRN010157204' }
  ];
  const [TRN, setTRN] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [data, setData] = useState(TRN);
  const handleFindLoan = () => {
    closeModal();
  };

  useEffect(() => {
    if (TRN != '') {
      loanData.filter(item => {
        if (item.loanNumber == TRN) {
          setData(item);
        }
      });
    }
    console.log('Data', data);
  }, [TRN]);

  const handlePostPayment = () => {
    setShowPayment(!showPayment);
  };

  const handleKeyPress = e => {
    setTRN(e.value);
    if (TRN != '') {
      setShowPayment(true);
    }
  };
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
            className="position-absolute top-0 end-0 me-2 mt-2"
            onClick={() => handleFindLoan()}
          />
          <Modal.Title id="contained-modal-title-vcenter">
            Find Loan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="ml-3">
          <Row xs={3}>
            <Col xs={6} lg={6}>
              <Select
                options={options}
                onChange={e => handleKeyPress(e)}
                placeholder={'TRN...'}
              />
            </Col>
            {showPayment && (
              <PostPayment
                show={showPayment}
                closeModal={handlePostPayment}
                data={data}
              />
            )}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleFindLoan()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
FindLoan.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func
};
export default FindLoan;
