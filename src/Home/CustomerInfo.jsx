import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from './StateContext';

import { IoIosArrowDropright, IoIosArrowDropleft /* IoIosArrowForward */ } from 'react-icons/io'

function CustomerInfo() {
    const { sharedState, setSharedState } = useStateContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSharedState({ ...sharedState, [name]: value });
    }

    const daysChange = (e) => {
        const { name, value } = e.target;

        let cost = 0;
        if (sharedState.persons > 2) {
            cost = (sharedState.persons - 2) * 1000 * value;
        }
        setSharedState({ ...sharedState, [name]: value, totalCost: cost });
    }

    const personsChange = (e) => {
        const { name, value } = e.target;

        let cost = 0;
        if (value > 2) {
            cost = (value - 2) * 1000 * sharedState.days;
        }
        setSharedState({ ...sharedState, [name]: value, totalCost: cost });
    }

    useEffect(() => {
        console.log(sharedState)
    }, [sharedState]);

    return (
        <div className='bg-[rgba(0,0,100,0.8)] p-8 rounded'>
            <div>
                <form action="" className='grid grid-cols-2 text-left gap-5'>
                    {/* <div className='flex justify-between gap-5'> */}
                    <label htmlFor="name">Full name</label>
                    <input
                        value={sharedState.name}
                        onChange={(e) => handleChange(e)}
                        type="text" name='name' id='name'
                        placeholder='Full name'
                        className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                    />
                    {/* </div> */}
                    {/* <div className='flex justify-between gap-5'> */}
                    <label htmlFor="date">Check-in date</label>
                    <input
                        value={sharedState.date}
                        onChange={(e) => handleChange(e)}
                        type="date" name="date" id="date"
                        placeholder=''
                        className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                    />
                    {/* </div> */}
                    {/* <div className='flex justify-between gap-5'> */}
                    <label htmlFor="days">Number of days</label>
                    <input
                        value={sharedState.days}
                        onChange={(e) => daysChange(e)}
                        type="number" name="days" id="days"
                        placeholder=''
                        className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                    />
                    {/* </div> */}
                    {/* <div className='flex justify-between gap-5'> */}
                    <label htmlFor="persons">Number of persons</label>
                    <input
                        value={sharedState.persons}
                        onChange={(e) => personsChange(e)}
                        type="number" name="persons" id="persons"
                        placeholder=''
                        className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                    />
                    {/* </div> */}
                </form>
            </div>

            <div className='mt-5 flex flex-row justify-center gap-2'>
                <Link to="/" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'><IoIosArrowDropleft /> Previous</Link>
                <Link to="/roomInfo" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Next<IoIosArrowDropright /></Link>
            </div>

            {/* <p>{sharedState.name} {sharedState.date} {sharedState.days} {sharedState.persons}</p> */}
        </div>
    )
}

export default CustomerInfo