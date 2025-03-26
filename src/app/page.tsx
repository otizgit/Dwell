import Header from "@/components/layout/Header";
import Hero from "@/components/ui/home/Hero";
import HouseType from "@/components/ui/home/HouseType";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <HouseType />
    </div>
  );
}
