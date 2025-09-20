"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";
import icon from "@/components/product-view/assets/image.png";

interface Props {
  title: string;
  image: string;
  id: number;
}

const ProductImage: FC<Props> = ({ title, image, id }) => {
  const router = useRouter();

  const card = image && image.length > 0 
    ? `https://api.errorchi.uz/product/image/${image}` 
    : icon;

  return (
    <div className="relative w-full h-[250px] overflow-hidden rounded-[10px] bg-[#F0EEED]">
      <Image
        src={card}
        fill
        alt={title}
        className="object-cover cursor-pointer rounded-[10px] hover:scale-104 duration-300"
        onClick={() => router.push(`/product/${id}`)}
      />
    </div>
  );
};

export default memo(ProductImage);
