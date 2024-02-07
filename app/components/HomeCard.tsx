"use client";
import { useState } from "react"
import Card from "./Card";

export default function HomeCard({data}:{data: any}){
    let [filterData, setFilterData] = useState(data);
    console.log(filterData);
    
    return(
        <div className="sm:container m-auto flex flex-wrap w-full pt-4">
            <div className="flex w-full gap-4 justify-between items-center">
            <h4 className="whitespace-nowrap w-4/12">New Products</h4>
            <div className=" whitespace-nowrap overflow-auto [&>*]:border-b-2 [&>*]:mx-2 [&>*:hover]:border-b-2 [&>*:hover]:border-rose-600">
                <button onClick={()=>setFilterData(data)}>All</button>
                <button onClick={()=>setFilterData(data.filter((ele:any) => ele.category === "phones"))}>Phones</button>
                <button onClick={()=>setFilterData(data.filter((ele:any) => ele.category === "laptops"))}>Laptops</button>
                <button onClick={()=>setFilterData(data.filter((ele:any) => ele.category === "accessories"))}>Accessories</button>
            </div>
            </div>
            <div className="pt-4 whitespace-nowrap overflow-auto [&>*]:inline-block">
            {filterData.map((ele:any)=>
                <Card key={ele.id} data={ele} />
            )}
            </div>
        </div>

    )
}