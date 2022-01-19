import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import SubTitleCard from 'components/common/SubTitleCard';
// import Deposit from './DepositHistory';
import Flex from 'components/common/Flex';
import DepositHistory from './DepositHistory';
import DepositForm from './DepositForm';
import { useForm } from 'react-hook-form';

const lockbox = () => {
  // const [deposit, setDeposit] = useState(false);
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
    setValue
    // clearErrors
  } = useForm();
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <Col md={12}>
            <SubTitleCard
              title="Lock Box | Deposit"
              // endEl={
              // }
            />
          </Col>
        </Col>
        <Flex style={{ display: 'flex', justifyContent: 'right' }}>
          <Button
            size="xm"
            variant={'secondary'}
            className="px-0 ms-1 mb-2 w-0 float-right"
            // onClick={}
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
          <Card>
            <DepositForm
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default lockbox;
