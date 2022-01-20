import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';
import FormInput from '../../FormInput';

const ESignConsent = ({ register, errors }) => {
  return (
    <>
      <div className={'pb-2 h5 fs-0'}>eSign Consent:</div>
      <SimpleBarReact
        className={'border border-500 bg-100 rounded-1 px-3 py-2'}
        style={{ maxHeight: '14rem' }}
      >
        <div className={'h6'}>Choice Payment Services, Inc. E-Sign Consent</div>
        <div className={'fs--1 pt-1 mb-2'}>
          Choice Payment Services, Inc. and its affiliates and third-party
          service providers (“Choice”) may need to provide you with certain
          communications, notices, agreements, billing statements, or
          disclosures in writing (“Communications”) regarding our Services. Your
          agreement to this E-sign Consent confirms your ability and consent to
          receive Communications electronically from Choice, its affiliates, and
          its third-party service providers, rather than in paper form, and to
          the use of electronic signatures in our relationship with you
          (“Consent”). If you choose not to agree to this Consent or you
          withdraw your consent, you may be restricted from using the Services.
        </div>
        <div className={'h6'}>
          Electronic Delivery of Communications and Use of Electronic Signatures
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          Under this Consent, Choice may provide all Communications
          electronically by email, by text message, or by making them accessible
          via Choice websites or applications. Communications include, but are
          not limited to, (1) agreements, notices and disclosures required by
          law (e.g. this Consent, the Choice Privacy Notice, your Retail
          Installment Agreement, any regulatory required notices and
          disclosures), (2) payment authorizations and transaction receipts or
          confirmations, (3) periodic statements and history, (4) and all
          federal and state tax statements and documents. We may also use
          electronic signatures and obtain them from you.
        </div>
        <div className={'h6'}>System Requirements</div>
        <div className={'fs--1 pt-1 mb-2'}>
          To access and retain the electronic Communications, you will need the
          following:
          <ul>
            <li>
              A computer or mobile device with Internet or mobile connectivity.
            </li>
            <li>
              For desktop website-based Communications:
              <ul>
                <li>Recent web browser that includes 256-bit encryption;</li>
                <li>
                  The browser must have cookies enabled. Use of browser
                  extensions may impair full website functionality; and
                </li>
                <li>
                  {' '}
                  Minimum recommended browser standards are the most recent
                  versions of Mozilla Firefox (see{' '}
                  <Link
                    to={{ pathname: 'https://www.mozilla.com' }}
                    target="_blank"
                  >
                    https://www.mozilla.com
                  </Link>{' '}
                  for latest version), Apple Safari (see{' '}
                  <Link
                    to={{ pathname: 'https://www.apple.com/safari' }}
                    target="_blank"
                  >
                    https://www.apple.com/safari
                  </Link>{' '}
                  for latest version), or Google Chrome (see{' '}
                  <Link
                    to={{ pathname: 'https://www.google.com/chrome' }}
                    target="_blank"
                  >
                    https://www.google.com/chrome
                  </Link>{' '}
                  for latest version).
                </li>
              </ul>
            </li>
            <li>
              For application-based Communications:
              <ul>
                <li>
                  A recent device operating system that supports text messaging,
                  downloading, and applications from the Apple App Store or
                  Google Play store; and
                </li>
                <li>
                  The most recent versions of Apple Safari or Google Chrome on
                  iOS or Google Chrome for Android OS.
                </li>
              </ul>
            </li>
            <li>
              Access to the email address used to create an account for Choice
              Payment Services, Inc.
            </li>
            <li>
              Sufficient storage space to save Communications and/or a printer
              to print them.
            </li>
          </ul>
        </div>
        <div className={'h6'}>Changes to Hardware or Software Requirements</div>
        <div className={'fs--1 pt-1 mb-2'}>
          If our hardware or software requirements change, and that change would
          create a material risk that you would not be able to access or retain
          your Electronic Records, we will give you notice of the revised
          hardware and/or software requirements. Continuing to use Electronic
          Services after receiving notice of the change is reaffirmation of your
          consent.
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          If you cannot accommodate the new hardware or software requirements
          you will be able to withdraw from utilizing electronic communications,
          disclosures and other processes covered by this consent at no charge.
          Furthermore, you will be able to access all of these documents through
          paper delivery of the communications. Should you obtain newer hardware
          or software equipment at a later time that will allow you to utilize
          our electronic communication services, you will be required to renew
          your consent at that time.
        </div>
        <div className={'h6'}>Paper Delivery of Communications</div>
        <div className={'fs--1 pt-1 mb-2'}>
          You have the right to receive Communications in paper form. To request
          a paper copy of any Communication at no charge, please write to Choice
          Payment Services, Inc., 224 West Washington, Suite 103 Sequim, WA
          98382, Attn: Customer Support - Legal (“Choice Address”) within 180
          days of the date of the Disclosure, specifying in detail the
          Communication you would like to receive. For the avoidance of doubt,
          requesting a paper copy of any Communication, in and of itself, will
          not be treated as withdrawal of consent to receive electronic
          Communications.
        </div>
        <div className={'h6'}>
          Withdrawal of Consent to Electronic Communications
        </div>
        <div className={'fs--1 pt-1 mb-2'}>
          You may withdraw your consent to receive electronic Communications at
          any time, by writing to the Choice Address above. Any withdrawal of
          your consent will be effective after a reasonable period of time for
          processing your request, and Choice will confirm your withdrawal of
          consent and its effective date in writing (either electronically or in
          paper form).
        </div>
        <div className={'h6'}>Updating Your Email Address</div>
        <div className={'fs--1 pt-1 mb-2'}>
          You can change your email address by writing to the Choice Address.
          You may also be able to change your email address yourself through our
          consumer portal.
        </div>
      </SimpleBarReact>
      <h5 className="me-3 pt-3 fs--1">
        I Confirm that I have read the eSign Consent:
      </h5>
      <FormInput
        type="checkbox"
        label="I Agree"
        errors={errors}
        name="agreedToTerms4"
        formControlProps={{
          ...register('agreedToTerms4', {
            required:
              'You need to confirm you have read the eSign consent to continue.'
          })
        }}
      />
    </>
  );
};

ESignConsent.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default ESignConsent;
