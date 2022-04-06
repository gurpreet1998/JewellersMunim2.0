import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const CardDropdown = ({
  btnRevealClass,
  drop,
  children,
  variant = 'link',
  icon = 'ellipsis-h',
  btnText = ''
}) => {
  return (
    <Dropdown
      className="font-sans-serif btn-reveal-trigger"
      align="end"
      drop={drop}
    >
      <Dropdown.Toggle
        variant={variant}
        size="sm"
        data-boundary="viewport"
        className={classNames('text-600', {
          [btnRevealClass]: btnRevealClass,
          'btn-reveal': !btnRevealClass
        })}
      >
        <FontAwesomeIcon icon={icon} className="fs--2" /> {btnText}
      </Dropdown.Toggle>
      <Dropdown.Menu className="border py-0">
        {children}
        {!children && (
          <div className="py-2">
            <Dropdown.Item>View</Dropdown.Item>
            <Dropdown.Item>Export</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-danger">Remove</Dropdown.Item>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CardDropdown.propTypes = {
  btnRevealClass: PropTypes.string,
  drop: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  icon: PropTypes.string,
  btnText: PropTypes.string
};

export default CardDropdown;
