"use client"
import { Button, Flex, RadioGroup, TextArea, TextField, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css";
import { DollarSign, Phone, User } from 'lucide-react';


import React, { useState } from 'react'

const [countryid, setCountryid] = useState(0);
const [stateid, setstateid] = useState(0);
function PostJob() {
  return (
    <div>

      <Flex direction="column" gap="3">
        <Theme className='flex flex-col gap-3 pt-10'>
          <TextField.Root placeholder="Job Title" radius='large' />

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
          <div className="grid grid-cols-3  gap-3 ">
            <div className='flex flex-col gap-2 cursor-pointer'>
              <div className=' bg-gray-100 border-1 border-b-bg-gray-100 rounded-md  h-40 flex flex-col items-center justify-center '>
                <span>Icon</span>
              </div >
              <Button variant='soft'>Select file</Button>
            </div>

            <div className=' flex flex-col gap-2'>
              <div className=' bg-gray-100 border-1 border-b-bg-gray-100 rounded-md  h-40 flex  items-center justify-center'>
                <User color={"gray"} size={25} />
              </div>
              <Button variant='soft'>Edit Profile</Button>
            </div>

            <div className="flex flex-col gap-4 grow">
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
          <TextArea placeholder='job description ' resize={'vertical'} radius='large' />
          <div className='flex justify-center'>
            <Button size={"3"}>Save</Button>
          </div>
        </Theme>
      </Flex>
    </div>
  )
}

export default PostJob

