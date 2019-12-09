import React, { Component } from 'react'

import { MainLayout } from 'layouts'
import ToggleLanguage from '../LanguageProvider/components/LocaleToggle'

import { trans } from 'containers/LanguageProvider/IntlGlobalProvider'
import msg from './messages'

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <h1>{trans(msg.home)}</h1>
        <ToggleLanguage/>
      </MainLayout>
    )
  }
}

export default Home
