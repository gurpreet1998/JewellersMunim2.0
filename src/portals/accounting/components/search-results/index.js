import React, { useState, useEffect } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
// import TitleCard from 'components/common/TitleCard';
import { searchResult } from '../landing/TableMaps';
import { useLocation, Redirect } from 'react-router-dom';
import { searchService } from '_services/accounting';

const SearchResults = () => {
  const [searchData, setSearchData] = useState(searchResult);

  const location = useLocation();
  let input =
    location.pathname.split('/')[location.pathname.split('/').length - 1];

  useEffect(() => {
    searchService
      .getSearchResults(input)
      .then(res => setSearchData({ ...searchData, data: res }));
  }, []);
  if (searchData.data.length == 1) {
    return (
      <Redirect
        to={`/portal/accounting/home/loandetails/${searchData.data[0].loadID}`}
      />
    );
  }
  return (
    <>
      <Row className="g-3 mb-3">
        {/* <Col md={12}>
          <TitleCard title="Search Results" />
        </Col> */}
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fw-normal text-800 mb-0 text-nowrap py-2 py-xl-0">
                Search Results
              </h5>
              <Accordion.Item>
                {/* {
                  (searchData.data.length = 1 && (
                    <Redirect
                      to={`/portal/accounting/home/loandetails/${searchData.data.loadId}`}
                    />
                  ))
                } */}
                <StatusAccordionBody tableData={searchData} />
              </Accordion.Item>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SearchResults;
