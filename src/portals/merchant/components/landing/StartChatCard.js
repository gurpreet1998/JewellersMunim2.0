import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import image from 'assets/img/icons/spot-illustrations/chat.svg';
import FalconCloseButton from 'components/common/FalconCloseButton';

const StartChatCard = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <Card className="p-0 rounded-2 position-relative my-3 pt-6">
        <div className="position-absolute" style={{ right: '3px', top: '3px' }}>
          <FalconCloseButton
            size="sm"
            noOutline
            onClick={() => setShow(false)}
          />
        </div>
        <Card.Body className="text-center">
          <img src={image} alt="" width={90} />
          <p className="fs-1 mt-2">Need some help?</p>
          <p className="fs--1 pb-4">
            Chat with one of our customer support team members
          </p>
          <div className="d-grid gap-2 pb-2">
            <Button
              as={'a'}
              href="#"
              target="_blank"
              size="sm"
              className="btn btn-primary"
            >
              Start Chat
            </Button>
          </div>
        </Card.Body>
      </Card>
    )
  );
};

export default StartChatCard;
