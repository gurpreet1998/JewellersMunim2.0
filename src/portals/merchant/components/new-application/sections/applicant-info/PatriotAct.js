import { Alert } from 'react-bootstrap';
import React from 'react';

const PatriotActAlert = () => {
  return (
    <>
      <Alert variant="info">
        <Alert.Heading>
          <div className={'fs-0 text-uppercase'}>
            USA Patriot Act Information Disclosure
          </div>
        </Alert.Heading>
        <p className="fs--1">
          To help the government fight the funding of terrorism and money
          laundering activities, the USA Patriot Act requires all financing
          institutions to obtain, verify and record information that it uses to
          identify each person who opens an account.
        </p>
        <hr />
        <p className="fs--1 mb-0">
          <span className="fw-medium">What this means for you:</span> When you
          open an account, we will ask for your name, physical address, date of
          birth, taxpayer identification number and other information that will
          allow us to identify you. We may also ask to see your driver’s license
          or other identifying information.
        </p>
      </Alert>
    </>
  );
};

export default PatriotActAlert;
