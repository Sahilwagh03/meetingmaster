'use client'
import React from 'react'
import SearchBar from '../../components-react-nex/SearchBar/SearchBar';
import { Sheet, SheetContent, SheetTrigger } from '../../components-react-nex/Sheet/Sheet'
import { LuHome, LuBell, LuPieChart, LuMessageCircle, LuMenu, LuUsers, LuActivity, LuDollarSign, LuBarChart2, LuPanelRightOpen } from 'react-icons/lu';
import { SideBarItemsData } from '../../../constants/sidebarItemData';
import { FaCalendarAlt, FaBriefcase, FaMicrophone } from 'react-icons/fa';
import MeetingCards from '@/components/MeetingCards';
import MeetingJoinCard from '@/Elements/MeetingJoinCard';
import SectionHeader from '@/components/SectionHeader';
import RecentMeeting from '@/Elements/RecentMeeting';

const dashaboard_data = [
  {
    title: "Total Revenue",
    icon: <LuDollarSign className='text-black dark:text-white' />,
    value: "$45,231.89",
    description: "+20.1% from last month"
  },
  {
    title: "Subscriptions",
    icon: <LuUsers className='text-black dark:text-white' />,
    value: "+2350",
    description: "+180.1% from last month"
  },
  {
    title: "Sales",
    icon: <LuMenu className='text-black dark:text-white' />,
    value: "+12,234",
    description: "+19% from last month"
  },
  {
    title: "Active Now",
    icon: <LuActivity className='text-black dark:text-white' />,
    value: "+573",
    description: "+201 since last hour"
  }
]

const sales = [
  {
    name: "Sofia Davis",
    email: "sofia.davis@example.com",
    income: "-$100",
    profit: false,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@example.com",
    income: "+$1500",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    income: "+$2000",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Liam Smith",
    email: "liam.smith@example.com",
    income: "-$500",
    profit: false,
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    income: "+$1700",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Noah Johnson",
    email: "noah.johnson@example.com",
    income: "+$1800",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    income: "-$300",
    profit: false,
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "William Garcia",
    email: "william.garcia@example.com",
    income: "+$1100",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
];




const Dashboard = () => {
  return (
    <div className='flex-3 bg-white dark:dark:bg-[#27272a] h-screen w-full rounded-xl md:rounded-tl-none md:rounded-bl-none overflow-auto no-scrollbar'>
      <div className='p-0 md:p-4'>
        <div className='flex  flex-row z-10 items-center justify-between p-2 px-3 bg-white dark:bg-black md:dark:bg-transparent top-0 sticky md:relative md:bg-transparent'>
          <div className='rounded-lg md:hidden p-2 border-2 border-gray-200 dark:border-[#383838] dark:border-2'>
            <Sheet side='left'>
              <SheetTrigger>
                <LuPanelRightOpen className='w-7 h-7' />
              </SheetTrigger>
              <SheetContent positionClassName='absolute h-screen'>
                <div className='my-10 flex flex-col gap-4'>
                  {
                    SideBarItemsData.map(({ icon, title }, index) => (
                      <div className={`flex items-center w-full px-1 py-1 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer justify-start`} key={index}>
                        <div className='flex items-center justify-center min-w-10 min-h-10 text-gray-800 dark:text-gray-200'>
                          {icon}
                        </div>
                        <span className='text-lg text-gray-800 dark:text-gray-200'>{title}</span>
                      </div>
                    ))
                  }
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <SearchBar
            onChange={(value) => console.log(value)}
            IconColor="grey"
            placeholder='Find any meeting moment...'
            className='rounded-xl w-full md:w-[20rem] dark:bg-black/50'
          />
        </div>
        <div className='p-4 mt-4 flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <div>
              <SectionHeader>New Meeting</SectionHeader>
            </div>
            <MeetingCards />
          </div>
          <MeetingJoinCard />
          <RecentMeeting/>
        </div>
      </div>
    </div >
  )
}

export default Dashboard