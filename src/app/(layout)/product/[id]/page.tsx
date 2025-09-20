import Image from "next/image";
import { memo } from "react";
import Previous from "@/components/previous/Page";
import icon from "@/components/product-view/assets/image.png";
import stars from "@/components/assets/Frame 35.png";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{id: string}>
}
export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id

   return {
    title: `Product ${id} - SHOP.CO`,
    description: `Details about product ${id}`,
  };
}

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data;

  const card =
    product && product.images.length > 0
      ? `https://api.errorchi.uz/product/image/${product.images[0]}`
      : icon;
  return (
    <>
      <div className="relative">
        <Previous />
      </div>
      <div className="container w-full h-[1px] bg-[#0000001A]"></div>
      <div className="container pt-[60px] pb-[30px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex justify-center w-[45%]">
            <Image src={card} width={445} alt={product?.title} height={530} />
          </div>
          <div className="w-[50%]">
            <p className="text-[40px] font-bold">{product?.title}</p>
            <Image src={stars} alt="stars" className="py-[10px]" />
            <div className="flex items-center gap-2">
              <p className="font-bold text-[32px]">${product?.price ?? "0"}</p>
              <p className="text-[32px] font-bold text-[#0000004D] line-through">
                ${product?.price * 2}
              </p>
              <span className="bg-[#FF33331A] text-[#FF3333] rounded-[62px] text-[12px] font-medium py-[5px] px-4">
                -50%
              </span>
            </div>
            <p className="font-medium text-[#00000099] py-[10px]">{product?.description}</p>
            <div className="w-full h-[1px] bg-[#0000001A] my-[10px]"></div>
            <p className="text-[#00000099] py-[10px]">
              Select Colors
            </p>
            <div className="flex items-center gap-3 mt-[10px]">
              <button className="bg-[#4F4631] h-[35px] w-[35px] rounded-full cursor-pointer">
              </button>
              <button className="bg-[#314F4A] h-[35px] w-[35px] rounded-full cursor-pointer">
              </button>
              <button className="bg-[#31344F] h-[35px] w-[35px] rounded-full cursor-pointer">
              </button>
            </div>
            <div className="flex items-center gap-3 mt-[20px]">
              <button className="w-full py-[10px] border rounded-xl border-gray-400 cursor-pointer">
                Checkout now
              </button>
              <button className="w-full py-[10px] border rounded-xl bg-[#141414] text-white cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Detail);
