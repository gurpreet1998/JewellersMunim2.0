import React from 'react';
import PropTypes from 'prop-types';
import AmortizationSchedule from './Tabs/AmortizationSchedule';
import DisputesComplaints from './Tabs/Disputes-Complaints';
import Documentations from './Tabs/Documentations';
import LoanInformation from './Tabs/LoanInformation';
import Statements from './Tabs/Statements';
import 'react-tabs/style/react-tabs.css';
import TransactionHistory from './Tabs/TransactionHistory';
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
