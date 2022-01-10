import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Offcanvas, Button, ButtonGroup, Form } from 'react-bootstrap';
import invertedImg from 'assets/img/generic/inverted.png';
import cardImg from 'assets/img/generic/card.png';
import vibrantImg from 'assets/img/generic/vibrant.png';
import transparentImg from 'assets/img/generic/default.png';
import arrowsH from 'assets/img/icons/arrows-h.svg';
import Flex from 'components/common/Flex';
import AppContext from 'context/Context';
import RadioItem from './RadioItem';

const SettingsPanel = () => {
  const {
    config: { isFluid, isDark, navbarStyle, showSettingPanel },
    setConfig
  } = useContext(AppContext);

  const [navbars] = useState([
    {
      name: 'transparent',
      image: transparentImg
    },
    {
      name: 'inverted',
      image: invertedImg
    },
    {
      name: 'card',
      image: cardImg
    },
    {
      name: 'vibrant',
      image: vibrantImg
    }
  ]);

  return (
    <Offcanvas
      show={showSettingPanel}
      onHide={() => setConfig('showSettingPanel', false)}
      placement="end"
      style={{ maxWidth: '22rem' }}
      className="border-0"
    >
      <Offcanvas.Header
        closeButton
        closeVariant="white"
        className="bg-shape settings-panel-header"
      >
        <Offcanvas.Title as="div" className="py-1 flex-grow-1 light">
          <h5 className="text-white">
            <FontAwesomeIcon icon="palette" className="me-2 fs-0" />
            Settings
          </h5>
          <p className="mb-0 fs--1 text-white opacity-75">
            Set your own customized style
          </p>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="scrollbar">
        <Flex justifyContent="between">
          <img src={arrowsH} alt="" width={20} className="me-2 h-100" />
          <div className="flex-1">
            <h5 className="fs-0">Fluid Layout</h5>
            <p className="fs--1 mb-0">Toggle container layout system</p>
          </div>
          <Form.Check
            type="switch"
            id="fluid-mode-switch"
            checked={isFluid}
            onChange={({ target }) => setConfig('isFluid', target.checked)}
          />
        </Flex>
        <hr />

        <h5 className="fs-0 d-flex align-items-center">
          Vertical Navbar Style{' '}
        </h5>
        <p className="fs--1">Switch between styles for your vertical navbar</p>
        <ButtonGroup className="btn-group-navbar-style">
          {navbars.slice(0, 2).map(item => (
            <RadioItem
              key={item.name}
              name="navbar-style"
              label={item.name}
              active={navbarStyle === item.name}
              onChange={() => setConfig('navbarStyle', item.name)}
              image={item.image}
            />
          ))}
        </ButtonGroup>
        <ButtonGroup className="btn-group-navbar-style">
          {navbars.slice(2, 4).map(item => (
            <RadioItem
              key={item.name}
              name="navbar-style"
              label={item.name}
              active={navbarStyle === item.name}
              onChange={() => setConfig('navbarStyle', item.name)}
              image={item.image}
            />
          ))}
        </ButtonGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SettingsPanel;
