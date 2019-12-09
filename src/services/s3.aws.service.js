import AWS from 'aws-sdk/index'
import filenamify from 'filenamify'

import { AWS as AWS_CONFIG } from 'utils/constants'

const S3AWSService = {
  init() {
    AWS.config.update({
      region: AWS_CONFIG.region,
      accessKeyId: AWS_CONFIG.accessKey,
      secretAccessKey: AWS_CONFIG.secretKey,
    })
    this.s3 = new AWS.S3({ apiVersion: '2006-03-01' })
  },
  generateName(length) {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    const time = new Date().getTime()
    return `${text}_${time}.jpg`
  },
  uploadBlobURL(file, handleProgress, folderURL) {
    return new Promise((resolve, reject) => {
      const self = this
      const params = { Bucket: AWS_CONFIG.bucketName, Key: '', Body: 'stream' }
      let nameFile = `${self.generateName(7)}`
      if (file && file.name) {
        const splitName = file.name.split('.')
        nameFile = `${filenamify(splitName[0])}_${new Date().getTime()}.${splitName.pop()}`
      }

      const xhr = new XMLHttpRequest()
      xhr.open('GET', file.imgUrl)
      xhr.responseType = 'blob'
      xhr.onload = function () {
        self.analyzeData(xhr.response)
          .then(() => {
            params.Body = file
            params.Key = folderURL ? `${folderURL}/${nameFile}` : `${nameFile}`
            self.s3.upload(params, (err, data) => {
              if (err) {
                reject(err)
              }
              if (data) {
                resolve({
                  imgUrl: data.key,
                  name: nameFile,
                  data
                })
              }
            }).on('httpUploadProgress', (evt) => {
              handleProgress(Math.ceil((evt.loaded * 100) / evt.total))
            })
          })
          .catch((error) => {
            reject(error)
          })
      }
      xhr.onerror = (error) => {
        reject(error)
      }
      xhr.send()
    })
  },

  analyzeData(blob) {
    return new Promise((resolve, reject) => {
      const myReader = new FileReader()
      myReader.onloadend = function () {
        resolve(this.result)
      }
      myReader.onerror = function (error) {
        reject(error)
      }

      myReader.readAsArrayBuffer(blob)
    })
  }
}

export default S3AWSService
