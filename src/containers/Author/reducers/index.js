import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  isLoggedIn: false,
  error: null
})

function authorReducer(state = initialState, action) {
  switch (action.type) {
    case 'ERROR':
      return state.set('error', action.payload.error)
    default:
      return state
  }
}

export default authorReducer
