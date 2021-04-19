import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { useQuilttClient } from './client'
import { QuilttContext } from './context'
import useLocalStorage from './useLocalStorage'

type QuilttProviderProps = {

}

export const QuilttProvider: React.FC<QuilttProviderProps> = ({
  children
}) => {
  const [authorizationToken, setAuthorizationToken] = useLocalStorage<string | undefined>('QUILTT_TOKEN', undefined)
  const quilttClient = useQuilttClient(authorizationToken)

  return (
    <QuilttContext.Provider value={{ authorizationToken, setAuthorizationToken }}>
      <ApolloProvider client={quilttClient}>
        {children}
      </ApolloProvider>
    </QuilttContext.Provider>
  )
}

export default QuilttProvider
