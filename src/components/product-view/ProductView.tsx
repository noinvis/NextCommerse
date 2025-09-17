import { FC, memo } from 'react';
import ProductImage from './ProductImage';
import Image from 'next/image';
import img from "@/components/assets/Frame 35.png"

const ProductView:FC<{data: any[]}> = ({data}) => {
  console.log(data);
  
  return (
    <section className='container'>
      <div className="grid grid-cols-4 gap-4 max-[1120px]:grid-cols-3 max-[950px]:grid-cols-2 max-[620px]:grid-cols-1">
        {data?.map((item: any) => {
            return (
              <div key={item.id} className="bg-white p-4 rounded-lg">
                <ProductImage title={item.title} image={item.images[0]} id={item.id}/>
                <div className='pt-[1rem]'>
                  <p className="line-clamp-1 font-bold text-[20px]">{item.title}</p>
                  <Image src={img} alt='frame'/>
                  <p className="font-bold text-[24px] flex items-center gap-2">${item.price} <span className='text-[#00000066] line-through'>${item.price*2}</span> <span className='bg-[#FF33331A] text-[#FF3333] rounded-[62px] text-[12px] font-medium py-[5px] px-4'>-50%</span></p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default memo(ProductView);