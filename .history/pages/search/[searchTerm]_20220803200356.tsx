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

    const accounts = showUserVideos ? 'border-b-2 border-black' : 'text-gray-400';
    const videos = !showUserVideos ? 'border-b-2 border-black' : 'text-gray-400';

  return (
    <div className='w-full' >
         <div className='flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full'>
          <p className={`text-xl font-semibold cursor-pointer ${videos} mt-2`} onClick={() => setShowUserVideos(true)}>
            Videos
          </p>
          <p className={`text-xl font-semibold cursor-pointer ${liked} mt-2`} onClick={() => setShowUserVideos(false)}>
            Liked
          </p>
        </div>
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