import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoVerified } from 'react-icons/go'
import useAuthStore from '../store/authStore'
import NoResults from './NoResults';

const Comments = () => {

  const {userProfile}=useAuthStore()
  const comments=[];

  return (
    <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#f8f8f8] border-b-2 lg:pb-0 pb-[100px]' >
      <div className='overflow-scroll lg:h-[475px]' >
        {comments.length ? (
          <div>videos</div>
        ): (
          <NoResults text='No comments yet!' />
        )}
      </div>

          {userProfile && (
            <div className='absolute botton-0 left-0 pb-6 px-2 md:px-10 ' >
                <form onSubmit={()=>{}} className='flex gap-4' >
                  <input 
                  value=''
                  onChange={()=>{}}
                  placeholder='add a comment...'
                  className='bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] '
                  />
                </form>
            </div>
          )}

    </div>
  )
}

export default Comments