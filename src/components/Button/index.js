import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ appearance, children, handleClick, label }) => {
  return (
    <button
      aria-label={label}
      className={appearance}
      type="button"
      onClick={handleClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  appearance: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  handleClick: PropTypes.func,
  label: PropTypes.string,
}

Button.defaultProps = {
  appearance: null,
  handleClick: () => null,
  label: null,
}

export default Button
