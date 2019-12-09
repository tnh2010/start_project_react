/**
 *
 * LocaleToggle
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import ToggleOption from '../ToggleOption'

function Toggle(props) {
  const { values, value, onToggle, messages } = props
  let content = <option>--</option>

  // If we have items, render them
  if (values) {
    content = values.map(v => <ToggleOption key={v} value={v} message={messages[v]}/>)
  }

  return (
    <select value={value} onChange={onToggle}>
      {content}
    </select>
  )
}

Toggle.propTypes = {
  value: PropTypes.string,
  values: PropTypes.array,
  messages: PropTypes.object,
  onToggle: PropTypes.func,
}

export default Toggle
