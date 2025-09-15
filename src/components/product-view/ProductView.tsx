import { FC, memo } from 'react';
import ProductImage from './ProductImage';

const ProductView:FC<{data: any[]}> = ({data}) => {
  console.log(data);
  
  return (
    <div className="grid grid-cols-4 gap-4">
       {data?.map((item: any) => {
          return (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl">
              <ProductImage title={item.title} image={item.images[0]} id={item.id}/>
              <div className='pt-[1rem]'>
                <p className="line-clamp-1 font-semibold">{item.title}</p>
                <p className="line-clamp-1 font-medium">{item.description}</p>
                <p className="font-medium">{item.price} USD</p>
                <p className="font-medium">{item.category.name}</p>
                <p className="mt-4 font-semibold">{item.user.fname}</p>
                <p className="line-clamp-1 font-medium">{item.user.email}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default memo(ProductView);