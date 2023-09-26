import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from './StateContext';

function RoomInfo() {
    const { sharedState, setSharedState } = useStateContext();

    const handleRoomChange = (e) => {
        const value = e.target.value;
        let cost = 0;
        if (value === "delux") cost = 2500;
        if (value === "suite") cost = 4000;

        setSharedState({ ...sharedState, roomType: value, roomCost: cost });
    }

    const handleCheckBox = (e) => {
        const { name } = e.target;
        const checkedState = e.target.checked;

        let cost = 0;
        if (name === 'ac') cost = 1000;
        else if (name === 'locker') cost = 300;
        if (checkedState === true) {
            cost = sharedState.amenitiesCost + cost;
        }
        else {
            cost = sharedState.amenitiesCost - cost;
        }


        setSharedState({ ...sharedState, amenitiesCost: cost, amenities: { ...sharedState.amenities, [name]: checkedState } });
    }

    const submitRoomInfo = () => {
        const total = sharedState.totalCost + sharedState.roomCost + sharedState.amenitiesCost;
        setSharedState({ ...sharedState, totalCost: total });
    }

    return (
        <div className='bg-[rgba(0,0,100,0.8)] p-8 rounded'>
            <div>
                <form action="" className='grid grid-cols-2 text-left gap-5'>
                    <label htmlFor="roomType">Room type</label>
                    <select
                        value={sharedState.roomType}
                        onChange={(e) => handleRoomChange(e)}
                        type="text" name='roomType' id='roomType'
                        placeholder=''
                        className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                    >
                        {/* <option disabled selected value> -- select an option -- </option> */}
                        <option value="delux">Delux</option>
                        <option value="suite">Suite</option>
                    </select>
                    <label htmlFor="amenities">Amenities</label>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <input
                                // value={sharedState.amenities.ac}
                                checked={sharedState.amenities.ac}
                                onChange={(e) => handleCheckBox(e)}
                                type="checkbox" name="ac" id="AC" className='' />
                            <label htmlFor="AC" className='ml-2'>AC</label>
                        </div>
                        <div>
                            <input
                                // value={sharedState.amenities.locker}
                                checked={sharedState.amenities.locker}
                                onChange={(e) => handleCheckBox(e)}
                                type="checkbox" name="locker" id="locker" className='' />
                            <label htmlFor="locker" className='ml-2'>Locker</label>
                        </div>
                    </div>
                </form>
            </div>

            <div className='mt-5 flex flex-row justify-center gap-2'>
                <Link to="/customerInfo" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Previous</Link>
                <Link onClick={submitRoomInfo} to="/totalCost" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Next</Link>
            </div>

            {/* <p>{sharedState.roomType} {`${sharedState.amenities.ac}`} {`${sharedState.amenities.locker}`}</p> */}
        </div>
    )
}

export default RoomInfo