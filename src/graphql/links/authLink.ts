import { setContext } from '@apollo/client/link/context'

export const useAuthLink = (token: string) => {
  return setContext((_, { headers }) => {
    if(token) {
      headers['authorization'] = `Bearer ${token}`
    }

    return {
      headers: { ...headers }
    }
  })
}

export default useAuthLink
