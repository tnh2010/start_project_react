import LazyLoading from 'components/LazyLoading'

export default LazyLoading({
  loader: () => import('./view'),
})
