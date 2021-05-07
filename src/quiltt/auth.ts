import Axios from 'axios'

const ENDPOINT = "https://auth.quiltt.io/v1/session"
const CONFIG = {
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: (status: number) => status < 500
}

export type UsernamePayload = {
  email: string
}

export type PasswordPayload = {
  email: string
  password: string
}

export const useQuilttAuth = () => {
  const appId = process.env.REACT_APP_QUILTT_APP_ID

  const AuthAPI = {
    ping: () => {
      return Axios.get(ENDPOINT, CONFIG)
    },
    identify: (payload: UsernamePayload) => {
      return Axios.post(ENDPOINT, { user: payload, app_id: appId }, CONFIG)
    },
    authenticate: (payload: PasswordPayload) => {
      return Axios.put(ENDPOINT, { user: payload, app_id: appId }, CONFIG)
    }
  }

  return AuthAPI
}

export default useQuilttAuth
