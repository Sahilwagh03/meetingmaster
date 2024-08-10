'use client'

import React, { useState } from 'react'
import { Card, CardFooter, CardHeader } from '@/components-react-nex/Card/CardComponets'
import { LuClock4 } from 'react-icons/lu'
import Avatar from '@/components-react-nex/Avatar/Avatar'
import Switch from '@/components-react-nex/Switch/Switch'

const ScheduleMeetCard = ({ title, userName }) => {
    const [enabled, setEnabled] = useState(false);
    return (
        <Card>
            <div className='flex flex-row items-center gap-1 justify-between'>
                <div>
                    <CardHeader>
                        <h3 className='font-medium text-lg text-nowrap mb-2'>{title}</h3>
                        <span className='flex flex-row items-center gap-1 text-[#686868] text-sm'><LuClock4 /> 11:00 AM - 11:45 AM </span>
                    </CardHeader>
                    <CardFooter className='flex flex-row gap-2  items-center'>
                        <Avatar size={'xs'} src='https://bit.ly/ryan-florence' />
                        <p className='text-lg font-semibold'>{userName}</p>
                    </CardFooter>
                </div>
                <div>
                    <Switch enabled={enabled} onChange={setEnabled} />
                </div>
            </div>
        </Card>
    )
}

export default ScheduleMeetCard