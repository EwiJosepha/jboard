"use client"
import React, { useState } from 'react'
import { data } from '@/core/components/atoms/accordionDummy'
import { Minus, Plus } from 'lucide-react'

function SingleAcc() {
  const [selected, setSelected] = useState([])
  const [enablemultiSelect, setEnableMultiSelect] = useState(false)

  function handleSingleClick(id) {
    if (enablemultiSelect) {
      if (selected.includes(id)) {
        setSelected(selected.filter((filtedId) =>
          filtedId !== id
        ))
      } else {
        setSelected([...selected, id])
      }
    } else {
      setSelected(id === selected[0] ? [] : [id])

    }
  }

  console.log(selected[0], "suppose to be an array");
  console.log(selected);



  function handleMultiSelect() {
    setEnableMultiSelect(true)
  }



  return (
    <div className='pt-10'>
      <button className='p-3 bg-black cursor-pointer  text-white items-center' onClick={handleMultiSelect}>Enable multiselection</button>
      {data.map((dataitem) => (
        <div className=" p-6 flex flex-col gap-4">


          <div className='flex flex-col  bg-red-900 p-6 cursor-pointer' onClick={() => handleSingleClick(dataitem.id)}>
            <div className='flex justify-between'>
              <h3 className='text-white'>{dataitem.title}</h3>
              {selected[0] === dataitem.id ? (
                <Minus className='text-white cursor-pointer' />

              ) : (
                <Plus className='text-white cursor-pointer' />


              )}
            </div>

            {selected?.includes(dataitem.id) ? <div className='text-white'>
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
