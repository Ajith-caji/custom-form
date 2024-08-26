import React from 'react'
import note from '../../assets/note.png'
function Existingcard() {
  return (
    <div className='bg-white w-64 border-2 shadow-lg rounded-md'>
    <div className='bg-yellow-500 w-full h-20 flex justify-center items-center rounded-t-md'>
        <img src={note} alt="Icon" /> 
    </div>

    <div className='p-5'>
        <div className='text-lg font-semibold'>
            Delivery
        </div>

        <div className='flex justify-between w-full mt-2'>
            <div>
                Submitted
            </div> 
            <div>
                10
            </div> 
        </div>

        <div className='flex justify-between w-full mt-2'>
            <div>
                Viewed
            </div> 
            <div>
                55
            </div> 
        </div>

        <div className='flex justify-between w-full mt-2'>
            <div>
                Date Published
            </div> 
            <div>
                8/8/2024
            </div> 
        </div>

        <div className='flex justify-center items-center mt-3'>
            <button className='bg-fuchsia-600 text-white rounded-md w-52 h-8 flex justify-center items-center' type='submit'>
                VIEW SUBMISSION
            </button>
        </div>

        <div className='flex justify-between items-center mt-3'>
            <button className='bg-green-600 text-white rounded-md w-24 h-8 flex justify-center items-center' type='submit'>
                EDIT
            </button>
            <button className='bg-blue-700 text-white rounded-md w-24 h-8 flex justify-center items-center' type='submit'>
                DELETE
            </button>
        </div>
    </div>
</div>
  )
}

export default Existingcard