"use client";
import { useContext } from "react";
import { InputSearch } from "./Header";
import { storeStatus } from "./Layout";

export default function Nav(){
    let getStore = useContext(storeStatus)
    return(
        <div className="flex z-20 fixed h-full top-0 right-0 rtl:left-0 flex-wrap content-between w-10/12 sm-first:w-7/12 sm:w-5/12 lg:w-3/12 border-x border-gray-300 bg-gray-100 pb-2">
            <div className="flex flex-wrap content-start w-full h-[80%]">
                <div className="w-full flex justify-between items-center text-center self-start text-white text-2xl p-2 bg-neutral-800">
                    <button onClick={()=>getStore.setOpenSide('')} className="material-symbols-outlined">close</button>
                    <span className="m-auto">Menu</span>
                </div>
                <div className="w-full self-start h-[80%] [&>*]:w-full [&>*]:p-2">
                    <InputSearch type='menu'/>
                    <ul className="h-auto max-h-[100%] overflow-auto [&>*]:justify-center">
                        <li className="flex flex-wrap py-2 px-1 m-1 rounded bg-white hover:bg-gray-300">
                            <a href="/">Home</a>
                        </li>
                        <li className="flex flex-wrap py-2 px-1 m-1 rounded bg-white hover:bg-gray-300">
                            <a href="/categories/laptops">Laptops</a>
                        </li>
                        <li className="flex flex-wrap py-2 px-1 m-1 rounded bg-white hover:bg-gray-300">
                            <a href="/categories/phones">Phones</a>
                        </li>
                        <li className="flex flex-wrap py-2 px-1 m-1 rounded bg-white hover:bg-gray-300">
                            <a href="/categories/accessories">Accessories</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap w-full gap-2 items-center justify-around">
                <div className="w-full text-center">
                    <a href="/profile" className="bg-gray-900 p-2 w-6/12 text-white rounded">Profile</a>    
                </div>
            </div>
        </div>
    )
}