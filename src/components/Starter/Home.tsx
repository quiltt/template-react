import React from 'react'
import { RouteComponentProps, Link } from "@reach/router"

import Links from './Links'
import Logo from '../Logo'

export type HomeProps = RouteComponentProps & {}

export const Home: React.VFC<HomeProps> = () => {
  return (
    <div className="text-center">
      <header className="bg-gray-300 dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col items-center justify-center">
        <Logo className="fill-current pointer-events-none max-h-96" />
        <p className="text-3xl">
          Edit <code className="font-mono bg-gray-400 dark:bg-gray-700">src/App.tsx</code> and save to reload.
        </p>

        <Link to="/auth" type="button"
              className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Sign in</Link>

        <Links />
      </header>
    </div>
  )
}

export default Home
