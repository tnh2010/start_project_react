/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { IntlProvider } from 'react-intl'

import IntlGlobal from './IntlGlobalProvider'
import { makeSelectLocale } from './selectors'

class LanguageProvider extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { locale, messages, children } = this.props
    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        <IntlGlobal>
          {React.Children.only(children)}
        </IntlGlobal>
      </IntlProvider>
    )
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}))

export default connect(mapStateToProps)(LanguageProvider)
