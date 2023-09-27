import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from './StateContext';

function AmountCalculation() {
    const { sharedState, setSharedState } = useStateContext();

    const handleAdvanceAmount = (e) => {
        let advAmount = "";
        if (e.target.value !== "")
            advAmount = parseInt(e.target.value);
        setSharedState({ ...sharedState, advanceAmount: advAmount });
    }

    return (
        <div className='bg-[rgba(0,0,100,0.8)] p-8 rounded'>
            <div className='flex flex-col gap-5'>
                <div className='grid grid-cols-2 text-left'>
                    <p className='col-span-2'>Room details</p>
                    <hr className='col-span-2' />
                    <p>{sharedState.roomType}</p>
                    <p className='text-right'>{sharedState.roomCost}</p>
                </div>
                <div className='grid grid-cols-2 text-left'>
                    <p className='col-span-2'>Amenities details</p>
                    <hr className='col-span-2' />
                    {!sharedState.amenities.ac && !sharedState.amenities.locker && <p className='col-span-2'>N/A</p>}
                    <p className='text-[0.8em]'>{sharedState.amenities.ac ? "AC" : ""}</p>
                    <p className='text-right text-[0.8em]'>{sharedState.amenities.ac ? 1000 : ""}</p>
                    <p className='text-[0.8em]'>{sharedState.amenities.locker ? "Locker" : ""}</p>
                    <p className='text-right text-[0.8em]'>{sharedState.amenities.locker ? 300 : ""}</p>
                    {(sharedState.amenities.ac || sharedState.amenities.locker) &&
                        <p>Subtotal</p>
                    }
                    {(sharedState.amenities.ac || sharedState.amenities.locker) &&
                        <p className='text-right'>{sharedState.amenitiesCost}</p>
                    }
                </div>
                <div className='grid grid-cols-2 text-left'>
                    <p className='col-span-2'>Extra persons charge</p>
                    <hr className='col-span-2' />
                    {sharedState.persons <= 2 && <p className='col-span-2'>N/A</p>}
                    {sharedState.persons > 2 && <p className='col-span-2 text-[0.8em]'>1000/person/day</p>}
                    {sharedState.persons > 2 && <p className='text-[0.8em]'>Extra persons</p>}
                    {sharedState.persons > 2 && <p className='text-[0.8em] text-right'>{sharedState.persons - 2}</p>}
                    {sharedState.persons > 2 &&
                        <p>Subtotal</p>
                    }
                    {sharedState.persons > 2 &&
                        <p className='text-right'>{sharedState.extraPersonCost}</p>
                    }
                </div>
                <div className='grid grid-cols-2 text-left'>
                    <p className='col-span-2'>Total</p>
                    <hr className='col-span-2' />
                    <p></p>
                    <p className='text-right'>{sharedState.totalCost}</p>
                </div>
                <div className='grid grid-cols-2 text-left gap-x-2'>
                    <p className='col-span-2'>Advance amount</p>
                    <hr className='col-span-2' />
                    <p className='p-0 m-0'>Enter amount</p>
                    <p className='p-0 m-0'>Balance amount</p>
                    <input type='text' className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                        name='advanceAmount' value={sharedState.advanceAmount} onChange={handleAdvanceAmount} />
                    <input type='text' className='px-4 py-2 bg-[rgba(0,0,200,0.5)] rounded border'
                        name='advanceAmount' value={sharedState.totalCost - sharedState.advanceAmount} onChange={handleAdvanceAmount} />
                </div>
            </div>

            <div className='mt-5 flex flex-row justify-center gap-2'>
                <Link to="/roomInfo" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Previous</Link>
                <Link to="/ordersummary" className='flex flex-row items-center gap-2 bg-[rgba(0,0,100,0.8)] rounded px-4 py-2'>Submit</Link>
            </div>
        </div>
    )
}

export default AmountCalculation