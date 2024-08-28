import React from 'react'

function Data() {
     const cssQue = `text-black text-sm font-normal`;
     const cssAns = `text-stone-600 text-sm`
  return (
    <div>
        <div>

        <div className={cssQue}>
            Would you like to add comment ?
        </div>
        <div className={cssAns}>
            Answer
        </div>
        </div>
        <div>

<div className={cssQue}>
    How likely you recommed us to family or friends ?
</div>
<div className={cssAns}>
    Answer
</div>
</div>
<div>

<div className={cssQue}>
  Giving star rating to website.
</div>
<div className={cssAns}>
    Answer
</div>
</div>
<div>

<div className={cssQue}>
   Do you have any suggestion to improve our website ?
</div>
<div className={cssAns}>
    Answer
</div>
</div>
<div>

<div className={cssQue}>
    Multiple choice
</div>
<div className={cssAns}>
    Answer
</div>
</div>
<div>

<div className={cssQue}>
   Pick a subject and provide your feedback
</div>
<div className={cssAns}>
    Answer
</div>
</div>
    </div>
  )
}

export default Data