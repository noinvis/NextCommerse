import { memo } from "react";
import Image from "next/image";
import brand1 from "@/components/assets/VERSACE.png"
import brand2 from "@/components/assets/zara-logo-1 1.png"
import brand3 from "@/components/assets/gucci-logo-1 1.png"
import brand4 from "@/components/assets/prada-logo-1 1.png"
import brand5 from "@/components/assets/CK.png"

const BrandAnimate = () => {
  return (
    <section className="bg-black overflow-hidden">
      <div className="container">
        <div className="brands-carousel brands-group py-7 md:py-10">
          <Image src={brand1} alt="brand" width={166} height={35} />
          <Image src={brand2} alt="brand" width={100} height={35} />
          <Image src={brand3} alt="brand" width={156} height={35} />
          <Image src={brand4} alt="brand" width={194} height={35} />
          <Image src={brand5} alt="brand" width={200} height={35} />
        </div>
      </div>
    </section>
  );
};

export default memo(BrandAnimate);