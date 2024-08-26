import React from 'react'
import like from '../../assets/vecteezy_like-feedback-icon_.jpg'
function Header() {
  return (
    <div className='bg-white w-full h-16 border-b-2 flex justify-start items-center'>
        <div>
            <img src={like} width="50px" alt="Logo"/>
        </div>
        <div className='text-gray-950 font-bold'>
           USER FEEDBACK
        </div>
    </div>
  )
}

export default Header