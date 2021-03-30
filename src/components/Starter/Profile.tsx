import React from 'react'
import { RouteComponentProps, Link } from "@reach/router"

import { gql } from '@apollo/client';
import useQuilttClient from '../../graphql/client'

export type ProfileProps = RouteComponentProps & {}

export const Profile: React.VFC<ProfileProps> = () => {
  const [session, setSession] = React.useState(
    localStorage.getItem('QUILTT_TOKEN')
  )

  const handleLogout = () => {
    setSession(null)
  }

  if(session) {
    return <LogoutButton session={session} onClick={handleLogout} />
  } else {
    return (
      <Link to="/auth" type="button"
            className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Sign in</Link>
    )
  }
}

export type LogoutButtonProps = RouteComponentProps & {
  session: string
  onClick?: () => void
}

export const LogoutButton: React.VFC<LogoutButtonProps> = ({ session, onClick }) => {
  const api = useQuilttClient(session)

  api.query({ query: PROFILE_QUERY }).then(
    result => console.log(result)
  )

  const handleClick = () => {
    localStorage.removeItem('QUILTT_TOKEN')

    if(onClick) onClick()
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Sign out
    </button>
  )
}


const PROFILE_QUERY = gql`
query {
  profile {
      id
      email
  }
}
`

export default Profile
