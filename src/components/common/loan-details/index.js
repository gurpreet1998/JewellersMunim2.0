import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  const [scriptModal, setScriptModal] = useState(false);
  const [selectedScript, setSelectedScript] = useState('');
  const loanParams = useParams();
  const loanId = loanParams.loanId;

  const { isLoading, data: loan } = useLoanDetails(loanId);
  const { data: borrowerVerification } = useBorrowerVerificationData(loanId);
  const { data: bucketData } = useLoanBucketData(loanId);

  const history = useHistory();
  const statusColor = loanStatusMap(loan?.data?.loanStatus);

  const closeModal = () => {
    setModal(false);
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
              <Row className={'justify-content-md-center'}>
                <Flex alignItems="center" className="position-relative">
                  <IconButton
                    className="me-2 mb-1"
                    variant="falcon-default"
                    size="sm"
                    icon="arrow-left"
                    transform="shrink-4"
                    onClick={history.goBack}
                  >
                    <span className={'d-none d-sm-inline-flex'}>Return</span>
                  </IconButton>

                  {isLoading ? (
                    <LoadingDots color={'#748194'} width={40} height={20} />
                  ) : (
                    <>
                      <Col>
                        <div className="ms-2 border-start ps-2">
                          <h5 className="fw-medium fs--1 mb-0 text-600">
                            <span className={'d-none d-sm-inline-flex'}>
                              Loan Number:&nbsp;
                            </span>
                            {loan?.data?.loanNumber}
                          </h5>
                        </div>
                      </Col>
                      <Col>
                        <div className="">
                          <h5 className="text-800 mb-1 fw-semi-bold text-nowrap">
                            {loan?.data?.borrowerName}
                          </h5>
                        </div>
                      </Col>
                    </>
                  )}
                </Flex>
              </Row>
            </>
          }
          endEl={
            <>
              <h5 className="fw-medium fs--1 mb-0 text-600">
                <span className={'d-none d-sm-inline-flex'}>
                  Loan Status:&nbsp;
                </span>
                <SoftBadge pill bg={statusColor} className="fs--2">
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
              className="mt-0 border-0 border-md-end border-md-bottom border-lg-bottom-0"
            >
              <Row>
                <Col xs={5} sm={4} lg={6}>
                  <p className="fw-semi-bold mb-2">Current Due</p>
                  <p className="fw-semi-bold mb-2 mb-md-3 mb-lg-0">
                    Next Due Date
                  </p>
                </Col>
                <Col>
                  <p className="mb-2">
                    {bucketData?.data?.current !== null ? (
                      <NumberFormat
                        value={bucketData?.data?.current}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    ) : (
                      <NumberFormat
                        value={0}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    )}
                  </p>
                  <p className="mb-2 mb-md-3 mb-lg-0">
                    {loan?.data?.nextDueDate !== null
                      ? formatDateStr(loan?.data?.nextDueDate)
                      : 'Not Found'}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              lg={3}
              className="border-0 border-md-bottom border-lg-bottom-0 border-lg-end"
            >
              <Row>
                <Col xs={5} sm={4} lg={6}>
                  <p className="fw-semi-bold mb-2 text-truncate">
                    Preferred Name
                  </p>
                  <p className="fw-semi-bold mb-2 text-truncate">
                    Authorized Contact
                  </p>
                  <p className="fw-semi-bold mb-2 mb-md-3 mb-lg-0 text-truncate">
                    Relationship
                  </p>
                </Col>
                <Col>
                  <p className="mb-2">
                    {loan?.data?.preferredName !== null
                      ? loan?.data?.preferredName
                      : 'Not Found'}
                  </p>
                  <p className="mb-2">
                    {loan?.data?.authorizedParty !== null
                      ? loan?.data?.authorizedParty
                      : 'Not Found'}
                  </p>
                  <p className="mb-2 mb-md-3 mb-lg-0">
                    {/* todo: API still needed for authorizedPartyRelated */}
                    {loan?.data?.authorizedPartyRelated !== undefined
                      ? loan?.data?.authorizedPartyRelated
                      : 'Not Found'}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6} lg={3} className="border-0 border-md-end">
              <Row className={'mt-md-3 mt-lg-0'}>
                <Col xs={5} sm={4} lg={5} xl={4}>
                  <p className="fw-semi-bold mb-2 text-truncate">Merchant</p>
                  <p className="fw-semi-bold mb-0 text-truncate">Location</p>
                </Col>
                <Col>
                  <p className="mb-2">{loan?.data?.merchant || 'Not Found'}</p>
                  <p className="mb-0">{loan?.data?.location || 'Not Found'}</p>
                </Col>
              </Row>
            </Col>
            <Col md={6} lg={3}>
              <Row className="mt-md-3 mt-lg-0">
                <Col xs={5} sm={4} lg={6}>
                  <p className="fw-semi-bold mb-2 text-truncate">
                    Secondary Status
                  </p>
                  <p className="fw-semi-bold mb-2 text-truncate">
                    Next Contact Date
                  </p>
                </Col>
                <Col>
                  <p className="mb-2">Placeholder</p>
                  <p className="mb-2">Placeholder </p>
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
          ) : (
            <LoanDetailsTab loanId={loanId} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LoanDetails;
