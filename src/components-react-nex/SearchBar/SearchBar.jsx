"use client"

import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';


const SearchBar = ({ onChange, className, IconColor ,...props}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        onChange(event.target.value); // Pass the current value directly
    };

    return (
        <>
            <div className='relative w-fit'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    className={` py-2 px-4 w-64 focus:outline-none focus:ring-1 text-black border-2 border-gray-300 dark:text-white dark:border-[#383838] dark:border-2 dark:bg-[#1C1C1B] ${className}`}
                    {...props}
                />
                <div
                    className="cursor-pointer absolute top-[25%] right-[4%]"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <RiSearchLine size={20} color={IconColor} />
                </div>
            </div>
        </>
    );
};

export default SearchBar;
