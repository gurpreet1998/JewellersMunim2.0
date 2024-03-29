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
        getItemFromStore('limit-search')?.inputId
      )
      .then(res => {
        setSearchData({ ...searchData, data: res });
      });
  }, []);

  if (searchData.data.ClassName == 'System.Exception') {
    return (
      <div className="h-100">
        <Card>
          <Card.Body className="p-0">
            <div className="text-center">
              <p className="fw-bold fs-1 mt-3">{searchData.data.Message}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  } else if (searchData.data.length == 1) {
    return (
      <Redirect
        to={`/portal/accounting/home/loan/${searchData.data[0].loanID}`}
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
                      to={`/portal/accounting/home/loan/${searchData.data.loadId}`}
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
