import React from 'react'
import plus from '../../assets/plus-button.png'
import { Switch, } from '@mui/material'
function Dashboard() {
  return (
    <div className='bg-white shadow-md border-2 w-64 h-screen '>
        <div className='text-black font-bold flex text-xl m-2'>
            Add Fields
        </div>
     <div>
 <div className='flex justify-between m-4 text-black font-bold'>

        <div className=''>
            Textarea
        </div>
        <div>
        <img src={plus} width="22px" alt="edit" />

        </div>
 </div>
 <div className='flex justify-between m-4 text-black font-bold'>

<div className=''>
    Numeric Rating
</div>
<div>
<img src={plus} width="22px" alt="edit" />

</div>
</div>
<div className='flex justify-between m-4 text-black font-bold'>

<div className=''>
    Star Rating
</div>
<div>
<img src={plus} width="22px" alt="edit" />

</div>
</div>
<div className='flex justify-between m-4 text-black font-bold'>

<div className=''>
    Smiley Rating
</div>
<div>
<img src={plus} width="22px" alt="edit" />

</div>
</div>
<div className='flex justify-between m-4 text-black font-bold'>

<div className=''>
    Single Line Input
</div>
<div>
<img src={plus} width="22px" alt="edit" />

</div>
</div>
<div className='flex justify-between m-4 text-black font-bold'>

<div className=''>
    Radio
</div>
<div>
<img src={plus} width="22px" alt="edit" />

</div>
</div>
<div className='flex justify-between m-4 text-black font-bold'>

<div className=''>
    Categories
</div>
<div>
<img src={plus} width="22px" alt="edit" />

</div>
</div>
     </div>
     <div className='text-black font-bold flex text-xl m-2'>
            Add Logic
        </div>
        <div className='flex justify-between items-center m-2'>

       <div>
        Show based on url
       </div>
       <div>
       <Switch />
       </div>
        </div>
        <div>
            <input type="text" className='m-2 w-48 border-b-2 border-black'/>
        </div>
        <div className='flex justify-between items-center m-2'>

<div>
 Show Specific Date
</div>
<div>
<Switch />
</div>
 </div>
 <div>
     <input type="date" className='m-2 w-48 border-b-2 border-black'/>
 </div>
 <div className='flex justify-between items-center m-2'>

<div>
 Show based specific Time
</div>
<div>
<Switch />
</div>
 </div>
 <div>
     <input type="time" className='m-2 w-48 border-b-2 border-black'/>
 </div>
    </div>
  )
}

export default Dashboard