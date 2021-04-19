import * as React from 'react'

export type QuilttContextType = {
  authorizationToken: string | undefined
  setAuthorizationToken: (token: string | undefined) => void
}

export const QuilttContext = React.createContext<QuilttContextType>({
  authorizationToken: undefined,
  setAuthorizationToken: (_token) => {}
})

export const useQuilttContext = () => {
  return React.useContext(QuilttContext)
}

export default useQuilttContext
