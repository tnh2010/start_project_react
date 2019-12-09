import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

export default class MasterLayout extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    const childrenWithProps = Children.map(children, (child) => cloneElement(child, {}), {})

    return (
      <div id="PageWrapper">
        {childrenWithProps}
      </div>
    )
  }
}
