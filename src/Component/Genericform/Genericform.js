import React, { useContext, useRef } from 'react'
import back from "../../assets/icons8-back-50.png"
import edit from '../../assets/icons8-edit-50.png'
import Field from '../Fields/Field'
import { Inputcontext } from '../Store/Inputcontext';
function Genericform() {

  const { visibleFields } = useContext(Inputcontext);
 const singleInput= useRef()
 const textarea =useRef()
//  function handleSubmit(){
//   const enteredTitle = singleInput.current.value
//  }
  return (
    <>
  <div className='w-96 border-2 shadow rounded-md bg-white flex flex-col h-auto'>
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

    {/* <div className='flex-grow text-black font-bold flex justify-center items-center'>
        Add Fields
    </div> */}
    {visibleFields.singleLineInput && <Field ref={singleInput}type ="text"/>}
    {visibleFields.radio && <Field type ="radio"/>}
    {visibleFields.textarea && <Field ref={textarea}type ="textarea"/>}
    {visibleFields.starRating && <Field type ="star"/>}
    {visibleFields.smileyRating && <Field type ="smiley"/>}
</div>

    </>
  )
}

export default Genericform