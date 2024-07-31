"use client"
import React, { useState } from 'react'
import { data } from '@/core/components/atoms/accordionDummy'
import { Divide, Plus } from 'lucide-react'

function SingleAcc() {
  const [selected, setSelected] = useState(null)
  const[enablemultiSelect, setEnablemultiSelect] = useState(false)
  const[multipleSelectArray, setMultiSelectArray] = useState([])

  function handleSingleClick(id) {
    setSelected(id === selected ? "" : id)
  }

  function handlmulti () {
  setEnablemultiSelect(true)
  
   
  }

  return (
    <div className='pt-10'>
           <button className='p-3 bg-black cursor-pointer  text-white items-center' onClick={()=>{handlmulti}}>Enable multiselection</button>
      {data.map((dataitem) => (
        <div className=" p-6 flex flex-col gap-4">
     

          <div className='flex flex-col  bg-red-900 p-6 cursor-pointer' onClick={() => handleSingleClick(dataitem.id)}>
            <div className='flex justify-between'>
              <h3 className='text-white'>{dataitem.title}</h3>
              <Plus className='text-white cursor-pointer' />
            </div>
            {selected === dataitem.id ? <div className='text-white'>
              {dataitem.description}
            </div> :
              null
            }
          </div>

        </div>
      ))}
    </div>
  )
}

export default SingleAcc
