import React from 'react'
import { useStateContext } from './StateContext';

function OrderSummary() {
    const { sharedState } = useStateContext();
    return (
        <>
            {sharedState.name &&
                <div className='text-left flex flex-col'>
                    <div className='flex'>
                        {sharedState.name && <p>{sharedState.name}</p>}
                        &nbsp;&nbsp;
                        {sharedState.date && <p>{sharedState.date}</p>}
                    </div>
                    <p>Number of days: {sharedState.days !== 0 && <span>{sharedState.days}</span>}</p>
                    <p>Number of persons: {sharedState.persons !== 0 && <span>{sharedState.persons}</span>}</p>
                    <div className='flex'>
                        <p>Room type: {sharedState.roomType && <span>{sharedState.roomType}</span>}</p>
                        {sharedState.amenities.ac && <p>, AC: {`${sharedState.amenities.ac}`}</p>}
                        {sharedState.amenities.locker && <p>, Locker: {`${sharedState.amenities.locker}`}</p>}
                    </div>
                    <p>{sharedState.amenitiesCost}</p>
                </div>}
        </>
    )
}

export default OrderSummary