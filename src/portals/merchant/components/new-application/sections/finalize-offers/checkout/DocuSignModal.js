import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';

const DocuSignModal = ({ modal, setModal }) => {
  return (
    <Modal show={modal} fullscreen={true} centered>
      <Modal.Body className="p-4">
        <FalconCloseButton
          size="sm"
          className="position-absolute top-0 end-0 me-2 mt-2"
          onClick={() => setModal(!modal)}
        />
        <Flex justifyContent="center" alignItems="center">
          <p className="mb-0 flex-1">Placeholder for Docusign Contract</p>
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

DocuSignModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
};

export default DocuSignModal;
