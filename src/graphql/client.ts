import { ApolloClient, InMemoryCache } from '@apollo/client'

import useQuilttLink from './links/quilttLink'

export const useQuilttClient = (token: string) => {
  const quilttLink = useQuilttLink(token)

  return new ApolloClient({
    link: quilttLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
  })
}

export default useQuilttClient
