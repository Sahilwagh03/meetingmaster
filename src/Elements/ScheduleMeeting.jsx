import ScheduleMeetCard from '@/components/ScheduleMeetCard'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const meetings = [
  { title: 'Product Marketing Meeting', userName: 'Daniel Cooper' },
  { title: 'Team Sync', userName: 'Jessica Smith' },
  { title: 'Client Presentation', userName: 'Michael Johnson' },
];

const ScheduleMeeting = () => {
  return (
    <div>
      <SectionHeader className='py-5'>Today</SectionHeader>
      {meetings.map((meeting, index) => (
        <ScheduleMeetCard 
          key={index} 
          title={meeting.title} 
          userName={meeting.userName} 
        />
      ))}
    </div>
  )
}

export default ScheduleMeeting
