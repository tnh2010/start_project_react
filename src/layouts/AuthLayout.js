import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { MasterLayout } from 'layouts'

export default class AuthLayout extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <MasterLayout>
        <div className="AuthorContent">
          {this.props.children}
        </div>
      </MasterLayout>
    )
  }
}
