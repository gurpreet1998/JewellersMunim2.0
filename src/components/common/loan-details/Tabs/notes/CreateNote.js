import React from 'react';
import { Card } from 'react-bootstrap';
import CreateNoteForm from './CreateNoteForm';

const CreateNote = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <Card.Body className="p-0">
        <CreateNoteForm />
      </Card.Body>
    </Card>
  );
};

export default CreateNote;
