export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount'
export const DAEMON = '@@saga-injector/daemon'
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount'

export const MIX_BASE_API_URL = process.env.BASE_API_URL

export const COOKIE_NAME = 'user_token'

export const AWS = {
  poolId: process.env.POOL_ID,
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_ACCESS_KEY,
  iotHost: process.env.IOT_HOST,
  region: process.env.REGION,
  roleArn: process.env.ROLE_ARN,
  awsIotPolicyName: process.env.AWS_IOT_POLICY_NAME,
  bucketName: process.env.BUCKET_NAME,
}
