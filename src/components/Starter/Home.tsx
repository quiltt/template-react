import React from 'react'
import { RouteComponentProps } from "@reach/router"

import Links from './Links'
import Logo from '../Logo'
import ProfileCard from './Profile/Card'

export type HomeProps = RouteComponentProps & {}

export const Home: React.VFC<HomeProps> = () => {
  return (
    <div className="text-center">
      <header className="bg-gray-300 dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col items-center justify-center">
        <Logo className="fill-current pointer-events-none max-h-96" />
        <p className="text-3xl">
          Edit <code className="font-mono bg-gray-400 dark:bg-gray-700">src/App.tsx</code> and save to reload.
        </p>

        <ProfileCard />

        <Links />
      </header>
    </div>
  )
}

export default Home
