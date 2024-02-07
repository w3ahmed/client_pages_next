"use client"
import Image from "next/image";
import {useEffect, useState } from "react";

export default function Slide({data,type}:{data?:any, type:boolean}){
    let [images, setImages] = useState([])
    let [count, setCount] = useState(0);
    useEffect(()=>{
        if(data){
            setImages(data)
        }
        
    },[data])
    return(
        <>
            <div className={`${type && 'border rounded border-gray-300'} overflow-hidden flex w-full relative h-[30vw] max-h-[30vw]"`} dir="ltr">
                <Image src={images.length > 0 ? `/${images[count]}`:'/'} className={`${type && 'max-w-[30vw]'} m-auto`} alt="" width={100} height={100} />
                <button disabled={count > 0 ? false:true} onClick={()=>setCount(state => state-1)} className="text-xl bg-gray-300 rounded-s-md absolute top-[calc(50%-2vw-.5rem)] rotate-180 p-[1.5vw]">&#10148;</button>
                <button disabled={count < images.length-1 ? false:true} onClick={()=>setCount(state => state+1)} className="text-xl bg-gray-300 rounded-l-md absolute top-[calc(50%-2vw-.5rem)] right-0 p-[1.5vw]">&#10148;</button>
            </div>
            {type &&
                <div className="whitespace-nowrap overflow-auto w-full relative [&>*]:inline-block">
                    {images.map((ele:any, index:any)=>
                        <Image key={ele} src={`/${ele}`}  className="w-4/12 sm:w-3/12 md:w-2/12 p-1 py-2 h-28" width={100} height={100} alt="" onClick={()=>setCount(index)} style={{opacity: ele === images[count] ? 1:.7}} />
                    )}
                </div>
            }
        </>
        
    )
}