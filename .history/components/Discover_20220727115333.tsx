import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {topics} from '../utils/constants'


const Discover = () => {
  return (
    <div className='xl:border b-2 xl:border-gray-200 pb-6' >
        <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block' > 
            Popular topics
        </p>
    </div>
  )
}

export default Discover