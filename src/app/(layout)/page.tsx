import ProductView from '@/components/product-view/ProductView';
import { memo } from 'react';
import Hero from './hero/Hero';
import BrandAnimate from '@/components/brand-animate/BrandAnimate';

const Home = async() => {
  const response = await fetch("https://api.errorchi.uz/product?limit=8", {next: {revalidate: 60}})
  const data = await response.json()
  
  return (
    <div>
      <Hero/>
      <BrandAnimate/>
      <p className='text-center text-[48px] pt-[50px] pb-[30px] font-extrabold'>NEW ARRIVALS</p>
      <ProductView data={data?.data?.allProducts}/>
    </div>
  );
};

export default memo(Home);