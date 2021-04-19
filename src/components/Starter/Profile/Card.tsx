import React from 'react'
import { RouteComponentProps } from "@reach/router"

import { gql } from '@apollo/client'
import { useQuilttContext } from '../../../quiltt'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export type ProfileCardProps = RouteComponentProps & {

}

export const ProfileCard: React.VFC<ProfileCardProps> = () => {
  const { authorizationToken } = useQuilttContext()

  if(authorizationToken) {
    return <LogoutButton />
  } else {
    return <LoginButton />
  }
}

const PROFILE_QUERY = gql`
query {
    profile {
        id
        email
    }
}
`

export default ProfileCard
