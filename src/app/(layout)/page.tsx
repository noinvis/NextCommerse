import ProductView from '@/components/product-view/ProductView';
import { memo } from 'react';

const Home = async() => {
  const response = await fetch("https://api.errorchi.uz/product?limit=12")
  const data = await response.json()
  
  return (
    <div className="container mx-auto">
      <p className='text-center text-[30px] py-[1rem]'>Products</p>
      <ProductView data={data?.data?.allProducts}/>
    </div>
  );
};

export default memo(Home);