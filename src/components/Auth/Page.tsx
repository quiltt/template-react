import * as React from 'react'
import { useQuilttContext } from '../../quiltt'
import { RouteComponentProps } from '@reach/router'
import Logo from '../Logo'
import Username from './Username'
import Passcode from './Passcode'

export type AuthPageProps = RouteComponentProps & {}

export const AuthPage: React.VFC<AuthPageProps> = ({ navigate }) => {
  const { setAuthorizationToken } = useQuilttContext()
  const [email, setEmail] = React.useState<string>()

  const handleIdentification = (email: string) => {
    setEmail(email)
  }

  const handleAuthentication = (token: string) => {
    setAuthorizationToken(token)

    if(navigate) navigate("/")
  }

  const loginForm = () => {
    if(!email) {
      return <Username onAuthentication={handleAuthentication} onIdentification={handleIdentification} />
    } else {
      return <Passcode onAuthentication={handleAuthentication} email={email} />
    }
  }

  return (
    <div className="bg-gray-300 dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo className="mx-auto w-auto fill-current pointer-events-none max-h-36" />
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
        </div>

        { loginForm() }
      </div>
    </div>
  )
}

export default AuthPage
