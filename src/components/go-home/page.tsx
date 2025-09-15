"use client"
import Image from 'next/image';
import { memo } from 'react';
import img from "@/components/header/assets/Frame.svg";
import { useRouter } from 'next/navigation';


const GoHome = () => {
   const navigate = useRouter()
  return (
    <div>
        <Image width={100} height={100} src={img} alt={"icon"} onClick={() => navigate.replace("/")} className='hover:cursor-pointer'/>
    </div>
  );
};

export default memo(GoHome);