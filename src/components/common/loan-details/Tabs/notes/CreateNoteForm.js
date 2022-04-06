import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateNoteForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const initData = {
      id: uuid(),
      content: { status }
    };

    setStatus('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        as="textarea"
        rows={4}
        placeholder="Enter your notes"
        className="shadow-none rounded-0 resize-none border-y-0 px-card border-200"
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <Form.Group
        as={Flex}
        alignItems="center"
        className="ps-card border border-200"
        controlId="hashtag"
      >
        <Form.Label className="text-nowrap mb-0 me-2">
          <FontAwesomeIcon icon="plus" className="me-1 fs--2" />
          <span className="fw-medium fs--1">Tag</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Help the right person to see"
          className="border-0 fs--1 shadow-none"
        />
      </Form.Group>

      <Row className="g-0 mt-3 px-card pb-3 justify-content-end">
        <Col xs="auto">
          <Button size="sm" className="px-4 px-sm-5" type="submit">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateNoteForm;
