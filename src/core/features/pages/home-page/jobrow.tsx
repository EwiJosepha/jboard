import Image from 'next/image'
import React from 'react'
import spotify from "../../../../../public/assets/landingpage/images/spotify.png"

function Jobrow() {
  return (
    <div className=" flex flex-col gap-4">
      <div className=' bg-white p-6 rounded-md shadow-sm flex gap-4'>
        <div className='w-12 content-center'>
          <Image src={spotify} height={100} width={100} alt='job Icon' />
        </div>
        <div className='grow'>
          <p className=' text-gray-600 text-sm font-meduim'>Spotify</p>
          <p className='font-bold font-sans pb-1 text-lg'>Product Designer</p>
          <p className=' text-gray-600 text-xs'>Remote | New York, US | Full-time</p>
        </div>
        <div className='content-end text-gray-600 text-xs'>
         <p> 3 hours ago</p>
        </div>
      </div>
      <div className=' bg-white p-4 rounded-md shadow-sm flex gap-4'>
        <div className='w-12 content-center'>
          <Image src={spotify} height={100} width={100} alt='job Icon' />
        </div>
        <div className='grow'>
          <p className=' text-gray-600 text-sm font-meduim'>Spotify</p>
          <p className='font-bold font-sans pb-1 text-lg'>Product Designer</p>
          <p className=' text-gray-600 text-xs'>Remote | New York, US | Full-time</p>
        </div>
        <div className='content-end text-gray-600 text-xs'>
         <p> 3 hours ago</p>
        </div>
      </div>
    </div>
  )
}

export default Jobrow
