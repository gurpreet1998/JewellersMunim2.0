import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context/Context';
import { settings } from './config';
import { getColor, getItemFromStore } from 'helpers/utils';
import { configReducer } from './reducers/configReducer';
import useToggleStyle from './hooks/useToggleStyle';

const Main = props => {
  const configState = {
    isFluid: getItemFromStore('isFluid', settings.isFluid),
    isDark: getItemFromStore('isDark', settings.isDark),
    navbarPosition: getItemFromStore('navbarPosition', settings.navbarPosition),
    isNavbarVerticalCollapsed: getItemFromStore(
      'isNavbarVerticalCollapsed',
      settings.isNavbarVerticalCollapsed
    ),
    navbarStyle: getItemFromStore('navbarStyle', settings.navbarStyle),
    currency: settings.currency,
    showBurgerMenu: settings.showBurgerMenu,
    showSettingPanel: false,
    navbarCollapsed: false
  };

  const [config, configDispatch] = useReducer(configReducer, configState);

  const { isLoaded } = useToggleStyle(config.isDark, configDispatch);

  const setConfig = (key, value) => {
    configDispatch({
      type: 'SET_CONFIG',
      payload: {
        key,
        value,
        setInStore: [
          'isFluid',
          'isDark',
          'navbarPosition',
          'isNavbarVerticalCollapsed',
          'navbarStyle'
        ].includes(key)
      }
    });
  };

  if (!isLoaded) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: config.isDark ? getColor('dark') : getColor('light')
        }}
      />
    );
  }

  return (
    <AppContext.Provider value={{ config, setConfig }}>
      {props.children}
    </AppContext.Provider>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
