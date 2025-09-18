import Image from 'next/image';
import { memo } from 'react';
import img from "@/components/header/assets/shop.svg";
import social from '@/components/assets/Social.png'
import frame53 from '@/components/assets/Frame 53.png'
import {LINK2, LINK3, LINK4, LINK5} from "@/components/header/LINKS/page"

const Footer = () => {
  return (
    <footer className='bg-[#F0F0F0] pt-[40px] mt-[50px]'>
      <div className='container grid grid-cols-5 gap-[1rem] max-[1030px]:grid-cols-3 max-[750px]:grid-cols-2 max-[480px]:grid-cols-1 max-[500px]:gap-[24px]'>
        <div className='flex flex-col gap-6'>
          <Image width={100} height={100} src={img} alt={"icon"} />
          <p className='text-[14px] text-[#00000099]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <Image src={social} alt='socials' className='cursor-pointer'/>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='font-medium'>COMPANY</p>
            {LINK2.map((item: any, inx: any) => (
              <li key={inx} className='hover:underline text-[#00000099]'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='font-medium'>HELP</p>
            {LINK3.map((item: any, inx: any) => (
              <li key={inx} className='hover:underline text-[#00000099]'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='font-medium'>RESOURCES</p>
            {LINK5.map((item: any, inx: any) => (
              <li key={inx} className='hover:underline text-[#00000099]'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='font-medium'>FAQ</p>
            {LINK4.map((item: any, inx: any) => (
              <li key={inx} className='hover:underline text-[#00000099]'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full bg-[#0000001A] h-[1px] container mt-[50px]'></div>
      <div className='flex justify-between items-center container py-[25px]'>
        <p className='text-[14px] text-[#00000099]'>Shop.co © 2000-2023, All Rights Reserved</p>
        <Image src={frame53} alt='frame'/>
      </div>
    </footer>
  );
};

export default memo(Footer);