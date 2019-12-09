import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MasterLayout } from 'layouts'

export default class MainLayout extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <MasterLayout>
        <div className="MainLayout">
          {this.props.children}
        </div>
      </MasterLayout>
    )
  }
}
