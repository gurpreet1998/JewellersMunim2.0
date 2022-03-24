import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/common/Flex';
import AmortizationSchedule from './Tabs/AmortizationSchedule';
import DisputesComplaints from './Tabs/Disputes-Complaints';
import Documentations from './Tabs/Documentations';
import LoanInformation from './Tabs/LoanInformation';
import Statements from './Tabs/Statements';
import 'react-tabs/style/react-tabs.css';
import TransactionHistory from './Tabs/transactions/TransactionHistory';

import { Card, Nav, Row, Tab } from 'react-bootstrap';
const NavItem = ({ item }) => {
  return (
    <Nav.Item as="li">
      <Nav.Link
        className="mb-0 py-3 cursor-pointer"
        eventKey={item.toLowerCase()}
      >
        {item}
      </Nav.Link>
    </Nav.Item>
  );
};

const LoanDetailsTab = props => {
  const [navItems] = useState([
    'Loan Information',
    'Transaction History',
    'Disputes/ Complaints',
    'Amortization Schedule',
    'Statements',
    'Documentation'
  ]);

  return (
    <Card className="mt-3">
      <Tab.Container id="loan-tabs" defaultActiveKey="loan information">
        <Card.Header
          as={Flex}
          justifyContent="between"
          alignItems="center"
          className="ps-0 py-0 border-bottom"
        >
          <Nav
            as="ul"
            className="nav-tabs border-0 flex-nowrap chart-tab tab-active-caret z-index-1"
          >
            {navItems.map(item => (
              <NavItem item={item} key={item} />
            ))}
          </Nav>
        </Card.Header>
        <Card.Body className={'p-0'}>
          <Row className="g-1">
            <Tab.Content>
              <Tab.Pane unmountOnExit eventKey="loan information">
                <LoanInformation />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="transaction history">
                <TransactionHistory loanId={props.loanId} />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="disputes/ complaints">
                <DisputesComplaints />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="amortization schedule">
                <AmortizationSchedule />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="statements">
                <Statements />
              </Tab.Pane>
              <Tab.Pane unmountOnExit eventKey="documentation">
                <Documentations />
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
};

NavItem.propTypes = {
  item: PropTypes.string.isRequired
};

LoanDetailsTab.propTypes = {
  loanId: PropTypes.string
};

export default LoanDetailsTab;
