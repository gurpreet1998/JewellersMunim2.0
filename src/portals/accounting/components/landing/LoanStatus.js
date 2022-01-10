import React, { useState, useEffect } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';

import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';

// Data Placeholder
import {
  dailyACHPaymentExceptions,
  dailyCCPaymentExceptions,
  loanStatusTodaysStatements,
  tomorrowsACHs,
  tomorrowsCCDC
} from 'data/accounting/landing';
import { accountingService } from '_services/accounting';
// import { columns } from 'data/accounting/landing';
const AppStatus = () => {
  const [todaysData, setdata] = useState(loanStatusTodaysStatements);
  useEffect(() => {
    accountingService
      .getTodaysStatement(1)
      .then(res => setdata({ ...todaysData, data: res }));
  }, []);
  console.log('D1');
  console.log(todaysData);
  // const [loanData, setLoanData] = useState({ columns: columns, data: data });
  // setLoanData(loanData);
  // console.log('D2');
  // console.log(loanData);
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <Row className="flex-between-center">
            <Col xs="auto" sm={8} lg={9}>
              <h5 className="fw-normal text-800 mb-0 text-nowrap py-2 py-xl-0">
                Loan Status Overview
              </h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-primary`}
                    >
                      <span className={`fs-0 text-primary`}>
                        {todaysData.data.length}
                      </span>
                    </div>
                  </div>
                  Today's Statements
                </Flex>
              </Accordion.Header>

              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={todaysData} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-primary`}
                    >
                      <span className={`fs-0 text-primary`}>
                        {dailyACHPaymentExceptions.data.length}
                      </span>
                    </div>
                  </div>
                  Daily ACH Payment Exceptions
                </Flex>
              </Accordion.Header>

              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={dailyACHPaymentExceptions} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-primary`}
                    >
                      <span className={`fs-0 text-primary`}>
                        {tomorrowsACHs.data.length}
                      </span>
                    </div>
                  </div>
                  Tomorrow's ACHs
                </Flex>
              </Accordion.Header>
              <Accordion.Body>
                <StatusAccordionBody tableData={tomorrowsACHs} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-primary`}
                    >
                      <span className={`fs-0 text-primary`}>
                        {tomorrowsCCDC.data.length}
                      </span>
                    </div>
                  </div>
                  Tomorrow's CC/DC
                </Flex>
              </Accordion.Header>
              <Accordion.Body>
                <StatusAccordionBody tableData={tomorrowsCCDC} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-primary`}
                    >
                      <span className={`fs-0 text-primary`}>
                        {dailyCCPaymentExceptions.data.length}
                      </span>
                    </div>
                  </div>
                  Daily CC Payment Exceptions
                </Flex>
              </Accordion.Header>
              <Accordion.Body>
                <StatusAccordionBody tableData={dailyCCPaymentExceptions} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default AppStatus;
