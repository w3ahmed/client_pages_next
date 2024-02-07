"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { storeStatus } from "./Layout";
import Nav from "./Nav";

export default function Header(){
    let getStore = useContext(storeStatus)
    let [getProductsLength, setProductsLength] = useState(0)
    useEffect(()=>{
        setProductsLength(getStore.cart.products.length)
    },[getStore.cart.products])
    return(
        <header className="flex flex-wrap">
            <div className="hidden sm:flex justify-between items-center w-full bg-neutral-800 text-white p-1">
                <div className="flex gap-5">
                    <div className="flex gap-2 text-xl">
                        <span className="material-symbols-outlined text-rose-600">call</span>
                        <span className="text-sm">01557559549</span>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <span className="material-symbols-outlined text-rose-600">email</span>
                        <span className="text-sm">ahmed.tareq.mail@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="sm:container m-auto items-center flex justify-between w-full pb-2 pt-4">
                <div className="w-4/12 sm:w-3/12 md:w-2/12">
                    <Image src={"/next.svg"} className="w-full sm:p-1" alt="" width={100} height={100}/>
                </div>
                <InputSearch type="header"/>
                <div className="flex justify-end gap-5 items-end text-3xl w-auto">
                    <div className="hidden sm:block">
                        <a href="/profile" className="material-symbols-outlined align-middle text-rose-600 flex items-center gap-2">
                            account_circle
                        </a>
                    </div>
                    <div className="relative">
                        <span className="absolute text-base right-[-10px] bottom-[20px] flex justify-center items-center rounded-full text-white bg-neutral-800 w-[22px] h-[22px]">{getProductsLength}</span>
                        <button onClick={()=>getStore.setOpenSide('cart')} className="material-symbols-outlined align-middle text-rose-600 flex items-center gap-2">
                            shopping_cart
                        </button>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={()=>getStore.setOpenSide('menu')}  className="material-symbols-outlined align-middle text-rose-600 flex items-center gap-2">
                            menu
                        </button>
                    </div>
                </div>
                {getStore.openSide === 'cart' &&
                    <Cart type={true}/>
                }
                {getStore.openSide === 'menu' &&
                    <Nav />
                }
            </div>
            <div className="hidden sm:block w-full border-b border-solid border-x-gray-400 p-2 pt-4"></div>
            <div className="sm:container m-auto flex">
                <ul className="[&>*]:inline-block [&>*]:border-b-2 [&>*]:border-transparent hidden sm:block">
                    <li className="hover:border-b-2 hover:border-solid hover:border-rose-600 [&>*]:p-3 [&>*]:inline-block"><a href="/">Home</a></li>
                    <li className="hover:border-b-2 hover:border-solid hover:border-rose-600 [&>*]:p-3 [&>*]:inline-block"><a href="/categories/laptops">Laptops</a></li>
                    <li className="hover:border-b-2 hover:border-solid hover:border-rose-600 [&>*]:p-3 [&>*]:inline-block"><a href="/categories/phones">Phones</a></li>
                    <li className="hover:border-b-2 hover:border-solid hover:border-rose-600 [&>*]:p-3 [&>*]:inline-block"><a href="/categories/accessories">Accessories</a></li>
                </ul>
            </div>
            <div className="hidden sm:block w-full border-b border-solid border-x-gray-400"></div>
        </header>
    )
}

export const InputSearch = ({type}:{type:string})=>{
    let [searchKey, setSearchKey] = useState('')
    let handleSearch = ()=>{
        location.assign(`/search?s=${searchKey}`)
    }
    return(
        <div className={`${type === 'menu' ? 'flex':'hidden sm:flex'} sm:w-4/12 md:w-4/12 text-2xl`}>
            <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder="Search Product" className="w-full focus:outline-none p-2 border border-solid border-rose-600 text-sm rounded-s-lg"/>
            <button onClick={handleSearch} className="material-symbols-outlined bg-rose-600 text-white p-1 ltr:rounded-r-lg rtl:rounded-l-lg" >search</button>
        </div>

    )
}