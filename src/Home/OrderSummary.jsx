import React from 'react'
import { useStateContext } from './StateContext';

function OrderSummary() {
    const { sharedState, setSharedState } = useStateContext();
    return (
        <>
            {sharedState.name &&
                <div className='text-left flex flex-col'>
                    {sharedState.name && <p>{sharedState.name}</p>}
                    {sharedState.date && <p>{sharedState.date}</p>}
                    <p>Number of days: {sharedState.days !== 0 && <span>{sharedState.days}</span>}</p>
                    <p>Number of persons: {sharedState.persons !== 0 && <span>{sharedState.persons}</span>}</p>
                    <div className='flex'>
                        <p>Room type: {sharedState.roomType && <span>{sharedState.roomType}</span>}</p>
                        {sharedState.amenities.ac && <p>, AC: {`${sharedState.amenities.ac}`}</p>}
                        {sharedState.amenities.locker && <p>, Locker: {`${sharedState.amenities.locker}`}</p>}
                    </div>
                </div>}
        </>
    )
}

export default OrderSummary