const CookieHelper = {
  setCookie(name, value, minutesExpired) {
    const date = new Date()
    date.setMinutes(date.getMinutes() + minutesExpired)
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value};${expires};path=/`
  },

  removeCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  },

  getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()
        .split(';')
        .shift()
    }
    return ''
  },

  checkCookie(name) {
    const user = this.getCookie(name)
    if (user !== '' && user !== null) {
      return true
    }
    return false
  }
}

export default CookieHelper
