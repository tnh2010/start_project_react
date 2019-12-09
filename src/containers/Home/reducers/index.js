import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  isSubmitting: false,
  isSubmittedEmail: false,
  error: null,
})

function authorReducer(state = initialState, action) {
  switch (action.type) {
    case 'ERROR':
      return state.set('error', null)
  }
}

export default authorReducer
