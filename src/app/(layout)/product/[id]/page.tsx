import Image from "next/image";
import { memo } from "react";
import Previous from "@/components/previous/Page"
import icon from '@/components/product-view/assets/image.png'

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data
  console.log(product);
  
  const card = product && product.images.length > 0 
    ? `https://api.errorchi.uz/product/image/${product.images[0]}`
    : icon;
  return (
    <>
    <div className="relative">
      <Previous/>
    </div>
      <div className="container pt-[60px] pb-[30px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex justify-center w-[45%]">
            <Image
              src={card}
              width={500}
              alt={product?.title}
              height={500}
            />
          </div>
          <div className="w-[50%]">
            <p className="font-medium text-[#8F8F8F]">{product.brand}</p>
            <p className="text-[36px] font-semibold text-[#292929]">{product.title}</p>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <p className="line-through font-medium text-green-500">{product.price.toFixed()*2} USD</p>
                <p className="text-[24px] font-semibold text-[#141414]">{product.price.toFixed()} USD</p>
              </div>
              <p className="text-[24px] text-green-500 font-medium">Category: <span className="text-[#141414] font-semibold">{product.category.name}</span></p>
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-[30px]"></div>
            <p className="text-[20px] font-semibold text-[#292929] mb-[10px]">Descrption:</p>
            <p className="font-medium text-[16px]">{product.description}</p>
            <p className="font-semibold text-[20px] mt-[20px] text-[#292929]">Color:</p>
            <div className="flex items-center gap-3 mt-[10px]">
              <button className="border py-[5px] px-[14px] rounded-[10px] hover:bg-black hover:text-white duration-300 cursor-pointer">White</button>
              <button className="border py-[5px] px-[14px] rounded-[10px] border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 duration-300 cursor-pointer">Blue</button>
              <button className="border py-[5px] px-[14px] rounded-[10px] bg-green-600 text-white hover:bg-white hover:text-green-600 duration-300 cursor-pointer">Green</button>
            </div>
            <div className="flex items-center gap-3 mt-[20px]">
              <button className="w-full py-[10px] border rounded-xl bg-[#141414] text-white cursor-pointer">Add to cart</button>
              <button className="w-full py-[10px] border rounded-xl border-gray-400 cursor-pointer">Checkout now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Detail);
