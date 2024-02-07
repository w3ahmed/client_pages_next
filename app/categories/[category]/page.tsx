import type { Metadata } from 'next'
import ListItem from "@/app/components/list_item";
import Card from "../../components/Card";
import { headers } from 'next/headers';
import { api_domin } from '@/app/helper';

type Props = {
    params: { category: string }
    searchParams: { [key: string]: string | string[] | undefined },
}



export async function generateMetadata( { params, searchParams }: Props): Promise<Metadata> {
    return {
      title: params.category,
    }
}

export default async function Category({ params }: { params:any; }){
      let getQuery = `?`
      
      let getQuerys = new URLSearchParams(headers().get('x-invoke-query')||'')

    let jsonQuery = JSON.parse(getQuerys.keys().next().value)
    delete jsonQuery['_rsc']
    for (const key in jsonQuery) {
        getQuery = getQuery.concat(`${getQuery.length > 2 ? '&':''}${key}=${jsonQuery[key]}`)
    }
        
    let res = await fetch(`${api_domin}/api/filter/${params.category}${getQuery}`, {cache: "no-cache"});
    let data = await res.json();
    
    if(res.status === 404){
        return(
            <div>404 | Page not found</div>
        )
    }else{
        return(
            <div className="flex w-full">
                <div className="w-full hidden md:block md:w-3/12 lg:w-2/12 border">
                    <div className="w-full text-center p-3 bg-black text-white">Filter</div> 

                    <details open={true}>
                        <summary className="border-b border-gray-800 p-2 cursor-pointer">Brands</summary>
                        <ul className="[&>*]:py-2 [&>*]:px-4 [&>*]:border-b">
                            {data.filter.brands.map((ele:any) => 
                                <ListItem key={ele.name} action={data.query['brand'] && data.query['brand'].includes(ele.id)?false:true}item={ele} type={'brand'}/>
                            )}
                        </ul>
                    </details>
                    <details open={true}>
                        <summary className="border-b border-gray-800 p-2 cursor-pointer">Colors</summary>
                        <ul className="[&>*]:py-2 [&>*]:px-4 [&>*]:border-b">
                            {data.filter.colors.map((ele:any) => 
                                <ListItem key={ele.name} action={data.query['color'] && data.query['color'].includes(ele.id)?false:true} item={ele} type={'color'}/>
                            )}
                        </ul>
                    </details>

                    {data.filter.props.length > 0 && data.filter.props.map((ele1:any) => 
                        <details key={ele1.name} open={true}>
                            <summary className="border-b border-gray-800 p-2 cursor-pointer">{ele1.value}</summary>
                            <ul className="[&>*]:py-2 [&>*]:px-4 [&>*]:border-b">
                                {ele1.options.map((ele:any) => 
                                    <ListItem key={ele.name} action={data.query[ele1.name] && data.query[ele1.name].includes(ele.id)?false:true} item={ele} type={ele1.name}/>
                                )}
                            </ul>
                        </details>
                    )}

                </div>
                <div className="w-full md:w-9/12 lg:w-10/12 flex flex-wrap justify-center gap-y-4">
                    {data.data.map((ele:any) => 
                        <Card key={ele.id} data={ele} />
                    )}
                </div>
            </div>
        )
    }
}