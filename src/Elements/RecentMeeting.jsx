import RecentMeetingCard from '@/components/RecentMeetingCard'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const RecentMeeting = () => {
    return (
        <div className='pt-6'>
            <SectionHeader>Recent Meetings</SectionHeader>
            <div className='flex flex-col lg:flex-row gap-2'>
                <RecentMeetingCard title='Streamlining Team Collaboration' description='Our weekly team sync focused on project updates and alignment on upcoming tasks. Key discussion points included the new marketing strategy and upcoming product launch. Action items were assigned, and deadlines were set to ensure smooth execution.' />
                <RecentMeetingCard title='Turning Insights into Action' description='In our client feedback session, we reviewed the latest design prototypes and gathered valuable insights. Clients provided feedback on usability and features, which will guide our next iteration. The session was instrumental in aligning our design with client expectations.' />
            </div>
        </div>
    )
}

export default RecentMeeting