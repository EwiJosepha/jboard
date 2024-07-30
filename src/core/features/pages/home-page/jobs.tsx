"use client"
import React, { useState } from 'react'
import Jobrow from './jobrow'
import { Box, Button, Flex, RadioGroup, Slot, TextArea, TextField, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css";
import { DollarSign, Phone, User } from 'lucide-react';


function Jobs() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
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
          <TextField.Root placeholder="Job Title" radius='large' />
          <div className="flex  gap-3 ">
            <div className='flex flex-col gap-3 cursor-pointer  w-[35%]'>
              <div className=' bg-gray-100 border-1 border-b-bg-gray-100 rounded-md  h-40 flex flex-col items-center justify-center '>
                <span>Icon</span>
              </div>
              <Button>Select file</Button>
            </div>
            <div className='flex gap-8 w-[75%]'>
              <div className=' flex-flex-col gap-2 w-[30%]'>
                <div className=' bg-gray-100 border-1 border-b-bg-gray-100 rounded-md  h-40 flex  items-center justify-center'>
                  <User color={"gray"} size={25} />
                </div>
                 <div>
                 <Button>Select files</Button>
                 </div>
              </div>
              <div className="flex flex-col gap-3 grow">
                <TextField.Root placeholder='Your Name'>
                  <TextField.Slot>
                    <User />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder='Number..' type='tel'>
                  <TextField.Slot>
                    <Phone />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder='Your Email' type="email">
                  <TextField.Slot>
                    <User />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>

          </div>
          <div className=' grid grid-cols-3 gap-4'>
            <div>
              <p className='font-bold'>Remote?</p>
              <RadioGroup.Root defaultValue="1" name="example">
                <RadioGroup.Item value="1">on-site</RadioGroup.Item>
                <RadioGroup.Item value="2">Hybrid-remote</RadioGroup.Item>
                <RadioGroup.Item value="3">Fully-remote</RadioGroup.Item>
              </RadioGroup.Root>
            </div>
            <div>
              <p className='font-bold'>Full time?</p>
              <RadioGroup.Root defaultValue="1" name="example">
                <RadioGroup.Item value="1">Project</RadioGroup.Item>
                <RadioGroup.Item value="2">Part-time</RadioGroup.Item>
                <RadioGroup.Item value="3">Full-time</RadioGroup.Item>
              </RadioGroup.Root>
            </div>
            <div className='flex'>
              <TextField.Root>
                <TextField.Slot>
                  <DollarSign />
                </TextField.Slot>
                <TextField.Slot>
                  K/year
                </TextField.Slot>
              </TextField.Root>
            </div>
          </div>
          <div className=' grid grid-cols-3 gap-3'>
            <div>
              <h6>Country</h6>
              <CountrySelect
                onChange={(e: { id: React.SetStateAction<number>; }) => {
                  setCountryid(e.id);
                }}
                placeHolder="Select Country"
              />
            </div>
            <div>
              <h6>State</h6>
              <StateSelect
                countryid={countryid}
                onChange={(e: { id: React.SetStateAction<number>; }) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>
            <div>
              <h6>City</h6>
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e: any) => {
                  console.log(e);
                }}
                placeHolder="Select City"
              />
            </div>
          </div>
          <TextArea placeholder='job description ' resize={'vertical'} radius='large' />
        </Theme>
      </Flex>
    </>
  )
}

export default Jobs
