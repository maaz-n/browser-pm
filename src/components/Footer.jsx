import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white h-fit xl:h-15 flex flex-col gap-10 justify-center items-center px-10 py-10 mt-20 xl:flex-row xl:justify-around'>
        <p>
            A fairly basic password manager that stores passwords in your browser.
        </p>
        <p className='xl:w-1/4'>
            <span className='font-bold'>Note:</span> It uses your browser's localStorage to store passwords. Data will be lost in case of browser cleanup.
        </p>
    </footer>
  )
}

export default Footer