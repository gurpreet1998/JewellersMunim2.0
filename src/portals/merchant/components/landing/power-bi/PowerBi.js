import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'assets/style.scss';

const PowerBi = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <Row className="flex-between-center">
            <Col xs="auto" sm={8} lg={9}>
              <h5 className="fw-normal text-800 mb-0 text-nowrap py-2 py-xl-0">
                Power BI Report
              </h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <div className="responsive">
            <iframe
              width="1140"
              height="541.25"
              src="https://app.powerbi.com/reportEmbed?reportId=504c886d-153b-4628-85ad-b95aec3761b5&autoAuth=true&ctid=ab52d4e5-9cc7-437a-bdda-f4239e145187&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
              frameBorder="0"
              allowFullScreen="true"
            ></iframe>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PowerBi;
