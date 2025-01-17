import React from "react";
import CardProduct from "../Global/CardProduct";

const BestSellers = () => {
  const dataBestSellers = [
    {
      id: 1,
      name: "Product 1",
      image: "https://example.com/product1.jpg",
      price: 19.99,
      description:
        "Product 1 is available for purchase at https https://example.com",
    },
    {
      id: 1,
      name: "Product 1",
      image: "https://example.com/product1.jpg",
      price: 19.99,
      description:
        "Product 1 is available for purchase at https https://example.com",
    },
    {
      id: 1,
      name: "Product 1",
      image: "https://example.com/product1.jpg",
      price: 19.99,
      description:
        "Product 1 is available for purchase at https https://example.com",
    },
    {
      id: 1,
      name: "Product 1",
      image: "https://example.com/product1.jpg",
      price: 19.99,
      description:
        "Product 1 is available for purchase at https https://example.com",
    },
  ];
  return (
    <div className="w-full grid grid-cols-4 gap-4 mx-5">
      {dataBestSellers.map((el, i) => (
        <CardProduct
          description={el.description}
          img={el.image}
          name={el.name}
          price={el.price}
          key={i}
        />
      ))}
    </div>
  );
};

export default BestSellers;
