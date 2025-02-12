import React from 'react';
import useCryptoData from './useCryptoData';

export default function DashboardNavbar(){
    return(
        <div className='mb-3 py-4 border-b border-zinc-800 flex justify-between items-center'>
            <div>
                <h1 className='md:text-3xl font-extralight text-zinc-400'>Crypto Dashboard</h1>
            </div>
            <div>
                <button className='text-zinc-400 border border-zinc-800 rounded-lg px-4 py-2'>Refresh results</button>
            </div>
        </div>
    )
}