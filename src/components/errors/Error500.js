import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error500 = () => (
  <Card className="text-center h-100">
    <Card.Body className="p-5">
      <div className="display-1 text-300 fs-error">500</div>
      <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
        Whoops, something went wrong!
      </p>
      <hr />
      <p>
        Try refreshing the page, or going back and attempting the action again.
        If this problem persists,
        {/*todo: update with correct email */}
        <Link
          className="ms-1"
          to={{ pathname: 'mailto:info@exmaple.com' }}
          target="_blank"
        >
          contact us
        </Link>
        .
      </p>
    </Card.Body>
  </Card>
);

export default Error500;
