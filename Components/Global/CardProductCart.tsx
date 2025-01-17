import { itemsCart } from "@/types/cart";
import Image from "next/image";
import React from "react";

const CardProductCart = ({ data }: { data: itemsCart }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <Image
            width={100}
            height={100}
            className="object-cover w-full h-full"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div>
          <h6 className="text-sm">{data.name}</h6>
          <p className="text-xs">
            {data.extras.map((item, index) => (
              <h5 key={index}>{item}</h5>
            ))}
            {data.sizes.map((item, index) => (
              <h5 key={index}>{item}</h5>
            ))}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs">Price: ${data.price}</p>
        <p className="text-xs">Quantity: {data.quantity}</p>
      </div>
    </>
  );
};

export default CardProductCart;
