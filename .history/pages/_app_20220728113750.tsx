import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { GoogleOAuthProvider } from '@react-oauth/google'

const MyApp=({ Component, pageProps }: AppProps)=> {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {

    setIsSSR(false)
    
   
  },[])
  
  if(isSSR) return null;

  return(

    <GoogleOAuthProvider clientId={'395043614595-ej22r9f8f7ph5dnn2p19gi4jpm522dik.apps.googleusercontent.com'} >
      <Navbar/>
      <div className='flex gap-6 md:gap-20' > 
        <div className='h-[92vh] overflow-hidden x1:hover:overflow-auto' >
          <Sidebar/>
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 ' >
      <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>

    ) 
}

export default MyApp
