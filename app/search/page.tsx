import type { Metadata } from 'next'
import Card from "../components/Card";
import { headers } from 'next/headers';
import { api_domin } from '../helper';

type Props = {
    params: { s: string }
    searchParams: { [key: string]: string | string[] | undefined },
}



export async function generateMetadata( { params, searchParams }: Props): Promise<Metadata> {
    let getQuerys = new URLSearchParams(headers().get('x-invoke-query')||'')
    
    let jsonQuery = JSON.parse(getQuerys.keys().next().value)
    return {
      title: `Search : ${jsonQuery.s}`,
    }
}

export default async function Search(){

      
    let getQuerys = new URLSearchParams(headers().get('x-invoke-query')||'')
    
    let jsonQuery = JSON.parse(getQuerys.keys().next().value)
    let getQuery = `?s=${jsonQuery.s}`
        
    let res = await fetch(`${api_domin}/api/search${getQuery}`, {cache: "no-cache"});
    let data = await res.json();
    
    if(res.status === 400){
        return(
            <div>Not found result</div>
        )
    }else{
        return(
            <div className="flex w-full flex-wrap justify-center gap-y-4">
                {data.map((ele:any) => 
                    <Card key={ele.id} data={ele} />
                )}
            </div>
        )
    }
}