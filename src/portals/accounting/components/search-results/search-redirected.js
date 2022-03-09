import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchRedirected = searchInputValue => {
  return (
    <>
      <Redirect
        to={`/portal/accounting/home/searchresults/${searchInputValue}`}
      />
    </>
  );
};

SearchRedirected.prototypes = {
  searchInputValue: PropTypes.string
};
export default SearchRedirected;
