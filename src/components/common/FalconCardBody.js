import React from 'react';
import PropTypes from 'prop-types';
import * as ReactBootstrap from 'react-bootstrap';

import classNames from 'classnames';

const FalconCardBody = ({ children, noLight, className, childrenPosition }) => {
  return (
    <ReactBootstrap.Card.Body
      className={classNames({ 'bg-light': !noLight, [className]: className })}
    >
      <ReactBootstrap.Tab.Content>
        <ReactBootstrap.Tab.Pane eventKey="preview">
          {childrenPosition !== 'bottom' && children}
          {childrenPosition === 'bottom' && children}
        </ReactBootstrap.Tab.Pane>
        <ReactBootstrap.Tab.Pane eventKey="code"/>
      </ReactBootstrap.Tab.Content>
    </ReactBootstrap.Card.Body>
  );
};

FalconCardBody.propTypes = {
  children: PropTypes.node,
  noLight: PropTypes.bool,
  className: PropTypes.string,
  childrenPosition: PropTypes.string
};

export default FalconCardBody;
