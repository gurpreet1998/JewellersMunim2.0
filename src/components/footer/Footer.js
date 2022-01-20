import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { version } from 'config';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-between text-center fs--1 mt-4 mb-3">
      <Col sm="auto">
        <p className="mb-0 text-600">
          Choice Portal <span className="d-none d-sm-inline-block">| </span>
          <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
          <Link to={{ pathname: 'https://choicepays.com' }} target="_blank">
            Choice Payment Services
          </Link>
        </p>
      </Col>
      <Col sm="auto">
        <p className="mb-0 text-600">v{version}</p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
