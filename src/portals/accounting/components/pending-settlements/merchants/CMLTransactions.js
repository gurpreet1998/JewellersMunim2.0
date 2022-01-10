import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
import classNames from 'classnames';

// Data Placeholder
import {
  CMLPaymentsTableData,
  CMLExceptionsTableData,
  CPPPaymentsTableData,
  CPPExceptionsTableData
} from 'data/accounting/pendingSettlements';

const CMLTransactions = () => {
  const tabs = [
    {
      id: 1,
      countColor: 'success',
      count: CMLPaymentsTableData.data.length,
      header: 'CML Payments/ Refunds'
    },
    {
      id: 2,
      countColor: 'warning',
      count: CMLExceptionsTableData.data.length,
      header: 'Exceptions- CML Payments/ Refunds'
    },
    {
      id: 3,
      countColor: 'success',
      count: CPPPaymentsTableData.data.length,
      header: 'CP+ Payments/ Refunds'
    },
    {
      id: 4,
      countColor: 'warning',
      count: CPPExceptionsTableData.data.length,
      header: 'Exceptions- CP+ Payments/ Refunds'
    }
  ];
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          {tabs.map((tab, index) => (
            <Accordion
              key={tab.id}
              defaultActiveKey={1}
              className={classNames('accordion-flush border', {
                'border border-bottom-0': index < tabs.length - 1
              })}
            >
              <Accordion.Item eventKey={tab.id}>
                <Accordion.Header>
                  <Flex className="align-items-center">
                    <div className="avatar avatar-xl me-3">
                      <div
                        className={`avatar-name rounded-circle bg-soft-${tab.countColor}`}
                      >
                        <span className={`fs-0 text-${tab.countColor}`}>
                          {tab.count}
                        </span>
                      </div>
                    </div>
                    {tab.header}
                  </Flex>
                </Accordion.Header>
                <Accordion.Body className={'p-0'}>
                  <StatusAccordionBody tableData={CMLPaymentsTableData} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default CMLTransactions;
