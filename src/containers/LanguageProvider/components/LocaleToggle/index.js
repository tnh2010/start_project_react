/*
 *
 * LanguageToggle
 *
 */

import React from 'react'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Toggle from '../Toggle'
import { appLocales } from '../../../../i18n'
import { changeLocale } from '../../actions'
import { makeSelectLocale } from '../../selectors'
import msg from 'containers/LanguageProvider/messages'

const LocaleToggle = (props) => {
  const { locale, onLocaleToggle } = props
  return (
    <div>
      <Toggle
        value={locale}
        values={appLocales}
        messages={msg}
        onToggle={onLocaleToggle}
      />
    </div>
  )
}

LocaleToggle.propTypes = {
  locale: PropTypes.string,
  onLocaleToggle: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale()
})

const mapDispatchToProps = (dispatch) => ({
  onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle)
