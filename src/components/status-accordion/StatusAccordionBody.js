import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button } from 'react-bootstrap';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce
} from 'react-table';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import StatusAccordionTable from './StatusAccordionTable';
import StatusAccordionSearchBox from './StatusAccordionSearchBox';

const StatusAccordionBody = ({ tableData, pagePath }) => {
  const { columns, data } = tableData;
  const {
    getTableProps,
    headers,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="h-100">
      <Card.Header className={'py-2'}>
        <Row className="flex-between-center">
          <Col xs="auto" sm={8} lg={9} />
          <Col xs="auto" sm={4} lg={3}>
            <StatusAccordionSearchBox
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              useAsyncDebounce={useAsyncDebounce}
            />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="p-0">
        <StatusAccordionTable
          getTableProps={getTableProps}
          headers={headers}
          page={page}
          prepareRow={prepareRow}
          pagePath={pagePath}
        />
      </Card.Body>
      <Card.Footer>
        <Row className="align-items-center">
          <Col>
            <p className="mb-0 fs--1">
              <span className="d-none d-sm-inline-block me-2">
                {pageSize * pageIndex + 1} to{' '}
                {pageSize * pageIndex + page.length} of {data.length}
              </span>
            </p>
          </Col>
          <Col xs="auto" as={Flex}>
            <Button
              size="sm"
              variant={canPreviousPage ? 'primary' : 'light'}
              onClick={() => previousPage()}
              className={classNames({ disabled: !canPreviousPage })}
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant={canNextPage ? 'primary' : 'light'}
              className={classNames('px-4 ms-2', {
                disabled: !canNextPage
              })}
              onClick={() => nextPage()}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </div>
  );
};

StatusAccordionBody.propTypes = {
  tableData: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        accessor: PropTypes.string.isRequired,
        Header: PropTypes.string.isRequired
      })
    ).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        applicationId: PropTypes.string.isRequired,
        consumer: PropTypes.string.isRequired,
        serviceAmount: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string
        ]),
        appDate: PropTypes.string,
        appStatus: PropTypes.string,
        salesAgent: PropTypes.string,
        location: PropTypes.string,
        appExpDate: PropTypes.string,
        appType: PropTypes.string
      })
    ).isRequired
  }).isRequired,
  pagePath: PropTypes.string
};

export default StatusAccordionBody;
