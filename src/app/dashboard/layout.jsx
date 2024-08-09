import React from 'react'
import { SideBar, SideBarBody, SideBarFooter, SideBarItem } from '../../Elements/SideBar'
import Avatar from '../../components-react-nex/Avatar/Avatar'
import { SideBarItemsData } from '../../../constants/sidebarItemData';

const Dashboardlayout = ({ children }) => {

  return (
    <div className='flex flex-row h-screen rounded-lg relative'>
      <div className='hidden md:block'>
        <SideBar title='TechPro'>
          <SideBarBody>
            {
              SideBarItemsData.map(({ icon, title }, index) => (
                <SideBarItem icon={icon} title={title} key={index} />
              ))
            }
          </SideBarBody>
          <SideBarFooter>
            <SideBarItem className='hover:bg-transparent dark:hover:bg-transparent gap-3' icon={<Avatar className='w-9 h-full' src="https://randomuser.me/api/portraits/men/65.jpg" />} title='Profile' />
          </SideBarFooter>
        </SideBar>
      </div>
      {children}
      <div className='flex-1 hidden md:block md:min-w-[300px] p-4'>
        
      </div>
    </div>
  )
}

export default Dashboardlayout