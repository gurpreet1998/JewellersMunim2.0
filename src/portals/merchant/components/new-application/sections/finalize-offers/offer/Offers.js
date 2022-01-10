import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  Spinner
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import OfferGrid from './OfferGrid';
import { OfferContext } from 'context/Context';
import usePagination from 'hooks/usePagination';
import Flex from 'components/common/Flex';

const Offers = () => {
  const {
    offersState: { offers },
    offersDispatch: offersDispatch
  } = useContext(OfferContext);

  const [sortBy, setSortBy] = useState('loanAmount');
  const [isAsc, setIsAsc] = useState(true);
  const [offerPerPage] = useState(6);

  const {
    paginationState: {
      data: paginatedOffers,
      totalItems,
      itemsPerPage,
      currentPage,
      canNextPage,
      canPreviousPage,
      paginationArray,
      from,
      to
    },
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage
  } = usePagination(offers, offerPerPage);

  useEffect(() => {
    offersDispatch({
      type: 'SORT_PRODUCT',
      payload: {
        sortBy,
        order: isAsc ? 'asc' : 'desc'
      }
    });
  }, [sortBy, isAsc]);

  return (
    <>
      <Card className="mb-0 shadow-none">
        <Card.Header className={'fw-normal px-md-6 pt-4 pb-0'}>
          <Row className="flex-between-center">
            <Col
              sm="auto"
              as={Flex}
              alignItems="center"
              className="mb-2 mb-sm-0"
            >
              <Form.Select
                size="sm"
                value={itemsPerPage}
                onChange={({ target }) => {
                  setItemsPerPage(target.value);
                }}
                style={{ maxWidth: '4.875rem' }}
              >
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={totalItems}>All</option>
              </Form.Select>
              <h6 className="mb-0 ms-2">
                Showing {from}-{to} of {totalItems} Offers
              </h6>
            </Col>
            <Col sm="auto">
              <Row className="gx-2 align-items-center">
                <Col xs="auto">
                  <Form as={Row} className="gx-2">
                    <Col xs="auto">
                      <small>Sort by:</small>
                    </Col>
                    <Col xs="auto">
                      <InputGroup size="sm">
                        <Form.Select
                          className="pe-5"
                          defaultValue="name"
                          onChange={({ target }) => setSortBy(target.value)}
                        >
                          <option value="term">Loan Term</option>
                          <option value="name">Program</option>
                          <option value="monthlyPayment">Payment Amount</option>
                        </Form.Select>
                        <InputGroup.Text
                          as={Button}
                          variant="secondary"
                          onClick={() => setIsAsc(!isAsc)}
                        >
                          <FontAwesomeIcon
                            icon={isAsc ? 'sort-amount-up' : 'sort-amount-down'}
                          />
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="fw-normal px-md-6 py-4">
          {offers.length !== 0 ? (
            <Row>
              {paginatedOffers.map((offer, index) => (
                <OfferGrid
                  offer={offer}
                  key={offer.id}
                  md={6}
                  lg={4}
                  index={index}
                />
              ))}
            </Row>
          ) : (
            <>
              <Row>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className="ms-3"
                >
                  <h5 className="text-secondary mb-4">Retrieving Offers...</h5>
                </Flex>
              </Row>
              <Row>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  className="ms-3"
                >
                  <div>
                    <Spinner
                      animation="border"
                      role="status"
                      variant="secondary"
                    >
                      <span className="visually-hidden">
                        Retrieving offers...
                      </span>
                    </Spinner>
                  </div>
                </Flex>
              </Row>
            </>
          )}
        </Card.Body>
        {/* ***** OFFER PAGINATION ***** */}
        <Card.Footer className={'d-flex justify-content-center bg-light mt-n1'}>
          <div>
            <Button
              variant="falcon-default"
              size="sm"
              disabled={!canPreviousPage}
              onClick={prevPage}
              className="me-2"
              trigger="focus"
            >
              <FontAwesomeIcon icon="chevron-left" />
            </Button>
          </div>
          <ul className="pagination mb-0">
            {paginationArray.map(page => (
              <li
                key={page}
                className={classNames({ active: currentPage === page })}
              >
                <Button
                  size="sm"
                  variant="falcon-default"
                  className="page me-2"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </Button>
              </li>
            ))}
          </ul>
          <div>
            <Button
              variant="falcon-default"
              size="sm"
              disabled={!canNextPage}
              onClick={nextPage}
              trigger="focus"
            >
              <FontAwesomeIcon icon="chevron-right" />
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Offers;
