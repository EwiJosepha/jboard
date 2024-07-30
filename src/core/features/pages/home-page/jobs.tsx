import React from 'react'
import Jobrow from './jobrow'
import { Box, Flex, TextArea, TextField, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

function Jobs() {
  return (
    <>
      <div className='bg-gray-200 py-4 rounded-xl'>
        <div className='container'>
          <h2 className=' font-bold text-1xl'>Recent Jobs</h2>
          <Jobrow />
        </div>

      </div>
      <Flex direction="column" gap="3">
      <Theme className='flex flex-col gap-3 pt-10'>
        <TextField.Root placeholder="Job Title"  radius='large'/>
        <TextArea placeholder='job description '  resize={'vertical'} radius='large'/>
        </Theme>
      </Flex>
    </>
  )
}

export default Jobs
