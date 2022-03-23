import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import Flex from 'components/common/Flex';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
import { fetchLoanStatusWiseData } from 'hooks/useLoanData';

export const tableColumns = [
  {
    accessor: 'applicationId',
    Header: 'Application ID'
  },
  {
    accessor: 'consumer',
    Header: 'Consumer Name'
  },
  {
    accessor: 'appDate',
    Header: 'Application Date'
  },
  {
    accessor: 'appExpDate',
    Header: 'Expiration Date'
  },
  {
    accessor: 'serviceAmount',
    Header: 'Service Amount'
  },
  {
    accessor: 'appType',
    Header: 'Application Type'
  },
  {
    accessor: 'appStatus',
    Header: 'Status'
  },
  {
    accessor: 'salesAgent',
    Header: 'Sales Agent'
  },
  {
    accessor: 'location',
    Header: 'Location'
  }
];

const AppStatus = () => {
  // todo: update merchantId. Set to 1 until login implemented
  const merchantId = 1;

  // todo: fetch from db?
  const expiringStatusId = 1;
  const incompleteStatusId = 2;
  const completedStatusId = 3;

  const expiringAppData = useQuery(
    ['app-status-expiring', merchantId, expiringStatusId],
    () => fetchLoanStatusWiseData(merchantId, expiringStatusId),
    {
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );

  const incompleteAppData = useQuery(
    ['app-status-incomplete', merchantId, incompleteStatusId],
    () => fetchLoanStatusWiseData(merchantId, incompleteStatusId),
    {
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );

  const completedAppData = useQuery(
    ['app-status-completed', merchantId, completedStatusId],
    () => fetchLoanStatusWiseData(merchantId, completedStatusId),
    {
      staleTime: 60000,
      refetchIntervalInBackground: true
    }
  );

  const appStatusExpiringSoon = {
    data: expiringAppData.isLoading ? [] : expiringAppData?.data?.data,
    columns: tableColumns
  };

  const appStatusIncomplete = {
    data: incompleteAppData.isLoading ? [] : incompleteAppData?.data?.data,
    columns: tableColumns
  };
  const appStatusComplete = {
    data: completedAppData.isLoading ? [] : completedAppData?.data?.data,
    columns: tableColumns
  };

  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <Row className="flex-between-center">
            <Col xs="auto" sm={8} lg={9}>
              <h5 className="fw-normal text-800 mb-0 text-nowrap py-2 py-xl-0">
                Application Status Overview
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
                      className={`avatar-name rounded-circle bg-soft-warning`}
                    >
                      <span className={`fs-0 text-warning`}>
                        {appStatusExpiringSoon?.data?.length}
                      </span>
                    </div>
                  </div>
                  Expiring Soon
                </Flex>
              </Accordion.Header>

              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={appStatusExpiringSoon} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-secondary`}
                    >
                      <span className={`fs-0 text-secondary`}>
                        {appStatusIncomplete?.data?.length}
                      </span>
                    </div>
                  </div>
                  Incomplete
                </Flex>
              </Accordion.Header>

              <Accordion.Body className={'p-0'}>
                <StatusAccordionBody tableData={appStatusIncomplete} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Flex className="align-items-center">
                  <div className="avatar avatar-xl me-3">
                    <div
                      className={`avatar-name rounded-circle bg-soft-success`}
                    >
                      <span className={`fs-0 text-success`}>
                        {appStatusComplete?.data?.length}
                      </span>
                    </div>
                  </div>
                  Completed
                </Flex>
              </Accordion.Header>
              <Accordion.Body>
                <StatusAccordionBody tableData={appStatusComplete} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default AppStatus;
