import React from 'react';

const CardDescription = ({ children ,className="" }) => {
  return <p className={`text-gray-600 mb-2 ${className}`}>{children}</p>;
};

export default CardDescription;
