'use client'

import Button from '@/components-react-nex/Button/Button'
import Card from '@/components-react-nex/Card/Card'
import CardBody from '@/components-react-nex/Card/CardBody'
import Input from '@/components-react-nex/Input/Input'
import { Select, Popover, SelectHeader, SelectContent, SelectList, SelectItem } from '@/components-react-nex/Select/Select'
import React, { useState } from 'react'

const MeetingJoinCard = () => {
  const [joinUrl, setJoinUrl] = useState('')
  const [meetingName, setMeetingName] = useState('')
  const [selectedValue, setSelectedValue] = useState('English');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const languages = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Portuguese",
    "Italian",
    "Russian",
    "Arabic",
    "Turkish"
  ];

  return (
    <div>
      <Card className='w-full'>
        <CardBody>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-center'>
              <Input
                className='rounded-md h-10 w-full'
                value={joinUrl}
                onChange={(e) => setJoinUrl(e.target.value)}
                placeholder='Paste your meeting URL here'
              />
              <Button className='bg-[#6941C6] text-white text-nowrap'>Join Now</Button>
            </div>

            <div className='flex flex-col gap-2 md:gap-4'>
              <h2 className='font-medium text-lg'>Start new meeting</h2>
              <div className='flex flex-col items-start lg:flex-row gap-2 md:gap-4 lg:items-center'>
                <Input
                  className='rounded-md h-10 w-full'
                  value={meetingName}
                  onChange={(e) => setMeetingName(e.target.value)}
                  placeholder='Enter meeting name here'
                />
                <div className='flex flex-col items-start lg:flex-row lg:justify-between lg:items-center md:gap-2 gap-2'>
                  <Select value={selectedValue} onSelect={handleSelect} placeholder='Select Language' className='w-full md:w-auto'>
                    <Popover className='bg-white dark:bg-black'>
                      <SelectHeader>
                        <h1>Languages</h1>
                      </SelectHeader>
                      <SelectContent>
                        <SelectList>
                          {languages.map((lang, index) => (
                            <SelectItem
                              key={index}
                              value={lang}
                            >
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectList>
                      </SelectContent>
                    </Popover>
                  </Select>
                  <Button className='bg-[#6941C6] text-white text-nowrap'>Create</Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default MeetingJoinCard
