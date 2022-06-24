import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {/* wyświetla nawigację */}

    {children}
    {/* wyświetla to co zostało dodane w tagach
    <MainLayout> w komponencie App.js */}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;