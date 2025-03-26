import React from "react";
import HeroImg from "@/assets/images/Home/hero-img.jpeg";
import LocationIcon from "@/assets/images/Home/location-icon.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <div className="max-width paddingX">
      <div className="overflow-hidden rounded-lg relative">
        <div className="absolute inset-0 bg-[#000000b5] z-[2] flex justify-between gap-10 items-center px-7">
          <div className="-translate-y-13">
            <h1 className="linear-text leading-17 font-bold text-[4rem]">
              Find Your Perfect <br /> Home With Dwell
            </h1>
            <p className="text-white text-[1.1rem] font-medium mb-5">
              Discover properties that match your lifestyle and budget.
            </p>
            <div className="flex gap-6">
              <button className="px-3 py-3 border-[0.1em] text-[0.88rem] border-white text-white font-semibold rounded-md">
                List your property
              </button>
              <button className="px-3 py-3 border-[0.1em] text-[0.88rem] border-primary bg-primary text-black font-semibold rounded-md">
                Search listings
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center flex-1 items-center -translate-y-13">
            <Image className="w-20" src={LocationIcon} alt="Location icon" />
            <div className="flex gap-30">
              <Image className="w-20" src={LocationIcon} alt="Location icon" />
              <Image className="w-20" src={LocationIcon} alt="Location icon" />
            </div>
            <Image className="w-20" src={LocationIcon} alt="Location icon" />
          </div>
        </div>
        <Image
          className="rounded-md scale-[1.1] -translate-y-10"
          src={HeroImg}
          alt="Image of a house"
        />

        <div className="custom-fz absolute bottom-0 left-1/2 -translate-1/2 p-4 w-200 bg-[#ffffffcb] rounded-lg z-[3] flex-main gap-7">
          <div className="font-semibold flex gap-6 text-center">
            <div className="border-r-[0.15em] pr-10 border-[grey]">
              <p>800+</p>
              <p>House Sold</p>
            </div>
            <div className="border-r-[0.15em] pr-10 border-[grey]">
              <p>30+</p>
              <p>African Countries</p>
            </div>
            <div>
              <p>13yrs</p>
              <p>In Business</p>
            </div>
          </div>

          <form className="relative">
            <label htmlFor="filter" className="bg-[#EEEEEF] absolute left-0 rounded-full grid place-items-center w-9 h-9">
              <Icon
                icon="iconoir:search"
                className="text-black text-[1.2rem]"
              />
            </label>
            <input
              id="filter"
              className="custom-fz bg-white rounded-full pl-13 px-5 h-9 placeholder:font-medium"
              type="text"
              placeholder="Filter"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
