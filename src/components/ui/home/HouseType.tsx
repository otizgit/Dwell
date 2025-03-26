import React from "react";
import Image from "next/image";

export default function HouseType() {
  return (
    <div className="max-width paddingX">
      <ul className="flex  justify-around mb-6">
        <li className="font-medium custom-fz">Best Seller</li>
        <li className="font-medium custom-fz">Penthouse</li>
        <li className="font-medium custom-fz">Duplex</li>
        <li className="font-medium custom-fz">Bungalow</li>
        <li className="font-medium custom-fz">Detached House</li>
      </ul>
    </div>
  );
}
