import React from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function Header() {
  const links: { item: string; link: string }[] = [
    { item: "Home", link: "/" },
    { item: "Services", link: "/services" },
    { item: "Property Listings", link: "/property-listings" },
    { item: "About Us", link: "/about" },
    { item: "Contact Us", link: "/contact" },
  ];

  return (
    <header className="paddingX max-width py-7">
      <div className="bg-[#E3E3E3] py-4 rounded-full px-6 flex items-center justify-between">
        <Image className="w-24" src={Logo} alt="Dwell logo" />
        <nav>
          <ul className="flex gap-6">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a className="custom-fz font-medium" href={link.link}>
                    {link.item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button className="custom-fz border-[0.1em] font-medium border-black px-2 py-1 rounded-md">
            Login
          </button>
          <button className="custom-fz border-[0.1em] font-medium bg-primary border-primary px-2 py-1 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
