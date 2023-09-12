import React from 'react'
import { Link } from 'react-router-dom'

import { IoIosArrowDropright, /* IoIosArrowForward */ } from 'react-icons/io'

function StartReg() {
    return (
        <div>
            <Link to="/customerInfo" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'
            >Begin registration <IoIosArrowDropright /></Link>
        </div>
    )
}

export default StartReg