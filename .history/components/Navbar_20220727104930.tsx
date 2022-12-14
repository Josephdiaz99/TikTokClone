import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin,GoogleLogout } from 'react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import Logo from '../utils/tiktik-logo-png'

const Navbar = () => {
  return (
    <div>
        <Link>
            <div>
                <Image
                className='cursor-pointer'
                src={Logo}
                />
            </div>
        </Link>
    </div>
  )
}

export default Navbar