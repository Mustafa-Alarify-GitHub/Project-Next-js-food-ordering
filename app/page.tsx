import MinaTitle from "@/Components/Global/MinaTitle";
import BestSellers from "@/Components/Home/BestSellers";
import Hero from "@/Components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-2">
      <Hero />
      <MinaTitle title="CHECK OUT" subTitle="Our Best Sellers" />
      <BestSellers />
    </div>
  );
}
