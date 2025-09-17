"use client"
import { Search } from 'lucide-react';
import { memo } from 'react';

const SearchPage = () => {
  return (
    <div className='max-[900px]:hidden'>
      <div className='w-[450px] py-[10px] px-4 bg-[#F0F0F0] flex items-center rounded-[62px]'>
        <label htmlFor="search">
            <Search className='text-[#00000077] mr-4 cursor-pointer'/>
        </label>
        <input type="text" id='search' placeholder='Search for products...' className='text-[#00000077] w-full outline-0'/>
      </div>
    </div>
  );
};

export default memo(SearchPage);