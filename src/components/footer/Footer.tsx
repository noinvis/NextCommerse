import Image from 'next/image';
import { memo } from 'react';
import img from "@/components/header/assets/shop.svg";
import {LINK2, LINK3, LINK4} from "@/components/header/LINKS/page"

const Footer = () => {
  return (
    <footer className='bg-[#F5F3EE] pt-[40px] mt-[50px]'>
      <div className='container grid grid-cols-4 gap-[1rem] max-[880px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:gap-[24px]'>
        <div>
          <Image width={100} height={100} src={img} alt={"icon"} />
          <p className='text-[14px] text-[#00000099] mt-[20px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='text-[20px] font-medium'>Main</p>
            {LINK2.map((item: any, inx: any) => (
              <li key={inx} className='font-medium hover:underline'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='text-[20px] font-medium'>Frontend</p>
            {LINK3.map((item: any, inx: any) => (
              <li key={inx} className='font-medium hover:underline'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <p className='text-[20px] font-medium'>Usage</p>
            {LINK4.map((item: any, inx: any) => (
              <li key={inx} className='font-medium hover:underline'>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='py-[30px] text-center bg-[#191610] text-white mt-[30px] max-[500px]:hidden'>
        <p className='font-medium'>Third party logos and brand names are used for information purposes only and do not necessarily indicate affiliation with Enode.</p>
      </div>
    </footer>
  );
};

export default memo(Footer);