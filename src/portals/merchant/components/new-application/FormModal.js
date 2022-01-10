import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from './lottie/warning-light.json';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';

export const FormModal = ({ modal, setModal, notification }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Modal show={modal} centered dialogClassName="wizard-modal">
      <Modal.Body className="p-4">
        <FalconCloseButton
          size="sm"
          className="position-absolute top-0 end-0 me-2 mt-2"
          onClick={() => setModal(!modal)}
        />
        <Flex justifyContent="center" alignItems="center">
          <Lottie options={defaultOptions} style={{ width: '100px' }} />
          <p className="mb-0 flex-1">{notification}</p>
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

export const HardStopModal = ({ hardStop }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Modal show={hardStop} centered dialogClassName="wizard-modal">
      <Modal.Body className="p-4">
        <Flex justifyContent="center" alignItems="center">
          <Lottie options={defaultOptions} style={{ width: '100px' }} />
          <p className="mb-0 flex-1">
            Hard Stop Placeholder. Please Contact (xxx) xxx xxxx
          </p>
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

FormModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  notification: PropTypes.string
};

HardStopModal.propTypes = {
  hardStop: PropTypes.bool.isRequired
};
