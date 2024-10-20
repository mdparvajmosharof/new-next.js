import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className='bg-green-600 p-6'>
        Dashboard Layout
      </div>
      <div className='min-h-screen'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
