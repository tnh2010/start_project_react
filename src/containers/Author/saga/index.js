import { takeLatest } from 'redux-saga/effects'

function loginSaga() {
  try {
    console.log('Hi guy!')
  } catch (e) {
    console.log(e)
  }
}

export default function* authSaga() {
  yield takeLatest('LOGIN', loginSaga)
}
