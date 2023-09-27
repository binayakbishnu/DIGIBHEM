import React, { useEffect } from 'react'
import { useStateContext } from './StateContext';
import { Link } from 'react-router-dom';

function OrderSummary() {
    const { sharedState, setSharedState } = useStateContext();



    return (
        <div className='bg-[rgba(0,0,100,0.8)] p-8 rounded'>
            <div className='grid grid-cols-2 text-left'>
                <p className='col-span-2'>{sharedState.orderDateTime}</p>
                <hr className='col-span-2' />
                <p>Name</p>
                <p>{sharedState.name}</p>
                <p>Number of days</p>
                <p>{sharedState.days}</p>
                <p>Number of persons</p>
                <p>
                    {
                        sharedState.persons <= 2 && <span>{sharedState.persons}</span>
                    }
                    {
                        sharedState.persons > 2 && <span>2 + {sharedState.persons - 2}</span>
                    }
                </p>
                <p>Room Type</p>
                <p>{sharedState.roomType}</p>
                <p>Amenities</p>
                <p className='flex flex-col gap-0'>
                    <span>
                        {
                            sharedState.amenities.ac === true && "AC"
                        }
                    </span>
                    <span>
                        {
                            sharedState.amenities.locker === true && "Locker"
                        }
                    </span>
                </p>
                <hr className='col-span-2' />
                <p>Total Amount</p>
                <p>{sharedState.totalCost}</p>
                <p>Advance Amount</p>
                <p>{sharedState.advanceAmount}</p>
                <hr className='col-span-2' />
                <p>Balance Amount</p>
                <p>{sharedState.totalCost - sharedState.advanceAmount}</p>
            </div>

            <div className='mt-5 flex flex-row justify-center gap-2'>
                <Link to="/totalCost" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Previous</Link>
                {/* <Link to="/" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Submit</Link> */}
            </div>
        </div>
    )
}

export default OrderSummary