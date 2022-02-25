import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
// import Flex from 'components/common/Flex';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
import {
  batchData1,
  batchData2,
  batchData3
} from '../../../../../data/accounting/lockBox';
import { Link } from 'react-router-dom';
let checkSum1 = 0;
let checkSum2 = 0;
let checkSum3 = 0;
let cashSum1 = 0;
let cashSum2 = 0;
let cashSum3 = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
const BatchHistory = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <Row className="flex-between-center">
            <Col xs="auto" sm={8} lg={9}>
              <h5 className="fw-normal text-800 mb-0 text-nowrap py-2 py-xl-0">
                Batch History
              </h5>
            </Col>
            <Col>
              <Link>Today's Batch</Link>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {/* <Flex className="align-items-center">Batch 1</Flex>
                 */}
                <Col>
                  Batch - 20220116-Cash/Money1-{batchData1.data[0].createdBy}
                </Col>
                <Col>
                  Checks &nbsp;
                  {
                    ('Batch',
                    batchData1.data.filter(data => data.paymentType === 'Check')
                      .length)
                  }
                  &nbsp; / $
                  {batchData1.data.filter(data => {
                    if (data.paymentType === 'Check') {
                      checkSum1 += data.paymentAmount;
                    }
                  })}
                  &nbsp;
                  {checkSum1.toPrecision(7)}
                </Col>
                <Col>
                  Cash &nbsp;
                  {
                    batchData1.data.filter(data => data.paymentType === 'Cash')
                      .length
                  }
                  &nbsp; /&nbsp;
                  {batchData1.data.filter(data => {
                    if (data.paymentType === 'Cash') {
                      cashSum1 += data.paymentAmount;
                    }
                  })}
                  &nbsp; ${cashSum1.toPrecision(7)}
                </Col>
                <Col>
                  Payments &nbsp;
                  {batchData1.data.length}&nbsp;of&nbsp;50 &nbsp;/&nbsp;
                  {batchData1.data.forEach(data => {
                    sum1 += data.paymentAmount;
                  })}
                  ${sum1.toPrecision(7)}
                </Col>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={batchData1} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Col>
                  Batch - 20220116-Cash/Money1-{batchData2.data[0].createdBy}
                </Col>
                <Col>
                  Checks &nbsp;
                  {
                    ('Batch',
                    batchData2.data.filter(data => data.paymentType === 'Check')
                      .length)
                  }
                  &nbsp; / $
                  {batchData2.data.filter(data => {
                    if (data.paymentType === 'Check') {
                      checkSum2 += data.paymentAmount;
                    }
                  })}
                  &nbsp;
                  {checkSum2.toPrecision(7)}
                </Col>
                <Col>
                  Cash &nbsp;
                  {
                    batchData2.data.filter(data => data.paymentType === 'Cash')
                      .length
                  }
                  &nbsp;/&nbsp;
                  {batchData2.data.filter(data => {
                    if (data.paymentType === 'Cash') {
                      cashSum2 += data.paymentAmount;
                    }
                  })}
                  ${cashSum2.toPrecision(7)}
                </Col>
                <Col>
                  Payments &nbsp;
                  {batchData2.data.length}&nbsp;of&nbsp;50 &nbsp;/&nbsp;
                  {batchData2.data.forEach(data => {
                    sum2 += data.paymentAmount;
                  })}
                  ${sum2.toPrecision(7)}
                </Col>

                {/* <Flex className="align-items-center">Batch 2</Flex> */}
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={batchData2} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Col>
                  Batch - 20220116-Cash/Money1-{batchData3.data[0].createdBy}
                </Col>
                {/* <Flex className="align-items-center">Batch 3</Flex> */}
                <Col>
                  Checks &nbsp;
                  {
                    ('Batch',
                    batchData3.data.filter(data => data.paymentType === 'Check')
                      .length)
                  }
                  &nbsp; /
                  {batchData3.data.filter(data => {
                    if (data.paymentType === 'Check') {
                      checkSum3 += data.paymentAmount;
                    }
                  })}
                  &nbsp; ${checkSum3.toPrecision(7)}
                </Col>
                <Col>
                  Cash &nbsp;
                  {
                    batchData3.data.filter(data => data.paymentType === 'Cash')
                      .length
                  }
                  &nbsp; /
                  {batchData3.data.filter(data => {
                    if (data.paymentType === 'Cash') {
                      cashSum3 += data.paymentAmount;
                    }
                  })}
                  &nbsp; ${cashSum3.toPrecision(7)}
                </Col>
                <Col>
                  Payments &nbsp;
                  {batchData3.data.length}&nbsp;of&nbsp;50 &nbsp;/&nbsp;
                  {batchData3.data.forEach(data => {
                    sum3 += data.paymentAmount;
                  })}
                  ${sum3.toPrecision(7)}
                </Col>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={batchData3} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default BatchHistory;
