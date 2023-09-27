import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from './StateContext';

import { IoIosArrowDropright, /* IoIosArrowForward */ } from 'react-icons/io'

function StartReg() {
    const { sharedState, setSharedState } = useStateContext();

    const setOrderTime = () => {
        setSharedState({ ...sharedState, orderDateTime: new Date() + "" });
    }

    return (
        <div>
            <Link onClick={setOrderTime} to="/customerInfo" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'
            >Begin registration <IoIosArrowDropright /></Link>
        </div>
    )
}

export default StartReg