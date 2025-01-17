"use client";
import Image from "next/image";
import React, { useState } from "react";
import GButton from "./GButton";

interface CardProductProps {
  img: string;
  name: string;
  description: string;
  price: number;
}

const CardProduct: React.FC<CardProductProps> = ({
  img,
  name,
  description,
  price,
}) => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  return (
    <>
      {isShowDialog && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsShowDialog(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold">{items.name}</h2>
            <p className="text-sm">{items.description}</p>
            <h2 className="text-lg font-bold">Sizes</h2>
            <ul>
              {items.sizes.map((size) => (
                <li>
                  <label htmlFor="">
                    <input name="size" type="radio" /> {size.name}{" "}
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-lg font-bold">Extra</h2>
            <ul>
              {items.extras.map((extra) => (
                <li>
                  <label htmlFor="">
                    <input  type="checkbox" /> {extra.name}{" "}
                  </label>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="group block border p-4 bg-slate-100 w-full">
        <Image
          src={items.image}
          alt={items.name}
          className="object-contain mx-auto"
          width={200}
          height={200}
        />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {items.name}
            </h3>

            <p className="mt-1.5 text-pretty text-xs text-gray-500">
              {items.description}
            </p>
          </div>

          <p className="text-gray-900">${items.basePrice}</p>
        </div>
        <div className="px-auto py-3 w-full">
          <GButton text="Add To Cart" onclick={() => setIsShowDialog(true)} />
        </div>
      </div>
    </>
  );
};

export default CardProduct;
