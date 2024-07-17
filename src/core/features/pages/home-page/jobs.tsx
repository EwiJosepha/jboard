import React from 'react'
import Jobrow from './jobrow'

function Jobs() {
  return (
    <div className='bg-gray-200 py-4 rounded-xl'>
      <div className='container'>
        <h2 className=' font-bold text-1xl'>Recent Jobs</h2>
        <Jobrow />
      </div>
    </div>
  )
}

export default Jobs
