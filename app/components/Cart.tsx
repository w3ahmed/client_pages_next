"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react"
import { storeStatus } from "./Layout"

export default function Cart({type}:{type:boolean}){
    let getStore = useContext(storeStatus);
    const handleEditItem = (value:any, id:any)=>{
        getStore.edit_product({value:value.target.value, id: id})
    }
    let [show, setShow] = useState(type ? true:false)
    useEffect(()=>{
        setShow(true);
    }, [])
    if(show){
        return(
            <div className={`${type && 'z-10 fixed top-0 right-0 rtl:left-0 w-10/12 sm-first:w-7/12 sm:w-5/12 lg:w-3/12 h-[100vh]'} flex flex-wrap content-between  border border-gray-300 bg-gray-100 pb-2`}>
                <div className="flex flex-wrap content-start w-full h-[80%]">
                    <div className="w-full flex justify-between items-center text-center self-start text-white text-2xl p-2 bg-neutral-800">
                        {type && 
                            <button onClick={()=>getStore.setOpenSide('')} className="material-symbols-outlined">close</button>
                        }
                        <span className="m-auto">Cart</span>
                    </div>
                    {getStore.cart.products.length > 0 ?
                        <div className="w-full self-start h-[90%]">
                            <ul className="h-auto max-h-[100%] overflow-auto">
                                {getStore.cart.products.map((ele:any) => 
                                    <li key={'key'+ele.id} className="flex flex-wrap py-2 px-1 m-1 rounded bg-white">
                                        <div className="w-3/12">
                                            <Image src={`/${ele.main_image}`} width={500} height={500} className=" h-28" alt="" />
                                        </div>
                                        <div className="flex flex-wrap gap-2 items-start w-9/12 px-2">
                                            <div className="flex justify-between w-full whitespace-nowrap">
                                                <a href={ele.id} title={ele.title} className="w-10/12 font-medium text-base self-start whitespace-nowrap overflow-hidden text-ellipsis">{ele.title}</a>
                                                <button onClick={()=>getStore.remove_product({id: ele.id})} className="w-2/12 bg-rose-500 text-white rounded">&#10005;</button>
                                            </div>
        
                                            <div className="flex justify-between w-full whitespace-nowrap">
                                                <span className="">Color </span>
                                                <span className="">{ele.color.name} </span>
                                            </div>
                                            <div className="flex justify-between w-full whitespace-nowrap">
                                                <label htmlFor="">Quantity </label>
                                                <input onChange={(e)=>handleEditItem(e, ele.id)} className="border border-solid rounded text-center" type="number" value={ele.quantity} name="" min={1} max={10} id="" />
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            <div className="flex flex-wrap justify-around py-2 px-1 m-1 rounded bg-white">
                                <span className="font-bold">Order Price</span>
                                <span>{getStore.cart.total} $</span>
                            </div>
                        </div>
                        :
                        <div className="w-full text-lg font-bold text-center p-4">Cart is empty</div>
                    }
                </div>
                {type &&
                    <div className="flex flex-wrap w-full gap-2 items-center justify-around">
                        {/* <a href="">Login</a> */}
                        <div className="w-full text-center">
                            <a href="/checkout" className="bg-gray-900 p-2 w-6/12 text-white rounded">Checkout</a>    
                        </div>
                    </div>
                }
            </div>
        )
    }else{
        return(
            <div>Cart is loading ...</div>
        )
    }
}