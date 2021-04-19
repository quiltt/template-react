import * as React from 'react'

import { gql, useQuery } from '@apollo/client'

const GET_PROFILE = gql`
query {
    profile {
        id
        email
    }
}
`

export type SummaryProps = {

}

export const Summary: React.VFC<SummaryProps> = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);

  if(loading) return <p>Loading...</p>
  if(error) throw error

  return <p>{ data.profile.email }</p>
}

export default Summary
