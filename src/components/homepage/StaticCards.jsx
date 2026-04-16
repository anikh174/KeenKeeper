import React from 'react';

const StaticCards = () => {
    return (
        <div className='mt-10 max-w-6xl mx-auto'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:px-24 lg:p-1 px-14'>
                <div className='text-center p-8 border border-gray-300 rounded-lg w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>10</p>
                    <p className='text-lg text-[#64748B] mt-2'>Total Friends</p>
                </div>

                <div className='text-center p-8 border border-gray-300 rounded-lg w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>3</p>
                    <p className='text-lg text-[#64748B] mt-2'>On Track</p>
                </div>

                <div className='text-center p-8 border border-gray-300 rounded-lg w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>6</p>
                    <p className='text-lg text-[#64748B] mt-2'>Need Attention</p>
                </div>

                <div className='text-center p-8 border border-gray-300 rounded-lg w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>12</p>
                    <p className='text-lg text-[#64748B] mt-2'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default StaticCards;