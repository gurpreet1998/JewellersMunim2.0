import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  Tooltip,
  OverlayTrigger,
  FormControl
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import OfferGrid from './OfferGrid';
import { NewApplicationContext, OfferContext } from 'context/Context';
import usePagination from 'hooks/usePagination';
import Flex from 'components/common/Flex';
import IconButton from 'components/common/IconButton';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import NumberFormat from 'react-number-format';

const Offers = () => {
  const {
    offersState: { offers },
    offersDispatch: offersDispatch
  } = useContext(OfferContext);

  const { user } = useContext(NewApplicationContext);

  const [sortBy, setSortBy] = useState('loanAmount');
  const [isAsc, setIsAsc] = useState(true);
  const [isCML, setIsCML] = useState(false);
  const [update, setUpdate] = useState(true);

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
            <Col sm="auto" as={Flex} alignItems="center" className="mb-2">
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
                  <Row className="gx-2">
                    <Col className={'d-none d-lg-block'} xs="auto">
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
                  </Row>
                </Col>
                <Col xs="auto" className="pe-0">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>View {isCML ? 'CML' : 'CP+'} Loans</Tooltip>
                    }
                  >
                    <IconButton
                      variant="link"
                      icon="eye"
                      iconAlign="left"
                      transform="down-1 shrink-1"
                      className={'text-600 px-1'}
                      onClick={() => setIsCML(!isCML)}
                    >
                      {isCML ? 'CML' : 'CP+'}
                    </IconButton>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="fw-normal px-md-6 py-0">
          <hr />
          <Row className="gx-2 mb-3">
            <Col xs="8" sm="7" md="6" xl="4" className={'pe-3'}>
              <InputGroup size="sm">
                <NumberFormat
                  value={user.serviceAmount}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType={'input'}
                  customInput={FormControl}
                />
                <InputGroup.Text
                  as={Button}
                  variant="secondary"
                  onClick={() => setUpdate(!update)}
                >
                  <FontAwesomeIcon icon={'sync-alt'} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs="auto">
              <small>Recalculate Offers</small>
            </Col>
          </Row>
          {offers.length !== 0 ? (
            <Row>
              {paginatedOffers.map((offer, index) => (
                <OfferGrid
                  offer={offer}
                  key={offer.id}
                  md={6}
                  xl={4}
                  index={index}
                />
              ))}
            </Row>
          ) : (
            <LoadingSpinner messageText={'Retrieving offers...'} />
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
