"use client"

import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QrCodeGenerator() {
  const [value, setValue] = useState("")
  const [code, setCode] = useState("")

  function handleChange(e:any) {
    setValue(e.target.value)
  }

  function handleGenerate() {
    setCode(value)
    setValue("")
  }

  console.log(value," va");
  

  return (
    <div>
      <div>
        <h1>QR code Generator.</h1>
        <div className='p-6'>
          <input type='text' name='qr-code' value={value} placeholder='enter your value here' onChange={handleChange} className='border-2 border-b-gray-400 p-2' />
          <button disabled={value && value.trim() === "" ? true : false} onClick={handleGenerate} className='p-2 border-2 border-b-gray-400'>Generator</button>
        </div>
      </div>
      <div>
        <QRCode value={code} size={400} bgColor='#fff' />
      </div>
    </div>
  )
}

export default QrCodeGenerator
