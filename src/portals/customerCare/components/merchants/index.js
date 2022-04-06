import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import editing from 'assets/img/icons/spot-illustrations/21.png';

const Merchants = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col>
          <Card>
            <Card.Header>
              <h5 className="fw-normal text-800 mb-0">Merchants</h5>
            </Card.Header>
            <Card.Body className="overflow-hidden p-lg-6">
              <Row className="align-items-center justify-content-between">
                <Col lg={6}>
                  <img src={editing} className="img-fluid" alt="" />
                </Col>
                <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-start">
                  <h3 className="text-primary">Placeholder!</h3>
                  <p className="lead">Merchants Page.</p>
                  {/* <a
                    target="_blank"
                    href="https://app.powerbi.com/reportEmbed?reportId=a584f36d-9544-4e8a-be2b-c4e13ca8cf57&autoAuth=true&ctid=ab52d4e5-9cc7-437a-bdda-f4239e145187&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D%22"
                  >
                    <Button>LInkk</Button>{' '}
                  </a> */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Merchants;
