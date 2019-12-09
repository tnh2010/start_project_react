import React from 'react'
import { compose } from 'redux'

import { AuthLayout } from 'layouts'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import authReducer from './reducers'
import authSaga from './saga'

function AuthorContainer() {
  return (
    <AuthLayout className="AuthLayout">
      Implementing...
    </AuthLayout>
  )
}

const withReducer = injectReducer({
  key: 'auth',
  reducer: authReducer
})
const withSaga = injectSaga({
  key: 'auth',
  saga: authSaga
})

export default compose(withReducer, withSaga)(AuthorContainer)
