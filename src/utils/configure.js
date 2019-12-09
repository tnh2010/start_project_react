import CookieHelper from 'js-cookie'

import ApiService from './axios'
import { COOKIE_NAME } from './constants'

ApiService.init()
const token = CookieHelper.get(COOKIE_NAME)

if (!!token) {
  ApiService.setHeader(token)
}
