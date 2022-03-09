/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fuse from 'fuse.js';
import { Link, Redirect, Route } from 'react-router-dom';
import Avatar from 'components/common/Avatar';
import { isIterableArray } from 'helpers/utils';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';
// import SoftBadge from 'components/common/SoftBadge';
import SearchResults from 'portals/accounting/components/search-results';
import { getItemFromStore } from 'helpers/utils';

const MediaSearchContent = ({ item }) => {
  return (
    <Dropdown.Item className="px-card py-2" as={Link} to={item.url}>
      <Flex alignItems="center">
        {item.file && (
          <div className="file-thumbnail">
            <img src={item.img} alt="" className={item.imgAttrs.class} />
          </div>
        )}
        {item.icon && (
          <Avatar src={item.icon.img} size="l" className={item.icon.status} />
        )}

        <div className="ms-2">
          <h6 className="mb-0">{item.title}</h6>
          <p
            className="fs--2 mb-0"
            dangerouslySetInnerHTML={{ __html: item.text || item.time }}
          />
        </div>
      </Flex>
    </Dropdown.Item>
  );
};

const SearchBox = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const [flag, setFlag] = useState(false);

  const handleSubmit = () => {
    setFlag(true);
  };
  console.log(getItemFromStore('limit-search').inputVal);
  return (
    <Dropdown onToggle={toggle} className="search-box">
      <Dropdown.Toggle
        as="div"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        bsPrefix="toggle"
      >
        <Form
          className="position-relative"
          onSubmit={() => handleSubmit(searchInputValue)}
        >
          {flag && (
            <Redirect
              to={`/portal/accounting/home/searchresults/${searchInputValue}`}
            >
              <SearchResults />
            </Redirect>
          )}
          {/* {flag && (
            <Redirect
              to={`/portal/accounting/home/searchresults/${searchInputValue}`}
            />
          )} */}
          <Form.Control
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="rounded-pill search-input"
            value={searchInputValue}
            onChange={({ target }) => setSearchInputValue(target.value)}
          />
          <FontAwesomeIcon
            icon="search"
            className="position-absolute text-400 search-box-icon"
          />
          {searchInputValue && (
            <div
              className="position-absolute"
              style={{ right: '10px', top: '8px' }}
            >
              <FalconCloseButton
                size="sm"
                noOutline
                onClick={() => setSearchInputValue('')}
              />
            </div>
          )}
          {/* <button onClick={() => handleSubmit(searchInputValue)}>Submit</button> */}
        </Form>
      </Dropdown.Toggle>
    </Dropdown>
    // <SearchResults input={searchInputValue}></SearchResults>
  );
};

MediaSearchContent.propTypes = {
  item: PropTypes.shape({
    catagories: PropTypes.string,
    url: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      img: PropTypes.string.isRequired,
      size: PropTypes.string,
      status: PropTypes.string
    }),
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    time: PropTypes.string,
    file: PropTypes.bool,
    imgAttrs: PropTypes.shape({
      class: PropTypes.string
    })
  }).isRequired
};

// SearchBox.propTypes = {
//   autoCompleteItem: PropTypes.arrayOf(
//     PropTypes.shape(MediaSearchContent.propTypes.item)
//   )
// };

export default SearchBox;
