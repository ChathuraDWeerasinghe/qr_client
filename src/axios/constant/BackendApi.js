// SERVER URL
const IP_URL = 'http://16.171.17.70:3001';

// URIs
export const BACKEND_API = {
  // AUTHENTICATION API'S
  SIGNUP: IP_URL + '/auth/register',
  LOGIN: IP_URL + '/auth/login',
  LOGOUT: IP_URL + '',
  GENERATE_QR: IP_URL + '/auth/qr',
  GENERATE_PIN: IP_URL + '/auth/generatePin',
  VERIFY_PIN: IP_URL + '/auth/verifyPin',

  // FORGOT PWD API'S
  VERIFY_EMAIL: IP_URL + '/reset/verifyEmail',
  VERIFY_OTP: IP_URL + '/reset/verifyOtp',
  RESET_PWD: IP_URL + '/reset/resetPwd'
};
