import React from 'react'

const SectionHeader = ({children , className=""}) => {
  return (
    <h1 className={`text-2xl font-medium ${className}`}>{children}</h1>
  )
}

export default SectionHeader