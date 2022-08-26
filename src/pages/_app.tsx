import '../styles/global.css'
import { AppProps } from 'next/app'


import { useState } from 'react'
import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
