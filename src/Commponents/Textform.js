import React, { useState } from 'react'

function Textform() {
    const [text, setText] = useState('')

    const handelUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const handellowClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handelClearClick = () => {
        setText('')
    }
    const handelRemoveClick = () => {
        let newtext = text.trim().split(/ +/).join(' ')
        setText(newtext)
    }
    return (
        <>
         <div className='mt-5'>
                <h1>Enter text to Enalayse from TextUtils</h1>
                <textarea className='form-control' value={text} name='textarea' onChange={handelOnChange} rows={8}></textarea>
                <button className=' mt-4 mx-2 rainbow rainbow-1' onClick={handelUpClick}>Convert touppercase</button>
                <button className='my-2 mx-2 rainbow rainbow-2' onClick={handellowClick}>Convert tolowercase</button>
                <button className='my-2 mx-2 rainbow rainbow-3' onClick={handelClearClick}>Clear All text</button>
                <button className='my-2 mx-2 rainbow rainbow-4' onClick={handelRemoveClick}>Remove extra spasces</button>
                </div>
                <div className='container'>
                    <h1>Your text summery</h1>
                    <p>Word  {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} characters {text.length}</p>
                    <p>Read Time {0.20 * text.split(' ').length}</p>
                </div>
        
        
        
        </>
           
        

            )
}

            export default Textform
