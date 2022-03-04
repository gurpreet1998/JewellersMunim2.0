import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SubTitleCard from 'components/common/SubTitleCard';
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs';
import ActiveBatch from './ActiveBatch';
import BatchHistory from './BatchHistory';

const lockbox = () => {
  // const {
  //   register,
  //   // handleSubmit,
  //   formState: { errors },
  //   watch,
  //   setValue
  //   // clearErrors
  // } = useForm();

  return (
    <>
      <Row className="g-3 mb-3">
        <Col md={12}>
          <Col md={12}>
            <SubTitleCard title="Lock Box | Post Payments" />
          </Col>
        </Col>
      </Row>
      <Tabs>
        <TabList className="mb-0 navbar-glass fs--1 sticky-kit border-bottom border-1">
          <Tab>Active Batches</Tab>
          <Tab>Batch History</Tab>
        </TabList>
        <TabPanel>
          <ActiveBatch />
        </TabPanel>
        <TabPanel>
          <BatchHistory />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default lockbox;
