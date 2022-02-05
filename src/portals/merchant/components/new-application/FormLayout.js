import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col, Card, Form, Nav, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import IconButton from 'components/common/IconButton';
import Flex from 'components/common/Flex';
import DisclosuresForm from './sections/disclosures';
import ApplicantInfo from './sections/applicant-info';
import Offers from './sections/finalize-offers/offer/Offers';
import OfferProvider from './sections/finalize-offers/OfferProvider';
import FinalizeLoan from './sections/finalize-offers/checkout/FinalizeLoan';
import ServiceDateForm from './sections/service-date/ServiceDate';
import { FormModal } from './FormModal';
import HardStopModal from './HardStop';
import { NewApplicationContext } from 'context/Context';
import { userService, serviceDate, Disclosure } from '_services/userService';

const FormLayout = ({ variant, validation, progressBar }) => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser, step, setStep, servicedata, paymentdata } = useContext(
    NewApplicationContext
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors
  } = useForm();

  const [modal, setModal] = useState(false);
  const [hardStop, setHardStop] = useState(false);
  const [loanAppId, setLoanAppId] = useState(0);

  const navItems = [
    {
      icon: 'user',
      label: 'Applicant Info'
    },
    {
      icon: 'calendar-alt',
      label: 'Service Date'
    },
    {
      icon: 'exclamation',
      label: 'Disclosures'
    },
    {
      icon: 'handshake',
      label: 'Offers'
    },
    {
      icon: 'file-signature',
      label: 'Finalize'
    }
  ];

  const onSubmitData = data => {
    if (step === 1) {
      setUser({ ...user, ...data });
      userService
        .saveUserDetail(data)
        .then(res => {
          if (res.result === 'HardStop') {
            setHardStop(true);
          } else {
            setLoanAppId(res.result);
          }
        })
        .catch(err => console.log('ERROR:', err));
    } else if (step === 2) {
      setUser({ ...servicedata, ...data });
      serviceDate.saveServiceDetail(data, loanAppId);
    } else if (step === 3) {
      Disclosure.saveDisclosure(loanAppId);
    }
    setStep(step + 1);
  };

  const onError = () => {
    if (!validation) {
      clearErrors();
      setStep(step + 1);
    }
  };

  const toggle = () => setModal(!modal);

  const handleNavs = targetStep => {
    if (step !== 4) {
      if (targetStep < step) {
        setStep(targetStep);
      } else {
        handleSubmit(onSubmitData, onError);
      }
    } else {
      toggle();
    }
  };

  return (
    <>
      <FormModal
        modal={modal}
        setModal={setModal}
        notification={
          'Please select an offer to continue with the New Application process'
        }
      />
      <HardStopModal hardStop={hardStop} setValue={setValue} />

      <Card
        as={Form}
        noValidate
        onSubmit={handleSubmit(onSubmitData, onError)}
        className="theme-wizard mb-5"
      >
        <fieldset disabled={hardStop}>
          <Card.Header
            className={classNames('bg-light', {
              'px-4 py-3': variant === 'pills',
              'pb-2': !variant
            })}
          >
            <Nav className="justify-content-center" variant={variant}>
              {variant === 'pills'
                ? navItems.map((item, index) => (
                    <NavItemPill
                      key={item.label}
                      index={index + 1}
                      step={step}
                      handleNavs={handleNavs}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))
                : navItems.map((item, index) => (
                    <NavItem
                      key={item.label}
                      index={index + 1}
                      step={step}
                      handleNavs={handleNavs}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))}
            </Nav>
          </Card.Header>

          {progressBar && <ProgressBar now={step * 25} style={{ height: 2 }} />}

          <Card.Body
            className={classNames('fw-normal px-md-6 py-4', {
              'd-none': step === 4 || step === 5
            })}
          >
            {step === 1 && (
              <ApplicantInfo
                register={register}
                setValue={setValue}
                errors={errors}
                watch={watch}
              />
            )}
            {step === 2 && (
              <ServiceDateForm
                register={register}
                errors={errors}
                setValue={setValue}
              />
            )}
            {step === 3 && (
              <DisclosuresForm register={register} errors={errors} />
            )}
          </Card.Body>

          {/* On Step 4 - card above is hidden & replaced w/ `Offers` card */}
          {(step === 4 || step === 5) && (
            <OfferProvider loanAppId={loanAppId}>
              {step === 4 && <Offers />}

              {step === 5 && <FinalizeLoan loanApplicationId={loanAppId} />}
            </OfferProvider>
          )}
          {/* Hide card navigation footer for step navigation on steps 4 and 5 */}
          <Card.Footer
            className={classNames('px-md-6 bg-light', {
              'd-none': step === 4 || step === 5,
              'd-flex': step !== 4 || step !== 5
            })}
          >
            <Col className={'d-flex justify-content-start'}>
              <IconButton
                variant="link"
                icon="chevron-left"
                iconAlign="left"
                transform="down-1 shrink-4"
                className={classNames('px-0 fw-semi-bold', {
                  'd-none': step === 1
                })}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Prev
              </IconButton>
            </Col>
            <Col className={'d-flex justify-content-end'}>
              <IconButton
                variant="falcon-primary"
                className="px-3 me-2"
                icon="save"
                type="button"
                iconAlign="right"
              >
                Save
              </IconButton>
              <IconButton
                variant="primary"
                className="px-5"
                type="submit"
                icon="chevron-right"
                iconAlign="right"
                transform="down-1 shrink-4"
              >
                Next
              </IconButton>
            </Col>
          </Card.Footer>
        </fieldset>
      </Card>
    </>
  );
};

const NavItem = ({ index, step, handleNavs, icon, label }) => {
  return (
    <Nav.Item>
      <Nav.Link
        className={classNames('fw-semi-bold', {
          done: index < 5 ? step > index : step > 4,
          active: step === index
        })}
        onClick={() => handleNavs(index)}
      >
        <span className="nav-item-circle-parent">
          <span className="nav-item-circle">
            <FontAwesomeIcon icon={icon} />
          </span>
        </span>
        <span className="d-none d-md-block mt-1 fs--1">{label}</span>
      </Nav.Link>
    </Nav.Item>
  );
};

const NavItemPill = ({ index, step, handleNavs, icon, label }) => {
  return (
    <Nav.Item>
      <Nav.Link
        className={classNames('fw-semi-bold', {
          done: step > index,
          active: step === index
        })}
        onClick={() => handleNavs(index)}
      >
        <Flex alignItems="center" justifyContent="center">
          <FontAwesomeIcon icon={icon} />
          <span className="d-none d-md-block mt-1 fs--1 ms-2">{label}</span>
        </Flex>
      </Nav.Link>
    </Nav.Item>
  );
};

FormLayout.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

NavItemPill.propTypes = {
  index: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  handleNavs: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

NavItem.propTypes = NavItemPill.propTypes;

export default FormLayout;
