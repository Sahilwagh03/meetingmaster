// File: MeetingCards.jsx

import { Card } from '../components-react-nex/Card/CardComponets';
import { LuCalendar, LuBriefcase } from "react-icons/lu";
import { PiMicrophoneBold } from "react-icons/pi";

const cardsData = [
    { icon: <LuCalendar size={20} />, title: 'General Meeting' },
    { icon: <LuBriefcase size={20} />, title: 'Professional' },
    { icon: <PiMicrophoneBold  size={20} />, title: 'Interview' },
];

const MeetingCards = () => {
    return (
        <div className='flex flex-col md:flex-wrap md:flex-row gap-4'>
            {cardsData.map(({ title, icon }, index) => (
                <Card key={index} className=' cursor-pointer h-fit !p-2 w-full lg:w-fit lg:min-w-[250px] flex flex-row items-center gap-2'>
                    <div>{icon}</div>
                    <h1 className='text-nowrap text-lg font-medium'>{title}</h1>
                </Card>
            ))}
        </div>
    );
};

export default MeetingCards;
