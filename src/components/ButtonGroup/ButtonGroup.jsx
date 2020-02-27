import './button_group.css';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonGroup = ({ children, className, vertical, ...attrs}) => {

  const classes = classNames(
    'btn-group',
    className,
    { vertical }
  );
  return (
    <div
      {...attrs}
      className={classes}
    >
      { children }
    </div>
  )
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  children: null,
  vertical: false,
  className: '',
};

export default ButtonGroup;