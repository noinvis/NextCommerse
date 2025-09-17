"use client"
import { useRouter } from 'next/navigation';
import { memo } from 'react';

const Previous = () => {
    const navigate = useRouter()
  return (
    <div className="absolute top-0 left-0 p-[1rem]">
      <button onClick={() => navigate.back()} className='py-[7px] px-[20px] bg-[#292929] text-white font-medium rounded-xl cursor-pointer'>&#60; Previous</button>
    </div>
  );
};

export default memo(Previous);