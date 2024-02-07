"use client";
import { useContext, useState } from "react";
import Cart from "../components/Cart";
import { storeStatus } from "../components/Layout";

export default function Checkout(){
    let [payment, setPayment] = useState('cod')
    let getCart = useContext(storeStatus)
    let handleCheckout = ()=>{
        let getUser = JSON.parse(localStorage.getItem('user')||"")
        let whatDate = new Date()
        let repereOrder = {
            date: `${whatDate.getUTCDate()} - ${whatDate.getUTCMonth()+1} - ${whatDate.getUTCFullYear()}`,
            status: 1,
            payment: payment === "cod" ? "Cash On Delivery" : payment === "paypal" ? "PayPal" : "Credit Card",
            products: getCart.cart.products.length,
            price: getCart.cart.total
        }
        
        getUser.orders.push(repereOrder)
        localStorage.setItem("user", JSON.stringify(getUser))
        getCart.reset_cart()
        location.assign('/profile')
    }

    return(
        <div className="sm:container m-auto flex flex-wrap w-full justify-between">
            <div className="w-full order-2 sm-first:w-10/12 sm:order-1 sm:w-7/12 lg:w-6/12 m-auto sm:px-4 [&>*]:my-4">
                <div className="w-full sm:hidden border-b border-solid border-x-gray-400 my-4"></div>
                <h4 className="font-medium text-lg">Order Address</h4>
                <div className="flex gap-2 [&>*]:border [&>*]:rounded [&>*]:p-1">
                    <input type="text" className="w-6/12" placeholder="Street"/>
                    <input type="text" className="w-6/12" placeholder="District"/>
                </div>
                <div className="flex gap-2 [&>*]:border [&>*]:rounded [&>*]:p-1">
                    <input type="text" className="w-6/12" placeholder="City"/>
                    <input type="text" className="w-6/12" placeholder="Contry"/>
                </div>
                <div className="flex gap-2 [&>*]:border [&>*]:rounded [&>*]:p-1">
                    <input type="number" className="w-6/12" placeholder="Phone"/>
                    <input type="text" className="w-6/12" placeholder="Name"/>
                </div>
                <div className="w-full border-b border-solid border-x-gray-400 my-4"></div>
                <h4 className="font-medium text-lg">Payment Method</h4>
                <div className="flex gap-4 [&>*]:border-2  [&>*]:rounded [&>*]:p-2 ">
                <button onClick={()=>setPayment('cod')} className={payment === 'cod' ? "border-neutral-600":""}>
                        Cash On Delivery
                    </button>
                    <button onClick={()=>setPayment('credit')} className={payment === 'credit' ? "border-neutral-600":""}>
                        Credit card
                    </button>
                    <button onClick={()=>setPayment('paypal')} className={payment === 'paypal' ? "border-neutral-600":""}>
                        PayPal
                    </button>
                </div>
                <div className="w-full border-b border-solid border-x-gray-400 my-4"></div>
                <button onClick={handleCheckout} className="py-2 px-4 rounded bg-neutral-800 text-white">Checkout</button>
            </div>
            <div className="w-full order-1 sm-first:w-10/12 sm:order-2 sm:w-5/12 lg:w-3/12 m-auto">
                <div className="w-full sm:hidden border-b border-solid border-x-gray-400 p-2 my-4"></div>
                <Cart type={false}/>
                
            </div>
        </div>
    )
}