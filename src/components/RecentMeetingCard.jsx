import Card from '@/components-react-nex/Card/Card'
import { CardBody, CardDescription, CardFooter, CardHeader } from '@/components-react-nex/Card/CardComponets'
import { LuCalendar, LuClock4 } from 'react-icons/lu'
import { FaFolder } from "react-icons/fa6";
import React from 'react'
import Avatar from '@/components-react-nex/Avatar/Avatar';
import AvatarGroup from '@/components-react-nex/AvatarGroup/AvatarGroup';

const RecentMeetingCard = ({ title, description }) => {
    return (
        <Card>
            <CardHeader>
                <h3 className='font-medium text-lg'>{title}</h3>
                <span className='flex flex-row items-center gap-1 text-[#686868] text-sm'><LuCalendar /> Mon, April 29, 2024 | <LuClock4 /> 44 min</span>
            </CardHeader>
            <CardBody>
                <CardDescription className='!text-black !mb-0'>
                    {description}
                </CardDescription>
            </CardBody>
            <CardFooter className='flex flex-row justify-between items-center'>
                <FaFolder className='w-6 h-6 text-[#333333]' />
                <AvatarGroup containerStyle='justify-center' imageContainerStyle='!-ml-4 border-4 border-[#F4EBFF] dark:border-[#F4EBFF] dark:border-4 !p-0 dark:p-0 shadow-xl'>
                    <Avatar size={'xs'} src='https://bit.ly/ryan-florence' />
                    <Avatar size={'xs'} src='https://bit.ly/kent-c-dodds' />
                    <Avatar size={'xs'} src='https://bit.ly/prosper-baba' />
                </AvatarGroup>
            </CardFooter>
        </Card>
    )
}

export default RecentMeetingCard