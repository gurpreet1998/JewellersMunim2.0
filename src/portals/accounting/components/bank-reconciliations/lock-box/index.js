import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import SubTitleCard from 'components/common/SubTitleCard';
// import Deposit from './DepositHistory';
import Flex from 'components/common/Flex';
import DepositHistory from './DepositHistory';
import DepositForm from './DepositForm';
import { useForm } from 'react-hook-form';

const lockbox = () => {
  const [deposit, setDeposit] = useState(false);
  // const [modal] = useState(true);
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  const closeModal = () => {
    setDeposit(false);
    console.log('Heyyy');
  };
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <Col md={12}>
            <SubTitleCard title="Lock Box | Deposit" />
          </Col>
        </Col>
        <Flex style={{ display: 'flex', justifyContent: 'right' }}>
          <Button
            size="xm"
            variant={'secondary'}
            className="px-0 ms-1 mb-2 w-0 float-right"
            onClick={() => setDeposit(true)}
          >
            &#43;Register Payment
          </Button>
        </Flex>
        <Col md={12}>
          <Card>
            <Card.Body>
              <DepositHistory />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          {deposit && (
            <DepositForm
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              show={true}
              closeModal={closeModal}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default lockbox;
