import { ApolloLink } from '@apollo/client'
import { BatchHttpLink } from "@apollo/client/link/batch-http"

import useAuthLink from './authLink'
import useErrorLink from './errorLink'
import usePreviewLink from './previewLink'

const graphqlEndpoint = new URL('v1/graphql', 'https://api.quiltt.io')

const useQuilttLink = (token: string) => {
  const errorLink   = useErrorLink()
  const authLink    = useAuthLink(token)
  const previewLink = usePreviewLink(graphqlEndpoint.toString())
  const batchLink   = new BatchHttpLink({ uri: graphqlEndpoint.toString() });

  // errorLink -> authLink -> previewLink &-> httpLink
  //                                      |-> batchLink

  const quilttLink = ApolloLink.from([
    errorLink, authLink, previewLink, batchLink
  ])

  return quilttLink
}

export default useQuilttLink
