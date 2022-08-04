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

  
  const {userProfile,addUser,removeUser}=useAuthStore();
  
  const handleSearch=()=>{

  }



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
        <div className='relative hidden md:block' >
          <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 left-20 bg-white '
          >
            <input
            type='text'
            value=''
            onChange={()=>{}}
            placeholder='Search accounts and videos'
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0 '
            />
            <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl'
            >
              <BiSearch/>
            </button>
          </form>
        </div>
        <div>
          {userProfile ? (
              <div className='flex gap-5 md:gap-10' >
                <Link href='upload' >
                <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2' >
                  <IoMdAdd className='text-2x1' />{` `}
                  <span className='hidden md:block' >Upload</span>
                </button>
                </Link>
                {userProfile.image && (
                  <Link href='/'>
                  <>
                  <Image
                  width={40}
                  height={40}
                  className='rounded-full cursor-pointer '
                  src={userProfile.image}
                  alt='profile photo' 
                  />
                  </>
              </Link>
                )}
                <button
                type='button'
                  className='px-2'
                  onClick={()=>{
                    googleLogout();
                    removeUser();
                  }}
                >
                  <AiOutlineLogout color='red' fontSize={25} />
                </button>
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