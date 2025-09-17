import { memo } from 'react';
import img from "@/app/(layout)/hero/assets/Rectangle 2.png"
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-[#F2F0F1]'>
        <section className='container'>
            <div className='flex items-center max-[1070px]:flex-col'>
                <div className='w-[50%] flex flex-col items-baseline gap-[26px] max-[500px]:gap-[1rem] max-[1070px]:w-full'>
                    <p className='font-extrabold text-[64px] leading-[64px] max-[1070px]:text-[52px] max-[630px]:text-[36px] max-[630px]:leading-[34px] max-[630px]:mt-[2rem] max-[410px]:text-[28px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                    <p className='text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className='border bg-black rounded-[62px] text-white py-[10px] px-[55px] max-[450px]:w-full'>Shop Now</button>
                    <div className='flex items-center gap-[10px] justify-between w-full max-[1070px]:justify-around max-[630px]:flex-wrap'>
                        <div>
                            <p className='font-bold text-[40px] max-[630px]:text-[24px]'>200+</p>
                            <p className='text-[#00000099]'>International Brands</p>
                        </div>
                        <div>
                            <p className='font-bold text-[40px] max-[630px]:text-[24px]'>2,000+</p>
                            <p className='text-[#00000099]'>High-Quality Products</p>
                        </div>
                        <div>
                            <p className='font-bold text-[40px] max-[630px]:text-[24px]'>30,000+</p>
                            <p className='text-[#00000099]'>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center max-[1070px]:w-full'>
                    <Image src={img} alt='hero' className='h-[560px] w-[460px] max-[505px]:h-auto max-[505px]:w-full'/>
                </div>
            </div>
        </section>
    </div>
  );
};

export default memo(Hero);