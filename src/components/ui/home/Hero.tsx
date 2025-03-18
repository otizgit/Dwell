import React from "react";
import HeroImg from "@/assets/images/Home/hero-img.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-width paddingX">
      <div className="overflow-hidden relative">
        <span className="absolute inset-0 bg-[#00000098] z-[2]"></span>
        <Image
          className="rounded-md scale-[1.1] -translate-y-10"
          src={HeroImg}
          alt="Image of a house"
        />
      </div>
    </div>
  );
}
