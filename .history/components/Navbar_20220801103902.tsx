import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import Logo from '../utils/tiktik-logo.png'
import { GoogleLogin,googleLogout } from '@react-oauth/google'
import { createOrGetUser } from '../utils'
import useAuthStore from '../store/authStore';

const Navbar = () => {

 const user=false
  const {userProfile,addUser}=useAuthStore();


  return (
    <div className='w-full flex justify-between items-center border-b-2  border-gray-200 py-2 px-4' >
        <Link href='/' >
            <div className='w-[100px] md:w-[130px] ' >
                <Image
                className='cursor-pointer'
                src={Logo}
                alt='tiktik'
                layout='responsive'
                />
            </div>
        </Link>
        <div>
          Search
        </div>
        <div>
          {userProfile ? (
              <div className='flex gap-5 md:gap-10' >
                <Link href='/' >
                <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2' >
                  <IoMdAdd className='text-x1' />{` `}
                  <span className='hidden md:block' >Upload</span>
                </button>
                </Link>
                {userProfile.image && (
                  <Link href=''>
                  <>
                  <Image
                  width={62}
                  height={62}
                  className='rounded-full'
                  src={userProfile.image}
                  alt='profile photo' 
                  layout='responsive'
                  />
                  </>
              </Link>
                )}
              </div>
            ):(
            <GoogleLogin
            onSuccess={(response)=>createOrGetUser(response,addUser)}
            onError={()=>console.log('error')}
            />
          )
        
        
        }
        </div>
    </div>
  )
}

export default Navbar