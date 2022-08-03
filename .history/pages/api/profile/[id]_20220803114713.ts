
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { singleUserQuery,userCreatedPostsQuery,userLikedPostsQuery } from '../../../utils/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method==='GET'){
       
      const {id}= req.query;

      const query=singleUserQuery(id);
      const userVideosQuery=userCreatedPostsQuery(id)
      const userLikesQuery=userLikedPostsQuery(id)

      const user=await client.fetch(query)

      res.status(200).json(user)
    }
  
} 
  






