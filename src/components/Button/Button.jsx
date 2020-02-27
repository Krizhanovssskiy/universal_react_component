import './button.css';

import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children, className, onClick, disabled, active, ...attrs
                }) => {

  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      onClick(e);
    }
  };

  const classes = classNames(
    'btn',
    className,
    { active }
  );

  const Tag = attrs.href ? 'a' : 'button';
  return (
    <Tag
      { ...attrs }
      className={classes}
      onClick={onClickAction}
      disabled={disabled}
    >
      {
        children
      }
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

Button.defaultProps = {
  children: 'Default Text',
  className: '',
  onClick: ()=>{},
  disabled: false,
  active: false
};

export default Button;