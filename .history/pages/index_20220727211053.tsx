import type { NextPage } from 'next'
import axios from 'axios';

const Home: NextPage = () => {
  return (
 <h1 className='text-3x1 font-bold underline' >
  
 </h1>
  )
}

export const getServerSideProps=async()=>{
  const response= await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name)

  return{
    props:{}
  }

}

export default Home
