import React, { Component } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';

import { loanService } from '_services/loanService';

// Data Placeholder
import { columns } from 'data/dashboard/landing';

class AppStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStatusExpiringSoon: { data: [], columns: columns },
      appStatusIncomplete: { data: [], columns: columns },
      appStatusComplete: { data: [], columns: columns }
    };
  }
  // state = {
  //   appStatusExpiringSoon: { data: [], columns: columns }
  // };

  componentDidMount() {
    var that = this;
    loanService.getLoanDataStatusWise(1).then(item => {
      var temp = { ...that.state.appStatusExpiringSoon };
      temp.data = item;
      that.setState({ appStatusExpiringSoon: temp });
    });
    // .catch(console.log);

    loanService.getLoanDataStatusWise(2).then(item => {
      var temp = { ...that.state.appStatusIncomplete };
      temp.data = item;
      that.setState({ appStatusIncomplete: temp });
    });

    loanService.getLoanDataStatusWise(3).then(item => {
      var temp = { ...that.state.appStatusComplete };
      temp.data = item;
      that.setState({ appStatusComplete: temp });
    });
  }
  render() {
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
                          {this.state.appStatusExpiringSoon.data.length}
                        </span>
                      </div>
                    </div>
                    Expiring Soon
                  </Flex>
                </Accordion.Header>

                <Accordion.Body className={'p-0'}>
                  <StatusAccordionBody
                    tableData={this.state.appStatusExpiringSoon}
                  />
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
                          {this.state.appStatusIncomplete.data.length}
                        </span>
                      </div>
                    </div>
                    Incomplete
                  </Flex>
                </Accordion.Header>

                <Accordion.Body className={'p-0'}>
                  <StatusAccordionBody
                    tableData={this.state.appStatusIncomplete}
                  />
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
                          {this.state.appStatusComplete.data.length}
                        </span>
                      </div>
                    </div>
                    Completed
                  </Flex>
                </Accordion.Header>
                <Accordion.Body>
                  <StatusAccordionBody
                    tableData={this.state.appStatusComplete}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AppStatus;
