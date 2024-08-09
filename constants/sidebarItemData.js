import { LuHome, LuBell, LuPieChart, LuMessageCircle, LuMenu, LuUsers, LuActivity, LuDollarSign, LuBarChart2, LuPanelRightOpen } from 'react-icons/lu';
import { FiHome, FiVideo, FiPenTool ,FiCalendar, FiTrendingUp , FiSet  } from "react-icons/fi";
export const SideBarItemsData = [
  {
    icon: <FiHome className='w-6 h-6 text-black dark:text-white' />,
    title: 'Home'
  },
  {
    icon: <FiVideo className='w-6 h-6 text-black dark:text-white' />,
    title: 'Meetings'
  },
  {
    icon: <FiPenTool className='w-6 h-6 text-black dark:text-white' />,
    title: 'Summary'
  },
  {
    icon: <FiCalendar  className='w-6 h-6 text-black dark:text-white' />,
    title: 'Schedule Meeting'
  },
  {
    icon: <FiTrendingUp  className='w-6 h-6 text-black dark:text-white' />,
    title: 'Analytics'
  },
]