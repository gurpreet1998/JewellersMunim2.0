import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, InputGroup } from 'react-bootstrap';

const StatusAccordionSearchBox = ({
  globalFilter,
  setGlobalFilter,
  useAsyncDebounce
}) => {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <InputGroup className="position-relative">
      <FormControl
        value={value || ''}
        onChange={({ target: { value } }) => {
          setValue(value);
          onChange(value);
        }}
        size="sm"
        id="search"
        placeholder="Search"
        type="search"
        className="shadow-none"
      />
      <InputGroup.Text className="bg-transparent">
        <FontAwesomeIcon icon="search" className="fs--1 text-600" />
      </InputGroup.Text>
    </InputGroup>
  );
};

StatusAccordionSearchBox.propTypes = {
  globalFilter: PropTypes.func,
  setGlobalFilter: PropTypes.func.isRequired,
  useAsyncDebounce: PropTypes.func.isRequired
};

export default StatusAccordionSearchBox;
