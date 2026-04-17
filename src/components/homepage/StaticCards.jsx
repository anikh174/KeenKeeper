import React from 'react';

const StaticCards = () => {
    return (
        <div className='mt-10 max-w-6xl mx-auto'>
            <div className='grid gap-2 grid-cols-2 lg:grid-cols-4 md:gap-8 md:px-24 lg:p-1 px-10'>
                <div className='text-center p-4 md:p-8 border border-gray-300 rounded-lg md:w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-bold md:font-semibold text-lg md:text-3xl text-[#244D3F]'>10</p>
                    <p className='text-lg text-[#64748B] mt-2 text-[12px] md:text-[20px]'>Total Friends</p>
                </div>

                <div className='text-center p-4 md:p-8 border border-gray-300 rounded-lg md:w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-bold md:font-semibold text-lg md:text-3xl text-[#244D3F]'>3</p>
                    <p className='text-lg text-[#64748B] mt-2 text-[12px] md:text-[20px]'>On Track</p>
                </div>

                <div className='text-center p-4 md:p-8 border border-gray-300 rounded-lg md:w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-bold md:font-semibold text-lg md:text-3xl text-[#244D3F]'>6</p>
                    <p className='text-lg text-[#64748B] mt-2 text-[12px] md:text-[20px]'>Need Attention</p>
                </div>

                <div className='text-center p-4 md:p-8 border border-gray-300 rounded-lg  md:w-66 hover:bg-gray-100 hover:scale-110 duration-300 hover:shadow-lg cursor-pointer'>
                    <p className='font-bold md:font-semibold text-lg md:text-3xl text-[#244D3F]'>12</p>
                    <p className='text-lg text-[#64748B] mt-2 text-[12px] md:text-[20px]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default StaticCards;