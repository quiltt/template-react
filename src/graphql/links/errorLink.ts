import { onError } from '@apollo/client/link/error'

export const useErrorLink = () => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map((error) => {
        console.log(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
        )
      })
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  })

  return errorLink
}

export default useErrorLink
