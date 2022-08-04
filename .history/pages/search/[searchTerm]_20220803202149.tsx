import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { IUser, Video } from '../../types';
import { BASE_URL } from '../../utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuthStore from '../../store/authStore';


const Search = ({videos}:{videos:Video[]}) => {

    const [isAccounts, setIsAccounts] = useState(false)
    const router=useRouter();
    const {searchTerm}:any=router.query
    const {allUsers} = useAuthStore()

    const accounts = isAccounts ? 'border-b-2 border-black' : 'text-gray-400';
    const isVideos = !isAccounts ? 'border-b-2 border-black' : 'text-gray-400';
    const searchedAccounts=allUsers.filter((user:IUser)=>user.userName.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className='w-full' >
         <div className='flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full'>
          <p className={`text-xl font-semibold cursor-pointer ${accounts} mt-2`} onClick={() => setIsAccounts(true)}>
            Accounts
          </p>
          <p className={`text-xl font-semibold cursor-pointer ${videos} mt-2`} onClick={() => setIsAccounts(false)}>
            Videos
          </p>
        </div>
        {isAccounts ? (
            <div className='md:mt-16' >
                {searchedAccounts.length > 0 ? (
                    searchedAccounts.map((user:IUser,idx:number)=>(
                        <Link href={`/profile/${user._id}`}>
                        <div className='flex items-start gap-3'>
                          <div className=''>
                            <Image
                              width={50}
                              height={50}
                              className='rounded-full cursor-pointer'
                              src={user.image}
                              alt='user-profile'
                              layout='responsive'
                            />
                          </div>

                          <p className='flex cursor-pointer gap-1 items-center text-[18px] font-bold leading-6 text-primary'>
                            {user.userName}{' '}
                            <GoVerified className='text-blue-400' />
                          </p>
                        </div>
                      </Link>
                    ))
                )
                :
                <NoResults text={`No video results for ${searchTerm}`} />
            }
            </div>
        )
            : (
                <div className='md:mt-16 flex flex-wrap gap-6 md:justify-start' >
                    {videos.length ? (
                        videos.map((video:Video,idx)=>(
                            <VideoCard post={video} key={idx} />
                        ))
                    )
                    
                    : 
                        <NoResults text={`No video results for ${searchTerm}`} />
                    
                }
                </div>
            )
    }
    </div>
  )


}


export const getServerSideProps = async ({
    params: { searchTerm },
  }: {
    params: { searchTerm: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${searchTerm}`);
  
    return {
      props: { videos: res.data },
    };
  };
export default Search