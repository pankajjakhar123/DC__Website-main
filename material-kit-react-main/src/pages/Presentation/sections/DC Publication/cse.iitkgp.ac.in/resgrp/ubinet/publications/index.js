// baseLayoutComponent.js

import React from 'react';
import PropTypes from 'prop-types';

const BaseLayout = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

BaseLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BaseLayout;
