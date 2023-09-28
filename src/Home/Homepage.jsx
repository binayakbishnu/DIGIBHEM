import React from 'react'
import { Outlet } from 'react-router-dom'
import { StateProvider } from './StateContext'
import OrderSummary from './OrderSummary'

function Homepage() {
    return (
        <div className='bg-[rgba(29,78,216,0.4)] h-[100vh] text-white flex flex-col justify-center items-center'>
            <div className='flex-1 flex flex-col justify-center items-center w-[90%] gap-10'>
                <h1 className='text-4xl font-mono italic'>Welcome to Hotel Plaza!</h1>
                <StateProvider>
                    <Outlet />
                </StateProvider>
            </div>
        </div>
    )
}

export default Homepage