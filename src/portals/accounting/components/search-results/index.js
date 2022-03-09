import React, { useState, useEffect, useContext } from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import StatusAccordionBody from 'components/status-accordion/StatusAccordionBody';
// import TitleCard from 'components/common/TitleCard';
import { searchResult } from '../landing/TableMaps';
import { useLocation, Redirect } from 'react-router-dom';
import { limitSearchService } from '_services/accounting';
import { AuthContext } from 'context/Context';
import { getItemFromStore } from 'helpers/utils';

const SearchResults = () => {
  const [searchData, setSearchData] = useState(searchResult);
  const auth = useContext(AuthContext);
  const location = useLocation();
  let input =
    location.pathname.split('/')[location.pathname.split('/').length - 1];

  useEffect(() => {
    limitSearchService
      .getLimitAccountSearch(
        input,
        auth.account.idTokenClaims.oid,
        // 186
        getItemFromStore('limit-search').inputId
      )
      .then(res => setSearchData({ ...searchData, data: res }));
  }, []);
  console.log(getItemFromStore('limit-search').inputId);

  if (searchData.data.length == 1) {
    return (
      <Redirect
        to={`/portal/accounting/home/loandetails/${searchData.data[0].loanID}`}
      />
    );
  } else {
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
  }
};
export default SearchResults;
