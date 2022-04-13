import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap';
import IconButton from '../../IconButton';
import CardDropdown from '../../CardDropdown';
import Flex from '../../Flex';

import { selectScriptData } from '../../../../data/accounting/loandetails';

const LoanChecks = props => {
  return (
    <>
      <Card className="bg-light">
        <Card.Body className="p-3">
          <Row className="flex-between-center g-0">
            <Col sm={'auto'} className="d-flex ps-2">
              <Form.Check
                type="checkbox"
                id="autoPayStatus"
                className="mb-0 d-flex"
              >
                <Form.Check.Input
                  type="checkbox"
                  className="form-check-input-primary"
                  disabled
                  defaultChecked
                />
                <Form.Check.Label className="ps-2 fs--2 text-600 mb-0">
                  Auto Pay
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col sm={'auto'} className="d-flex">
              <Form.Check
                type="checkbox"
                id="alertStatus"
                className="mb-0 d-flex"
              >
                <Form.Check.Input
                  type="checkbox"
                  className="ms-2 form-check-input-primary opacity-75"
                  disabled
                  defaultChecked
                />
                <Form.Check.Label className="ps-2 fs--2 text-600 mb-0">
                  Alerts
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col sm={'auto'} className="d-flex">
              <Form.Check
                type="checkbox"
                id="openDisputesStatus"
                className="mb-0 d-flex"
              >
                <Form.Check.Input
                  type="checkbox"
                  className="ms-2 form-check-input-primary opacity-75"
                  disabled
                  defaultChecked
                />
                <Form.Check.Label className="ps-2 fs--2 text-600 mb-0 text-nowrap">
                  Open Complaints & Disputes
                </Form.Check.Label>
              </Form.Check>
            </Col>

            <Col sm={'auto'} className="d-flex">
              <Form.Check
                type="checkbox"
                id="ceaseDesistStatus"
                className="mb-0 d-flex"
              >
                <Form.Check.Input
                  type="checkbox"
                  className="ms-2 form-check-input-primary opacity-75"
                  disabled
                  defaultChecked
                />
                <Form.Check.Label className="ps-2 fs--2 text-600 mb-0">
                  Cease & Desist
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col sm={'auto'} className="d-flex">
              <Form.Check
                type="checkbox"
                id="doNotCallStatus"
                className="mb-0 d-flex pe-3 border-lg-end border-end-lg-0"
              >
                <Form.Check.Input
                  type="checkbox"
                  className="ms-2 form-check-input-primary opacity-75"
                  disabled
                  defaultChecked
                />
                <Form.Check.Label className="ps-2 fs--2 text-600 mb-0">
                  Do Not Call
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col sm={'auto'} className="d-flex pt-2 pt-md-0">
              <Flex>
                <IconButton
                  variant="falcon-default"
                  size="sm"
                  icon="check"
                  transform="shrink-3"
                  className="mx-2"
                  onClick={() => props.setValidateModal(true)}
                >
                  <span className="d-none d-sm-inline-block ms-1">
                    Validate
                  </span>
                </IconButton>
                <IconButton
                  variant="falcon-default"
                  size="sm"
                  icon="check"
                  transform="shrink-3"
                  className="mx-2"
                  onClick={() => props.setUpdateModal()}
                >
                  <span className="d-none d-sm-inline-block ms-1">Update</span>
                </IconButton>
                <CardDropdown
                  iconClassName="fs--1"
                  btnRevealClass={'text-800 btn-sm btn-falcon-default'}
                  variant={'btn'}
                  icon={'microphone-alt'}
                  size={'sm'}
                  transform="shrink-3"
                  btnText={
                    <div className={'d-none d-sm-inline-flex'}>Scripts</div>
                  }
                >
                  <div className="py-2">
                    <div className={'ps-3 fs--1 text-700 fw-medium'}>
                      Select Script
                    </div>
                    <Dropdown.Divider as="div" />
                    {selectScriptData.map(item => (
                      <Dropdown.Item
                        key={item.key}
                        onClick={e => {
                          props.setScriptModal(true);
                          props.setScript(e.target.text);
                        }}
                      >
                        {item.value}
                      </Dropdown.Item>
                    ))}
                  </div>
                </CardDropdown>
              </Flex>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

LoanChecks.propTypes = {
  setValidateModal: PropTypes.any,
  setScriptModal: PropTypes.any,
  setUpdateModal: PropTypes.any,
  setScript: PropTypes.any
  // loanId: PropTypes.number
};

export default LoanChecks;
