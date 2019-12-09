import React from 'react'
import cls from 'classnames'
import PropTypes from 'prop-types'

function Loading({ isLoading }) {
  const _classNames = cls('Loading', { show: isLoading })

  return (
    <div className={_classNames}>
      <div className="wrapper">
        <span className="fa fa-spin fa-spinner"/>
      </div>
    </div>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
}

export default Loading
