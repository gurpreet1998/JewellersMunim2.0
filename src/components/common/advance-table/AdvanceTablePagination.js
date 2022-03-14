/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button } from 'react-bootstrap';
//import { propTypes } from 'react-bootstrap/esm/Image';
import Flex from '../Flex';

export const AdvanceTablePagination = ({
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  pageCount,
  pageIndex,
  gotoPage,
  align,
  showicon
}) => {
  return (
    <Flex alignItems={align} justifyContent={align}>
      <Button
        size="sm"
        variant="falcon-default"
        onClick={() => previousPage()}
        className={classNames({ disabled: !canPreviousPage })}
      >
        {showicon ? 'Previous' : <FontAwesomeIcon icon="chevron-left" />}
      </Button>
      <ul className="pagination mb-0 mx-1">
        {Array.from(Array(pageCount).keys()).map((page, index) => (
          <li key={page} className={classNames({ active: pageIndex === page })}>
            <Button
              size="sm"
              variant="falcon-default"
              className={classNames('page', {
                'me-1': index + 1 !== pageCount
              })}
              onClick={() => gotoPage(page)}
            >
              {page + 1}
            </Button>
          </li>
        ))}
      </ul>
      <Button
        size="sm"
        variant="falcon-default"
        onClick={() => nextPage()}
        className={classNames({ disabled: !canNextPage })}
      >
        {showicon ? 'Next' : <FontAwesomeIcon icon="chevron-left" />}
      </Button>
    </Flex>
  );
};

AdvanceTablePagination.defaultProps = {
  align: 'center',
  showicon: false
};

export default AdvanceTablePagination;
