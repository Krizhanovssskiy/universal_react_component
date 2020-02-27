//style
import './icon.css'
//lib
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ name, onClick, disabled, className, }) => {

  const classes = classNames(
    'fa',
    `fa-${name}`,
    { func: onClick},
    { disabled },
    className
  );
  return (
    <i
      onClick={disabled ? null : onClick}
      className={classes}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Icon.defaultProps ={
  name: '',
  onClick: null,
  disabled: false,
  className: '',
};

export default Icon;