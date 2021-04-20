import React from 'react'
import { RouteComponentProps } from "@reach/router"

import { useQuilttContext } from '../../../quiltt'
import PlaidLinkButton from '../BankConnection/PlaidLinkButton'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Summary from './Summary'

export type ProfileCardProps = RouteComponentProps & {

}

export const ProfileCard: React.VFC<ProfileCardProps> = () => {
  const { authorizationToken } = useQuilttContext()

  if(authorizationToken) {
    return <>
      <Summary />
      <PlaidLinkButton />
      <LogoutButton />
    </>
  } else {
    return <LoginButton />
  }
}

export default ProfileCard
