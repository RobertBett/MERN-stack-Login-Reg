import React from 'react';
import PropTypes from 'prop-types';

const TabContainer = ({ children }) => <div>{children}</div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
