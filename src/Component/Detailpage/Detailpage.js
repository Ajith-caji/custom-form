import React from 'react'
import back from "../../assets/icons8-back-50.png"
import Feedbacklist from './Feedbacklist'

function Detailpage() {
  return (
    <div className='container mt-3'>

    <div className='bg-white border-2 rounded-md overflow-auto' style={{height:"640px",}}>
      <div className='bg-blue-600 h-8 text-white font-bold flex justify-between items-center px-2 rounded-md'>
        <button type="submit">
            <img src={back} width="25px" alt="back" />
        </button>
        <div className='font-bold'>
            Generic Website Rating
        </div>
        <div>
          Created Date: 27/08/2024
        </div>
    </div>
    <div className='flex justify-start items-center mx-20 mt-5'>

   
    <div className='mx-4 text-center'>

    <div className='font-extrabold text-black text-2xl'>
      40
    </div>
    <div className='font-medium text-stone-600'>
      VIEWS
    </div>
    </div>
    <div className='mx-4 text-center'>

<div className='font-extrabold text-black text-2xl'>
  3
</div>
<div className='font-medium text-stone-600'>
  SUBMITTED
</div>
</div>
</div>
<div className='mx-4 font-normal mt-2'>
  <div>
    Page URL 
  </div>
  <div>
   Date
  </div>
  <div>
   Time
  </div>
</div>
<div className='font-bold mx-4 text-black'>
  Feedback List
</div>
<Feedbacklist />
    </div>
    </div>
  )
}

export default Detailpage