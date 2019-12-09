import S3AWSService from './s3.aws.service'

const uploadImagesToS3 = (data, handleProgress, folderURL) => new Promise((resolve, reject) => {
  S3AWSService.init()
  S3AWSService.uploadBlobURL(data, handleProgress, folderURL)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
})

export default uploadImagesToS3
