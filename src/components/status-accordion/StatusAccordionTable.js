import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';

const StatusAccordionTable = ({ getTableProps, headers, page, prepareRow }) => {
  return (
    <>
      <SimpleBarReact>
        <Table {...getTableProps()} className="fs--1 mb-0">
          <thead className="bg-200 text-900">
            <tr>
              {headers.map((column, index) => (
                <th
                  className={classNames('white-space-nowrap', {
                    'text-start': index !== 0
                  })}
                  key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span className="sort desc" />
                    ) : (
                      <span className="sort asc" />
                    )
                  ) : (
                    <span className="sort" />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          {page.length > 0 && (
            <tbody>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell, index) => (
                      <td
                        key={index}
                        {...cell.getCellProps()}
                        className={classNames('white-space-nowrap', {
                          'text-start': index !== 0
                        })}
                      >
                        {cell.column.Header === 'Page Path' ? (
                          <Link to="#!" className="text-primary fw-semi-bold">
                            {cell.render('Cell')}
                          </Link>
                        ) : (
                          cell.render('Cell')
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          )}
        </Table>
      </SimpleBarReact>
      {page.length === 0 && (
        <div className="text-center">
          <p className="fw-bold fs-1 mt-3">No data found</p>
        </div>
      )}
    </>
  );
};

StatusAccordionTable.propTypes = {
  getTableProps: PropTypes.func.isRequired,
  headers: PropTypes.array.isRequired,
  page: PropTypes.arrayOf(PropTypes.object).isRequired,
  prepareRow: PropTypes.func.isRequired
};

export default StatusAccordionTable;
