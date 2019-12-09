import { map } from 'lodash'

import { AWS } from './constants'
import NoImage from '../assets/image/no-photo.png'
import userImage from '../assets/image/avatarIcon.jpg'


const getS3ImageURL = (url, isUser) => (url ? `https://${AWS.bucketName}.s3.${AWS.region}.amazonaws.com/${url}` : (isUser ? userImage : NoImage))

const formatNumber = num => `${num}`.replace(/(.)(?=(\d{3})+$)/g, '$1,')

const round = (n) => Math.round(parseFloat(n) * 1000) / 1000

function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email)
    .toLowerCase())
}

export {
  validateEmail,
  round,
  getS3ImageURL,
  formatNumber
}
