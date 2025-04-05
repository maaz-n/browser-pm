import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around text-xl text-white bg-gray-900 items-center h-15'>
          <div className="logo font-bold">BrowserPM</div>
          <div className="contribute flex items-center">
            <button className='bg-white rounded-md hover:bg-gray-200'>
              <a href="https://github.com" target='_blank'>
                <img src="/github.png" alt="" className='w-30' />
              </a>
            </button>
          </div>
        </nav>
    </>
  )
}

export default Navbar