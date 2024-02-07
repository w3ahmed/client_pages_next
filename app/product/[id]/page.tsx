import { api_domin } from '@/app/helper';
import type { Metadata } from 'next'
import AddToCart from "../../components/add_to_cart";
import Slide from "../../components/slide";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined },
}



export async function generateMetadata( { params, searchParams }: Props): Promise<Metadata> {
    const res = await fetch(`${api_domin}/api/products/${params.id}`, {cache: "no-cache"})
    const data = await res.json();
    return {
      title: data.title,
    }
}
  
export default async function Product({params}:{params:any}){
    const res = await fetch(`${api_domin}/api/products/${params.id}`, {cache: "no-cache"})
    const data = await res.json();
    
    return(
        <div className="sm:container flex flex-wrap w-full gap-y-4 p-4 m-auto">
            <h4 className="w-full text-xl">{data.title}</h4>
            <div className="sm:pe-4 w-full sm:w-7/12">
                <Slide type={true} data={[data.main_image, ...data.images]}/>
            </div>
            <AddToCart data={data}/>
        </div>
    )
}