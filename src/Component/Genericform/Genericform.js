import React from 'react'
import back from "../../assets/icons8-back-50.png"
import edit from '../../assets/icons8-edit-50.png'
function Genericform() {
  return (
    <>
  <div className='w-96 h-72 border-2 shadow rounded-md bg-white flex flex-col'>
    <div className='bg-blue-600 h-8 text-white font-bold flex justify-between items-center px-2'>
        <button type="submit">
            <img src={back} width="25px" alt="back" />
        </button>
        <div className='font-bold'>
            Generic Website Rating
        </div>
        <button type="submit">
            <img src={edit} width="25px" alt="edit" />
        </button>
    </div>

    <div className='flex-grow text-black font-bold flex justify-center items-center'>
        Add Fields
    </div>
</div>

    </>
  )
}

export default Genericform