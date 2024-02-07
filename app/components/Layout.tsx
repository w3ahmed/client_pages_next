"use client";
import { createContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface statesSchema {
    openSide: string,
    setOpenSide: any,
    cart: any,
    add_product: any,
    edit_product: any,
    remove_product:any,
    reset_cart:any,
}
const statesSchema:statesSchema = {
    openSide: '',
    setOpenSide: ({val}:{val:string})=>{ return statesSchema.openSide = val},
    cart: typeof window !== 'undefined' && localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")||""):{products: [], total: 0} ,
    add_product: function (payload:any){
        let myCart = this.cart
        myCart.products.push(payload)
        typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
    },
    edit_product: function (payload:any){
        let myCart = this.cart
        myCart.products = myCart.products.map((ele:any)=>{if(ele.id === payload.id){ return {...ele, quantity: payload.value}}}).concat(payload)
        typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
    },
    remove_product: function (payload:any){
        let myCart = this.cart
        typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
    },
    reset_cart: function (payload:any){
        let myCart = this.cart
        typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
    },
}
export const storeStatus = createContext(statesSchema)
export default function Layout({children}:{children: any}){
        if(typeof window !== 'undefined'){
            localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")||""):localStorage.setItem("cart",'{"products": [], "total":0}')
        }
        if(typeof window !== 'undefined' && !localStorage.getItem("user")){
            localStorage.setItem("user",'{"info": {"name": "ahmed tarek", "email": "ahmed.tareq.mail@gmail.com"}, "orders":[]}')
        }
        const handleTotalPrice = (data:any)=>{
            return data.reduce((total:any , num: any)=>{ return total + num.total },0)
        }
        const [statesGlobal, setStatesGlobal] = useState({
            openSide: '',
            setOpenSide: (val:string)=>{setStatesGlobal(state =>{return {...state, openSide: val}})},
            cart: typeof window !== 'undefined' && JSON.parse(localStorage.getItem("cart")||"") ,
            add_product:(payload:any)=>{
                let myCart = statesGlobal.cart
                
                myCart.products = myCart.products.filter((ele:any) => ele.id !== payload.id).concat(payload)
                myCart.total = handleTotalPrice(myCart.products)
                
                
                setStatesGlobal(state =>{return {...state, cart: myCart}})

                typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
            },
            edit_product:(payload:any)=>{
                let myCart = statesGlobal.cart
                myCart.products = myCart.products.map((ele:any)=>{if(ele.id === payload.id){ return {...ele, total: Number(payload.value) * ele.price, quantity: payload.value}}else{return {...ele}}})
                myCart.total = handleTotalPrice(myCart.products)
                setStatesGlobal(state =>{return {...state, cart: myCart}})

                typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
            },
            remove_product: (payload:any)=>{
                let myCart = statesGlobal.cart
                myCart.products = myCart.products.filter((ele:any) => ele.id !== payload.id)
                myCart.total = handleTotalPrice(myCart.products)
                setStatesGlobal(state =>{return {...state, cart: myCart}})

                typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(myCart)||"")
            },
            reset_cart: ()=>{
                typeof window !== 'undefined' && localStorage.setItem("cart",'{"products": [], "total":0}')
            },
        });
    
    return(
        <>
            <storeStatus.Provider value={statesGlobal}>
                <Header />
                {children}
                {/* <Footer /> */}
            </storeStatus.Provider>
        </>
    )
}