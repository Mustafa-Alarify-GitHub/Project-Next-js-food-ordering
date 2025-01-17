import React from "react";
import CardProduct from "../Global/CardProduct";
import { getBestSellers } from "@/server/db/product";

const BestSellers = async () => {
  const dataBestSellers = await getBestSellers()
  return (
    <div className="w-full grid grid-cols-4 gap-4 mx-5">
      {dataBestSellers.map((el, i) => (
        <CardProduct items={el} key={i} />
      ))}
    </div>
  );
};

export default BestSellers;
