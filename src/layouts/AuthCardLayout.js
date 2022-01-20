import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import Background from 'components/common/Background';
import Flex from 'components/common/Flex';
import Section from 'components/common/Section';

import halfCircle from 'assets/img/shapes/half-circle.svg';
import Logo from '../components/common/Logo';

const AuthCardLayout = ({ leftSideContent, children, footer = true }) => {
  return (
    <Section fluid className="py-0">
      <Row className="g-0 min-vh-100 flex-center">
        <Col lg={10} xl={9} xxl={7} className="py-3 px-4 position-relative">
          <Card className="overflow-hidden z-index-1">
            <Card.Body className="p-0">
              <Row className="h-100 g-0 login-card-shadow">
                <Col md={5} className="text-white text-center bg-200">
                  <div className="position-relative p-4 pt-md-5 pb-md-7">
                    <Background
                      image={halfCircle}
                      className="bg-auth-card-shape"
                    />
                    <div className="z-index-1 position-relative dark">
                      <Logo className={'py-0 py-md-4'} width={180} />
                      <h4 className="fs-1 fs-sm-2 fs-md-1 fs-lg-2 text-600 mb-0">
                        Empowering{' '}
                        <span className={'text-primary'}>Choice</span> in
                        Consumer Lending
                      </h4>
                    </div>
                  </div>
                  <div className="mb-4 mt-md-4 mb-md-5">
                    {leftSideContent}

                    {footer && (
                      <p className="mb-0 mt-1 mt-md-5 fs--1 fw-semi-bold text-600 opacity-75 d-none d-md-block">
                        Read our{' '}
                        <Link
                          className="text-decoration-underline text-700"
                          to={{
                            pathname:
                              'https://choicepayments.wpengine.com/wp-content/uploads/2022/01/20220112_Website-Privacy-Policy-and-Terms-of-Use_v2.pdf'
                          }}
                          target="_blank"
                        >
                          terms & conditions
                        </Link>
                      </p>
                    )}
                  </div>
                </Col>
                <Col
                  md={7}
                  as={Flex}
                  alignItems="center"
                  justifyContent="center"
                >
                  <div className="p-4 p-md-5 flex-grow-1">{children}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};

AuthCardLayout.propTypes = {
  leftSideContent: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool
};

export default AuthCardLayout;
