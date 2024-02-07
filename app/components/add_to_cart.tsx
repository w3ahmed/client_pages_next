"use client"
import { useContext, useEffect, useState } from "react";
import { api_domin } from "../helper";
import { storeStatus } from "./Layout";

export default function AddToCart({data}:{data: any}){
    const [errors, setErrors] = useState({ id: '', color: '', options: '', quantity: '' })
    const [whatColor, setWhatColor] = useState(data.colors[0].id)
    const [whatOption, setWhatOption] = useState(data.options ? data.options.filter((ele:any)=> ele.colors.includes(whatColor))[0].price:data.no_options[0].price)
    const myStoreStatus = useContext(storeStatus)
    const handleChangeColor = (id:any)=>{
        setWhatColor(id);
        if(data.options){
            setWhatOption(data.options.filter((ele:any)=> ele.colors.includes(id))[0].price)
        }else{
            setWhatOption(data.no_options.filter((ele:any)=> ele.color === id)[0].price)
        }
    }
    const handleAddToCart = (e:any)=>{
        let form_product = new FormData(document.querySelector("#form_product")as HTMLFormElement)
        console.log(form_product.get('color'));
        
        const bodyQuery:{id: any, color: any, option?: any, quantity: any} = {
            id: form_product.get('id'), color: form_product.get('color'),
            option: form_product.get('option'), quantity: form_product.get('quantity'), 
        }
        if(!bodyQuery.id || !bodyQuery.color || !bodyQuery.quantity || Boolean(data.options && !bodyQuery.option)){
            setErrors(state => {return {...state, id: !bodyQuery.id ? 'Something wrong':''}});
            setErrors(state => {return {...state, color: !bodyQuery.color ? 'Color is required':''}});
            setErrors(state => {return {...state, quantity: !bodyQuery.quantity ? 'Quantity is required':''}});
            setErrors(state => {return {...state, options: data.options && !bodyQuery.option ? 'Options is required':''}})
        }else{
            
            setErrors({ id: '', color: '', options: '', quantity: '' })
            fetch(`${api_domin}/api/products/${bodyQuery.id}`, {method: 'POST', headers: { "Content-Type": "application/json"}, body: JSON.stringify(bodyQuery)})
            .then(async res => {
                if(res.status === 200){
                    myStoreStatus.add_product(await res.json());
                    myStoreStatus.setOpenSide("cart")}
                // if(res.status === 200){ console.log(await res.json()) }
                else{ console.log(await res.json()) }
            })
            .catch(err => console.log(err))
        }
        
    }  
    
    useEffect(()=>{
        if(data.colors){
            (document.getElementById(`color${data.colors[0].name}`)as HTMLInputElement).checked = true;
        }
    },[data.colors])

    return(
        <form id="form_product" className="w-full sm:w-5/12 [&>*:not(.price-cart)]:py-2 [&>*>.props]:pb-2 [&>*>.props]:font-medium">
            <input type="hidden" name="id" value={data.id}/>
            <div className="price-cart flex justify-between items-center py-5 mb-2 border-b border-gray-200">
                <div className="text-3xl text-gray-800">{whatOption} $</div>
                <button type="button" onClick={(e)=>handleAddToCart(e)} className="flex gap-2 items-center border text-xl rounded py-2 px-4 bg-neutral-800 text-white">
                    <span className="text-base">Add To Cart</span>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </button>
            </div>
            <div>
                {errors.color && <div>{errors.color}</div>}
                <div className="props">Colors</div>
                {data && data.colors.map((ele:any) => 
                    <label key={ele.id} htmlFor={'color'+ele.name} onClick={()=>handleChangeColor(ele.id)} className="radio_label [&>*]:me-2" title={ele.name}>
                        <input type="radio" value={ele.id} id={'color'+ele.name} name="color" className="hidden"/>
                        <span className={`checkmark_color w-8 h-8 opacity-80 rounded-full [&:after]:text-white relative ${whatColor === ele.id && 'checked_active'}`} style={{background: ele.code}}></span>
                    </label>
                )}
            </div>
            <div>
            {data.options &&
                <>
                    {errors.options && <div>{errors.options}</div>}
                    <div className="props">Options</div>
                    {data.options.filter((ele: any) => ele.colors.includes(whatColor)).map((ele:any)=>
                        <label key={ele.id} htmlFor={'opt-'+ele.id} className="radio_label [&>*]:me-2">
                            <input type="radio" onClick={()=>setWhatOption(ele.price)} value={ele.id} id={'opt-'+ele.id} name="option" className="hidden [&:checked~.checkmark]:bg-rose-600 [&:checked~.checkmark]:text-white"/>
                            <span className="checkmark border rounded p-2 cursor-pointer [&>*:not(&_:first-child)]:border-t [&>*:not(&_:first-child)]:mt-1 [&>*:not(&_:first-child)]:pt-1">{String(ele.value).split('|').map((ele, index) => <span key={ele+index} className="block">{ele}</span>)}</span>
                        </label>
                    )}
                </>
            }


            </div>
            <div>
                <div className="props">Quantity</div>
                <select defaultValue={'1'} className="inline-block p-1 w-10 text-center border border-gray-700 rounded" name="quantity" id="">
                    {'123456789'.split('').map((ele: any, index: number)=>
                        <option key={ele} value={index+1}>{index+1}</option>
                    )}
                </select>
            </div>
        </form>

    )
}