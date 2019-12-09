import toastr from 'toastr'

import msg from 'translations/toastMsg'
import { trans } from 'containers/LanguageProvider/IntlGlobalProvider'

let instance = null

class NotificationHelper {
  constructor() {
    if (!instance) {
      this.config()
      instance = this
    }

    return instance
  }

  config = () => {
    this.toastr = toastr
    this.toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      preventDuplicates: true,
      preventOpenDuplicates: true,
      updateTimerOnDuplicates: true,
      onclick: null,
      hideDuration: 0,
      showDuration: 300,
      timeOut: 5000,
      extendedTimeOut: 1000,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
      tapToDismiss: false,
      positionClass: 'toast-bottom-right'
    }
  }

  success = (message, title = trans(msg.success)) => {
    this.toastr.success(message, title)
  }

  info = (message, title = trans(msg.info)) => {
    this.toastr.info(message, title)
  }

  warning = (message, title = trans(msg.warning), option = {}) => {
    this.toastr.warning(message, title, option)
  }

  error = (message, title = trans(msg.error)) => {
    this.toastr.error(message, title)
  }

  show = (key, data) => {
    switch (key) {
      case 'SUCCESS': {
        const { message } = data
        this.toastr.success(message)
        break
      }
      default:
        break
    }
  }
}

export default new NotificationHelper()
