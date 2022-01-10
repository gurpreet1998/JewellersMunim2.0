import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Section from 'components/common/Section';
import Logo from 'components/common/Logo';
import NewApplication from './NewApplication';
import AltNavbarTop from 'components/navbar/alt/AltNavbarTop';

const NewApplicationWizard = () => {
  return (
    <Section className="py-0">
      <AltNavbarTop />
      <Row className="flex-center min-vh-75 py-6">
        <Col sm={11} md={10} className="col-xxl-9">
          <Logo width={220} />
          <NewApplication validation={true} />
        </Col>
      </Row>
    </Section>
  );
};

export default NewApplicationWizard;
