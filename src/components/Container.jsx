import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:w-3/4 xl:mx-auto min-h-175'>
        {children}
    </div>
  )
}

export default Container