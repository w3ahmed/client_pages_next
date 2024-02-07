"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Profile(){
    let [getUser, setGetUser]:any = useState()
    useEffect(()=>{
        setGetUser(JSON.parse(localStorage.getItem("user")||""))
    },[])
    
    if(!getUser){"Loading ..."}
    else{
        return(
            <div className="lg:w-10/12 flex flex-wrap justify-center m-auto">
                <div className="w-full sm:hidden lg:w-full border-b border-solid border-x-gray-400 mt-2"></div>
                <div className="w-full lg:w-full flex justify-between items-center my-4">
                    <div className="flex items-center">
                        <Image src="profile.svg" width={500} height={500} className="w-16" alt="profile_image" />
                        <div>
                            <div className="text-lg capitalize">{getUser.info.name}</div>
                            <div className="flex items-center gap-2 [&>*]:text-green-800">
                                <span className="material-symbols-outlined ">check_circle</span>
                                <span>Premium</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="py-2 px-4 rounded bg-neutral-800 text-white">Log Out</button>
                    </div>
                </div>
                <div className="w-full lg:w-full border-b border-solid border-x-gray-400 mt-2"></div>
                <div className="w-10/12 sm-first:w-7/12 sm:w-6/12 [&_input]:border [&_input]:block [&_input]:rounded [&_input]:my-2">
                    <h3 className="text-lg font-medium py-4">Information Account</h3>
                    <div>
                        <label htmlFor="uname">Name</label>
                        <input type="text" name="uname" id="uname" />
                    </div>
                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="phone" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="repassword">Confirm Password</label>
                        <input type="password" name="repassword" id="repassword" />
                    </div>
                    <button className="py-2 px-4 mt-2 rounded bg-neutral-800 text-white">Update</button>
                </div>
                
                <div className="w-full sm:hidden border-b border-solid border-x-gray-400 mt-4"></div>
                
                <div className="w-10/12 sm-first:w-7/12 sm:w-6/12">
                    <h3 className="text-lg font-medium py-4">Orders</h3>
                    {getUser.orders.map((ele:any)=>
                        <div key={ele.date} className="flex flex-wrap gap-4 lg:w-9/12 shadow hover:shadow-lg border rounded p-2 mb-4">
                            <div className="w-full flex justify-between">
                                <div>Date</div>
                                <div className="text-blue-800">{ele.date}</div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div>Status</div>
                                <div className="text-blue-800">{ele.status === 1 ? "Pending":"Approved"}</div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div>Payment</div>
                                <div className="text-blue-800">{ele.payment}</div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div>Products</div>
                                <div className="text-blue-800">{ele.products} Items</div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div>Price</div>
                                <div className="text-blue-800">{ele.price} $</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}