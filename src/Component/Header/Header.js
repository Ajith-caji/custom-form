import React from 'react'
import like from '../../assets/vecteezy_like-feedback-icon_.jpg'

import { useLocation } from 'react-router-dom'
function Header() {
  const location = useLocation();
  return (
   
   
    <div className='bg-white w-full h-16 border-b-2 flex items-center justify-between px-4'>
    <div className='flex items-center'>
      <div>
        <img src={like} width="50px" alt="Logo"/>
      </div>
      <div className='text-gray-950 font-bold ml-2'>
        USER FEEDBACK
      </div>
    </div>
    {location.pathname === '/main' && (

    <div className='flex space-x-2'>
      <button className='bg-blue-500 text-white font-bold py-1 px-3 rounded-sm'>
        Edit
      </button>
      <button className='bg-green-700 text-white font-bold py-1 px-3 rounded-sm'>
        Publish
      </button>
    </div>
    )} 
  </div>
  
 
  )
}

export default Header