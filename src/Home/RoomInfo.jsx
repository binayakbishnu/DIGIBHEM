import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from './StateContext';

function RoomInfo() {
    const { sharedState, setSharedState } = useStateContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSharedState({ ...sharedState, [name]: value });
    }

    const handleCheckBox = (e) => {
        const { name } = e.target;
        const checkedState = e.target.checked;
        setSharedState({ ...sharedState, amenities: { ...sharedState.amenities, [name]: checkedState } });
    }

    return (
        <div className='bg-[rgba(0,0,100,0.8)] p-8 rounded'>
            <div>
                <form action="" className='grid grid-cols-2 text-left gap-5'>
                    <label htmlFor="roomType">Room type</label>
                    <select
                        value={sharedState.roomType}
                        onChange={(e) => handleChange(e)}
                        type="text" name='roomType' id='roomType'
                        placeholder=''
                        className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                    >
                        <option value="delux">Delux</option>
                        <option value="suite">Suite</option>
                    </select>
                    <label htmlFor="amenities">Amenities</label>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <input
                                value={sharedState.amenities.ac}
                                defaultChecked={sharedState.amenities.ac}
                                onChange={(e) => handleCheckBox(e)}
                                type="checkbox" name="ac" id="amenities" className='' />
                            <label htmlFor="AC" className='ml-2'>AC</label>
                        </div>
                        <div>
                            <input
                                value={sharedState.amenities.locker}
                                defaultChecked={sharedState.amenities.locker}
                                onChange={(e) => handleCheckBox(e)}
                                type="checkbox" name="locker" id="amenities" className='' />
                            <label htmlFor="locker" className='ml-2'>Locker</label>
                        </div>
                    </div>
                </form>
            </div>

            <div className='mt-5 flex flex-row justify-center gap-2'>
                <Link to="/customerInfo" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Previous</Link>
                <Link to="/totalCost" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Next</Link>
            </div>

            {/* <p>{sharedState.roomType} {`${sharedState.amenities.ac}`} {`${sharedState.amenities.locker}`}</p> */}
        </div>
    )
}

export default RoomInfo