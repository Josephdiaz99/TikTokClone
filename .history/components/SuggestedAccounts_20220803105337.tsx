import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect} from 'react'
import { GoVerified } from 'react-icons/go'
import useAuthStore from '../store/authStore'


const SuggestedAccounts = () => {

  const {fetchAllUsers,allUsers}=useAuthStore()

  useEffect(() => {
    
  
    
  }, [])
  

  return (
    <div>SuggestedAccounts</div>
  )
}

export default SuggestedAccounts