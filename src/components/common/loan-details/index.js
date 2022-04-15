import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Card, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { useParams, useHistory } from 'react-router-dom';
import FalconCardHeader from 'components/common/FalconCardHeader';
import ScriptMessage from 'components/common/loan-details/header/ScriptMessage';
import SoftBadge from 'components/common/SoftBadge';
import { LoadingDots } from 'components/loading-spinner/LoadingDots';
import { formatDateStr, loanStatusMap } from 'helpers/utils';
import IconButton from 'components/common/IconButton';
import Flex from 'components/common/Flex';
import LoanChecks from 'components/common/loan-details/header/LoanChecks';
import ValidateCaller from 'components/common/loan-details/header/ValidateCaller';
import UpdateCaller from 'components/common/loan-details/header/UpdateCaller';
import LoanDetailsTab from 'components/common/loan-details/header/LoanDetailsTab';
import {
  useBorrowerVerificationData,
  useLoanDetails
} from 'hooks/useAccountingData';
import { useLoanBucketData } from 'hooks/useLoanData';

const LoanDetails = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue
  } = useForm();

  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [scriptModal, setScriptModal] = useState(false);
  const [selectedScript, setSelectedScript] = useState('');
  const loanParams = useParams();
  const loanId = loanParams.loanId;

  const { isLoading, data: loan } = useLoanDetails(loanId);
  const { data: borrowerVerification } = useBorrowerVerificationData(loanId);
  const { data: bucketData } = useLoanBucketData(loanId);

  const history = useHistory();
  const statusColor = loanStatusMap(loan?.data?.loanStatus);

  const openUpdateComp = () => {
    setModal(false);
    setUpdateModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setUpdateModal(false);
    setScriptModal(false);
  };

  const closeScript = () => {
    setScriptModal(false);
    setModal(false);
  };

  return (
    <div>
      <Card className={'h-lg-100 mb-4 mb-lg-3 fs--1 sticky-header'}>
        <FalconCardHeader
          title={
            <>
              <Row>
                <Flex alignItems="center" className="position-relative">
                  <IconButton
                    className="me-1"
                    variant="falcon-default"
                    size="sm"
                    icon="arrow-left"
                    transform="shrink-4"
                    onClick={history.goBack}
                  >
                    {/*<span className={'d-none d-lg-inline-flex'}>Return</span>*/}
                  </IconButton>
                  {isLoading ? (
                    <LoadingDots color={'#748194'} width={40} height={20} />
                  ) : (
                    <>
                      <div className="ms-1 border-start ps-1 flex-grow-1">
                        <h5 className="fw-medium fs--1 fs-md-0 mb-0 text-600">
                          <span className={'d-none d-lg-inline-flex'}>
                            Loan:&nbsp;
                          </span>
                          {loan?.data?.loanNumber}
                        </h5>
                      </div>
                      <h5 className="text-800 fs-0 fs-md-1 mb-1 fw-semi-bold flex-grow-1">
                        {loan?.data?.borrowerName}
                      </h5>
                    </>
                  )}
                </Flex>
              </Row>
            </>
          }
          endEl={
            <>
              <h5 className="fw-medium fs--1 fs-md-0 mb-0 text-600">
                {/*<span className={'d-none d-lg-inline-flex'}>Status:&nbsp;</span>*/}
                <SoftBadge pill bg={statusColor} className="fs--2 fs-md--1">
                  {isLoading
                    ? 'Loading...'
                    : loan?.data?.loanStatus || 'Not found'}
                  <FontAwesomeIcon
                    icon="exclamation-circle"
                    className="ms-1"
                    transform="shrink-2"
                  />
                </SoftBadge>
              </h5>
            </>
          }
        />
        <Card.Body className="bg-light border-top">
          <Row>
            <Col
              md={6}
              lg={3}
              className="border-0 border-md-end border-md-bottom border-lg-bottom-0"
            >
              <Row className={'d-flex justify-content-center px-2'}>
                <Col sm={10} lg={11}>
                  <div className={'d-flex'}>
                    <p className="fw-semi-bold flex-grow-1 pe-3">Current Due</p>
                    <p>
                      <NumberFormat
                        value={
                          bucketData?.data?.current !== null
                            ? bucketData?.data?.current
                            : 0
                        }
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    </p>
                  </div>
                  <div className={'d-flex'}>
                    <p className="fw-semi-bold flex-grow-1 pe-3">
                      Next Due Date
                    </p>
                    <p>
                      {loan?.data?.nextDueDate !== null
                        ? formatDateStr(loan?.data?.nextDueDate)
                        : 'Not Found'}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              lg={3}
              className="border-0 border-md-bottom border-lg-bottom-0 border-lg-end"
            >
              <Row className={'d-flex justify-content-center px-2'}>
                <Col sm={10} lg={11}>
                  <div
                    className={classNames({
                      'd-none d-md-flex': !loan?.data?.preferredName
                    })}
                  >
                    <p className="fw-semi-bold flex-grow-1 pe-3">
                      Preferred Name
                    </p>
                    <p>
                      {loan?.data?.preferredName !== null ? (
                        loan?.data?.preferredName
                      ) : (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                  </div>
                  <div
                    className={classNames({
                      'd-none d-md-flex':
                        !loan?.data?.authorizedParty !== undefined
                    })}
                  >
                    <p className="fw-semi-bold flex-grow-1 pe-3">
                      Authorized Contact
                    </p>
                    <p>
                      {/* todo: data is not clean, passes blank spaces for authorizedParty
                            loan?.data?.authorizedParty !== null || */}
                      {loan?.data?.authorizedParty !== undefined ? (
                        loan?.data?.authorizedParty
                      ) : (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                      <span className={'ps-1 fs--2 text-500 fst-italic'}>
                        {loan?.data?.authorizedPartyRelated !== undefined
                          ? `(Rel: ${loan?.data?.authorizedPartyRelated})`
                          : ''}
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              lg={3}
              className="border-0 border-md-end pt-0 pt-md-3 pt-lg-0"
            >
              <Row className={'d-flex justify-content-center px-2'}>
                <Col sm={10} lg={11}>
                  <div className={'d-flex'}>
                    <p className="fw-semi-bold flex-grow-1 pe-3">Merchant</p>
                    <p className={'text-truncate'}>
                      {loan?.data?.merchant || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                  </div>
                  <div className={'d-flex'}>
                    <p className="fw-semi-bold flex-grow-1 pe-3">Location</p>
                    <p>
                      {loan?.data?.location || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} lg={3} className={'pt-0 pt-md-3 pt-lg-0'}>
              <Row className={'d-flex justify-content-center px-2'}>
                <Col sm={10} lg={11}>
                  <div
                    className={classNames({
                      'd-none d-md-flex': !loan?.data?.secondaryLoanStatus
                    })}
                  >
                    <p className="fw-semi-bold flex-grow-1 pe-3">
                      Secondary Status
                    </p>
                    <p>
                      {/* todo: still need secondaryLoanStatus in the API */}
                      {loan?.data?.secondaryLoanStatus || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                  </div>
                  <div
                    className={classNames({
                      'd-none d-md-flex': !loan?.data?.nextContactDate
                    })}
                  >
                    <p className="fw-semi-bold flex-grow-1 pe-3">
                      Next Contact Date
                    </p>
                    <p>
                      {loan?.data?.nextContactDate || (
                        <span className={'text-500 fst-italic'}>Not Found</span>
                      )}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <LoanChecks
        setScriptModal={setScriptModal}
        setScript={setSelectedScript}
        setValidateModal={setModal}
        setUpdateModal={openUpdateComp}
      />
      <Row>
        <Col xs={12}>
          {scriptModal ? (
            <ScriptMessage
              show={true}
              closeModal={closeScript}
              message={selectedScript}
            />
          ) : modal ? (
            <ValidateCaller
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              show={true}
              closeModal={closeModal}
              loanId={loanId}
              data={borrowerVerification?.data}
            />
          ) : updateModal ? (
            <UpdateCaller
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              show={true}
              closeModal={closeModal}
              loanId={loanId}
              data={borrowerVerification?.data}
            />
          ) : (
            <LoanDetailsTab loanId={loanId} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LoanDetails;
