import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import TooltipBadge from 'components/common/TooltipBadge';
import FalconCloseButton from 'components/common/FalconCloseButton';
import Flex from 'components/common/Flex';
import FalconDropzone from 'components/common/FalconDropzone';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import animationData from './lottie/warning-light.json';

import { isIterableArray } from 'helpers/utils';

export const FileUploadModal = ({
  dropzoneModal,
  setDropzoneModal,
  setValue
}) => {
  const [image, setImage] = useState([]);

  return (
    <Modal show={dropzoneModal} centered dialogClassName="upload-id-modal">
      <Modal.Body className="p-4">
        <FalconCloseButton
          size="sm"
          className="position-absolute top-0 end-0 me-2 mt-2"
          onClick={() => setDropzoneModal(!dropzoneModal)}
        />
        <Flex justifyContent="center" alignItems="center">
          <FalconDropzone
            files={image}
            onChange={files => {
              setImage(files);
              setValue('image', files);
            }}
            multiple={false}
            accept="image/*, .pdf"
            placeholder={
              <>
                <div className={'my-6'}>
                  {image.length !== 0 ? (
                    <img
                      width={100}
                      alt=""
                      className="me-2 py-4"
                      src={
                        isIterableArray(image)
                          ? image[0]?.base64 || image[0]?.src
                          : ''
                      }
                    />
                  ) : (
                    <img
                      src={cloudUpload}
                      alt=""
                      width={100}
                      className="me-2"
                    />
                  )}
                  <Row justifyContent="center">
                    <p className="fs-0 mb-2 text-700">
                      Drag and drop or click to add an image of the consumer's
                      I.D.
                    </p>
                    <p className="fs--2 mb-4 text-danger text-uppercase">
                      Please DO NOT upload images of Military IDs
                    </p>
                  </Row>
                  <p className="mb-0 w-75 mx-auto text-400">
                    Upload an image file (.jpg, .png, etc...) or a pdf document.
                  </p>
                </div>
              </>
            }
          />
        </Flex>
      </Modal.Body>
      <Modal.Footer>
        {/* todo: handle onClick so customer service can see image */}
        <Button
          size={'sm'}
          variant="falcon-primary"
          onClick={() => setDropzoneModal(!dropzoneModal)}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const HardStopFooter = ({
  btnRevealClass,
  dropzoneModal,
  setDropzoneModal,
  reviewCode = 'O'
}) => {
  let message =
    "Sometimes Choice needs a copy of the consumer's I.D. to speed up this process. We will ask for this if necessary.";

  return (
    <Card.Footer className="bg-light py-2">
      <Row className="flex-between-center">
        <Col xs="auto">
          <Link className="fs--1 font-sans-serif" to="#!">
            Review Code: {reviewCode}
          </Link>
        </Col>
        <Col xs="auto">
          <Dropdown
            className="font-sans-serif btn-reveal-trigger"
            align="end"
            drop={'up'}
          >
            <Dropdown.Toggle
              variant="falcon-secondary"
              size="sm"
              data-boundary="viewport"
              className={classNames('text-600', 'fs--1', {
                [btnRevealClass]: btnRevealClass,
                'btn-reveal': !btnRevealClass
              })}
            >
              Upload I.D.
              <TooltipBadge tooltip={message} icon="question-circle" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="border py-0">
              <div className="py-2">
                <Dropdown.Item
                  type="button"
                  onClick={() => setDropzoneModal(!dropzoneModal)}
                >
                  Upload a Saved File
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Use Device Camera</Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Card.Footer>
  );
};

const HardStopModal = ({ hardStop, setValue }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [dropzoneModal, setDropzoneModal] = useState(false);

  return (
    <>
      <FileUploadModal
        dropzoneModal={dropzoneModal}
        setDropzoneModal={setDropzoneModal}
        setValue={setValue}
      />

      <Modal
        className="text-center"
        show={hardStop}
        centered
        dialogClassName="contact-us-modal"
      >
        <Modal.Body className="p-4 ">
          <Lottie options={defaultOptions} style={{ width: '100px' }} />
          <p className="lead mt-2 text-700 font-sans-serif fw-semi-bold">
            Sorry! We Need Some More Information.
          </p>
          <hr />
          <p>
            Something needs to be clarified and/ or verified before you can
            proceed.
          </p>{' '}
          <p>
            Please contact Choice Payment Services' Customer Service team at
            <Link
              className="ms-1"
              to={{ pathname: 'tel:8888749940' }}
              target="_blank"
            >
              (888) 874 9940
            </Link>
            .
          </p>
          <Link className="btn btn-primary btn-sm mt-3" to="/">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Take me home
          </Link>
        </Modal.Body>
        <HardStopFooter
          dropzoneModal={dropzoneModal}
          setDropzoneModal={setDropzoneModal}
        />
      </Modal>
    </>
  );
};

FileUploadModal.propTypes = {
  dropzoneModal: PropTypes.bool.isRequired,
  setDropzoneModal: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired
};

HardStopFooter.propTypes = {
  btnRevealClass: PropTypes.string,
  reviewCode: PropTypes.string,
  dropzoneModal: PropTypes.bool.isRequired,
  setDropzoneModal: PropTypes.func.isRequired
};

HardStopModal.propTypes = {
  hardStop: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired
};

export default HardStopModal;
