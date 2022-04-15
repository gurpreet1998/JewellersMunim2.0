import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import FalconCardHeader from 'components/common/FalconCardHeader';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
import {
  disputesComplaintsTableColumns,
  hardStopTableColumns,
  nfsLoansTableColumns,
  paymentPastDueTableColumns,
  redFlagTableColumns
} from './TableMaps';

const AppStatus = () => {
  // todo: replace with react-query once API is connected.
  const [disputesAndComplaints] = useState(disputesComplaintsTableColumns);

  return (
    <>
      <Card className="mt-3">
        <FalconCardHeader
          title={'Loan Status Overview'}
          titleClass={'fw-normal text-800'}
        />
        <Card.Body className={'pt-0'}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-primary`}
                    >
                      <span className={`fs-0 text-primary`}>
                        {disputesAndComplaints.data.length}
                      </span>
                    </div>
                  </div>
                  Disputes and Complaints
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={disputesAndComplaints} />
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
                        {hardStopTableColumns.data.length}
                      </span>
                    </div>
                  </div>
                  Hard Stop
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={hardStopTableColumns} />
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
                        {redFlagTableColumns.data.length}
                      </span>
                    </div>
                  </div>
                  Red Flag Payment
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={redFlagTableColumns} />
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
                        {paymentPastDueTableColumns.data.length}
                      </span>
                    </div>
                  </div>
                  Payment Past Due
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={paymentPastDueTableColumns} />
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
                        {nfsLoansTableColumns.data.length}
                      </span>
                    </div>
                  </div>
                  NFS Loan
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={nfsLoansTableColumns} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default AppStatus;
