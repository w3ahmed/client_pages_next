import Image from "next/image";
import HomeCard from "./components/HomeCard";
import Slide from "./components/slide";
import { api_domin } from "./helper";

export default async function Home(){
  let res = await fetch(`${api_domin}/api/products`, {cache: "no-cache"});
  let data = await res.json();


  return (
    <>
      <div className="sm:container m-auto">
        <Slide type={false} data={['baner.jpg','baner2.jpg','baner3.jpg', ]}/>
      </div>
      <div className="sm:container m-auto flex w-full justify-center gap-5 pt-[2rem]">
        <div className="text-center">
          <Image src={"/phone.png"} className=" w-20 rounded-full m-auto" alt="" width={100} height={100} />
          <span>Phones</span>
        </div>
        <div className="text-center">
          <Image src={"/laptop.png"} className=" w-20 rounded-full m-auto" alt="" width={100} height={100} />
          <span>Laptops</span>
        </div>
        <div className="text-center">
          <Image src={"/accessories.png"} className=" w-20 rounded-full m-auto" alt="" width={100} height={100} />
          <span>Accessories</span>
        </div>
      </div>
      <div className="w-full border-b border-solid border-x-gray-400 p-2 pt-4"></div>

      <HomeCard data={data}/>
    </>
  )
}
