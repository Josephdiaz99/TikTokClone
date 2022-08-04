import axios from 'axios';
import {Video}from '../types'
import NoResults from '../components/NoResults';
import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
interface IProps{
  videos:Video[]
}


const Home=  ({videos}:IProps) => {
  console.log(videos)
  return (
 <div className='flex flex-col gap-10 videos h-full' >
  {videos.length ? (
    videos.map((video:Video)=>(
      <VideoCard post={video} key={video._id} />
    ))
  ):(
        <NoResults text={'No videos'} />
      )
}
 </div>
  )
}


export const getServerSideProps=async({
  query:{topic}
}:{
  query:{topic:string}
})=>{
  let response=null
  if(topic){
    
    response= await axios.get(`${BASE_URL}/api/discover/${topic}`);

  }else{
    response= await axios.get(`${BASE_URL}/api/post`);
  }



  return{
    props:{
      videos:data
  }
  }

}

export default Home
