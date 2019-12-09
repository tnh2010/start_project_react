import Loadable from 'react-loadable'

import Loading from 'components/Loading'

export default function MyLoadable(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        // timeout: 5000,
      },
      opts
    )
  )
}
