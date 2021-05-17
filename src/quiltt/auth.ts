import Axios from 'axios'

const ENDPOINT = "https://auth.quiltt.io/v1/users/session"
const CONFIG = {
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: (status: number) => status < 500
}

export type UsernamePayload = {
  email: string
}

export type PasscodePayload = {
  email: string
  passcode: string
}

export const useQuilttAuth = () => {
  const appId = process.env.REACT_APP_QUILTT_APP_ID

  const AuthAPI = {
    ping: () => {
      return Axios.get(ENDPOINT, CONFIG)
    },
    identify: (user: UsernamePayload) => {
      return Axios.post(ENDPOINT, { app_id: appId, user: user }, CONFIG)
    },
    authenticate: (user: UsernamePayload, passcode: string) => {
      return Axios.put(ENDPOINT, { app_id: appId, user: user, passcode: passcode }, CONFIG)
    }
  }

  return AuthAPI
}

export default useQuilttAuth
