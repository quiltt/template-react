import * as React from 'react'
import { useQuilttContext } from '../../../quiltt'
import { RouteComponentProps } from "@reach/router"

export type LogoutButtonProps = RouteComponentProps & {
}

export const LogoutButton: React.VFC<LogoutButtonProps> = () => {
  const { setAuthorizationToken } = useQuilttContext()

  const handleClick = () => {
    setAuthorizationToken(undefined)
  }

  return <button onClick={handleClick} type="button"
        className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >Sign out</button>
}

export default LogoutButton
