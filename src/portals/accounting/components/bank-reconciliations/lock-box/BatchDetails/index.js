import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TitleCard from 'components/common/TitleCard';
import { batchData } from 'data/accounting/lockBox';
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
  console.log('x', x);
  useEffect(() => {}, []);
  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <TitleCard title="Batch details" />
        </Col>
      </Row>

      <Card className={'h-lg-100 mb-4'}>
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h5 className="mb-0 fs-1">Batch Number: {batchId}</h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="bg-light border-top">
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">Batch Name: {x.batchName}</h6>
            </Col>
            <Col>
              <h6 className="mb-0 fs-1">Deposit Date: {x.depositDate}</h6>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">Batch Amount: {x.batchAmount}</h6>
            </Col>
            <Col>
              <h6 className="mb-0 fs-1">Batch Status: {x.batchStatus}</h6>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-0 fs-1">Batch Type: {x.batchType}</h6>
            </Col>
            <Col>
              <h6 className="mb-0 fs-1">Created by: {x.createdBy}</h6>
            </Col>
          </Row>
          <Row className="align-items-center">
            <h6 className="mb-0 fs-1"> Batch Owner: {x.batchOwner}</h6>
          </Row>
        </Card.Body>
      </Card>
      {/* <Col md={12}>{!tabData && <DTab loanId={loanId} />}</Col> */}
    </>
  );
};

export default BatchDetails;
