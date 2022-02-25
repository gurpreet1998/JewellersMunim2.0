import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SubTitleCard from 'components/common/SubTitleCard';
// import { useForm } from 'react-hook-form';
import BatchAccordion from './BatchAccordion';
import BatchHistory from './BatchHistory';
const lockbox = () => {
  // const {
  //   register,
  //   // handleSubmit,
  //   formState: { errors },
  //   watch,
  //   setValue
  //   // clearErrors
  // } = useForm();

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <Col md={12}>
            <SubTitleCard title="Lock Box | Post Payments" />
          </Col>
        </Col>
        <Col md={12}>
          {/* <DepositForm
            register={register}
            setValue={setValue}
            errors={errors}
            watch={watch}
            show={true}
          /> */}
          <BatchAccordion />
          <BatchHistory></BatchHistory>
        </Col>
      </Row>
    </>
  );
};

export default lockbox;
