import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useState,useEffect } from 'react'




const MyApp=({ Component, pageProps }: AppProps)=> {
  return <Component {...pageProps} />
}

export default MyApp
