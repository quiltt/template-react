import { onError } from '@apollo/client/link/error'
// import { invalidateSession } from '../components/AppProvider'

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
      // @see: https://www.apollographql.com/docs/react/networking/advanced-http-networking/#customizing-response-logic
      // if (networkError.statusCode === 401) {
      //   invalidateSession()
      // }
      console.log(`[Network error]: ${networkError}`)
    }

    // Optionally, set response.errors to null to ignore the captured errors
    // at the component level. Omit this if you still want component-specific handling
    // response.errors = null;
  })

  return errorLink
}

export default useErrorLink
