let previousAction = null
let callPreviousAction = false

const handleRequestMiddleware = store => next => action => {
  const { type, payload = {} } = action

  if (type.includes('_REQUEST')) {
    previousAction = action
    callPreviousAction = true
  }

  if (type.includes('_SUCCESS') || type.includes('_FAIL')) {
    console.log('LOG:', payload)
    if (type.includes('_FAIL')) {
      console.log(store, previousAction, callPreviousAction)
    }
  }

  return next(action)
}

export default handleRequestMiddleware
