import React, { useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { batchData } from 'data/accounting/lockBox';
import SubTitleCard from 'components/common/SubTitleCard';
import BatchDetailsTable from './BatchDetailsTable';
const BatchDetails = () => {
  //   const [batchdetail, setD] = useState([]);
  const location = useLocation();
  console.log('location', location);
  // eslint-disable-next-line no-unused-vars
  //   const [tabData, setTabData] = useState(false);
  let batchId =
    location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log('batchId', batchId);
  let x = 0;
  batchData.filter(item => {
    if (item.batchId == batchId) x = item;
  });
  // const [edit, setEdit] = useState(false);
  // const handleSubmit = e => {
  //   setEdit(false);
  // };
  // const editOnClick = e => {
  //   setEdit(true);
  // };
  // const handleCancel = () => {
  //   setEdit(false);
  // };
  console.log('x', x);
  useEffect(() => {}, []);
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <SubTitleCard title="Lock Box|Post Payment" />
        </Col>
      </Row>
      <Row>
        <Col
          xxl={4}
          sm={6}
          className={'border-bottom border-sm-0 border-xxl-0 border-xxl-end'}
        >
          <Button
            size="sm"
            variant={'falcon-primary'}
            className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
            onClick={() => window.print()}
          >
            Print
          </Button>
        </Col>
        <Col
          xxl={4}
          sm={6}
          className={'border-bottom border-sm-0 border-xxl-0 border-xxl-end'}
        >
          <Button
            size="sm"
            variant={'falcon-primary'}
            className="fs--1 fs-lg--2 fs-xxl--1 px-2 w-50 text-truncate mb-2"
            // onClick={() => editOnClick()}
          >
            Edit
          </Button>
        </Col>
      </Row>
      <Card className={'h-lg-100 mb-4'}>
        <Card.Header>
          <Row className="align-items-center">
            <h4>Batch Details</h4>
          </Row>
        </Card.Header>
        <Card.Body className="bg-light border-top">
          <BatchDetailsTable />
        </Card.Body>
      </Card>
    </>
  );
};

export default BatchDetails;
