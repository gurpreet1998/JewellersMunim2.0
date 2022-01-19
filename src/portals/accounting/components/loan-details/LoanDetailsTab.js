import React from 'react';
import PropTypes from 'prop-types';
import AmortizationSchedule from './AmortizationSchedule';
import DisputesComplaints from './Disputes-Complaints';
import Documentations from './Documentations';
import LoanInformation from './LoanInformation';
import Statements from './Statements';
import 'react-tabs/style/react-tabs.css';
import TransactionHistory from './TransactionHistory';
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs';
export default function LoanDetailsTab(props) {
  return (
    <Tabs>
      <TabList className="mb-0 navbar-glass fs--1 sticky-kit border-bottom border-1">
        <Tab>Loan Information</Tab>
        <Tab>Transaction History</Tab>
        <Tab>Disputes/Complaints</Tab>
        <Tab>Amortization Schedule</Tab>
        <Tab>Statements</Tab>
        <Tab>Documentations</Tab>
      </TabList>
      <TabPanel>
        <LoanInformation />
      </TabPanel>
      <TabPanel>
        <TransactionHistory loanId={props.loanId} />
      </TabPanel>
      <TabPanel>
        <DisputesComplaints />
      </TabPanel>
      <TabPanel>
        <AmortizationSchedule />
      </TabPanel>
      <TabPanel>
        <Statements />
      </TabPanel>
      <TabPanel>
        <Documentations />
      </TabPanel>
    </Tabs>
  );
}
LoanDetailsTab.propTypes = {
  loanId: PropTypes.array
};
