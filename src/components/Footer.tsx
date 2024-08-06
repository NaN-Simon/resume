import React from 'react'

const Footer = ({name}: {name: string}) => {
  return (
    <footer className='flex justify-center items-center text-xl font-exo2 font-bold bg-light dark:bg-dark py-6'>{name}</footer>
  )
}

export default Footer