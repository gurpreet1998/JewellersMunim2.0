import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
import BasicCardHeader from 'components/common/BasicCardHeader';

import {
  todaysStatements,
  tomorrowsCardPayments,
  dailyACHPaymentExceptions,
  tomorrowsACHs,
  dailyCCPaymentExceptions
} from './TableMaps';

// import { accountingService } from '_services/accounting';

const AppStatus = () => {
  // eslint-disable-next-line no-unused-vars
  const [todaysData, setTodaysData] = useState(todaysStatements);

  //   useEffect(() => {
  //     accountingService
  //       .getTodaysStatement(1)
  //       .then(res => setTodaysData({ ...todaysData, data: res }));
  //   }, []);

  return (
    <>
      <Card className="mt-3">
        <BasicCardHeader name={'Loan Status Overview'} />
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
                        {todaysData.data.length}
                      </span>
                    </div>
                  </div>
                  Disputes and Complaints
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
                        {tomorrowsCardPayments.data.length}
                      </span>
                    </div>
                  </div>
                  Hard Stop
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={tomorrowsCardPayments} />
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
                        {dailyCCPaymentExceptions.data.length}
                      </span>
                    </div>
                  </div>
                  Red Flag Payment
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={dailyCCPaymentExceptions} />
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
                        {tomorrowsACHs.data.length}
                      </span>
                    </div>
                  </div>
                  Payment Past Due
                </Flex>
              </Accordion.Header>
              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={tomorrowsACHs} />
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
                        {dailyACHPaymentExceptions.data.length}
                      </span>
                    </div>
                  </div>
                  NFS Loan
                </Flex>
              </Accordion.Header>

              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={dailyACHPaymentExceptions} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default AppStatus;
