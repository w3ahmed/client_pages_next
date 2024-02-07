import Image from "next/image";

export default function Card({data}:{data:any}){
    return(
        <div className="p-1 sm:p-2 lg:p-4 w-6/12 sm-first:w-5/12 sm:w-4/12 lg:w-3/12">
            <div className="rounded shadow-sm shadow-gray-400 hover:shadow-gray-600">
                <Image src={`/${data.main_image}`} alt="product_image" loading='lazy' width={500} height={500} />
                <div className="p-2">
                    <a href={`/product/${data.id}`} className=" font-medium text-xs sm-first:text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">{data.title}</a>
                    <div className="w-full py-2 [&>*]:me-2 [&>*]:rounded-full [&>*]:h-4 [&>*]:w-4 ">
                        <span className=" bg-rose-700"></span>
                        <span className=" bg-slate-900"></span>
                        <span className=" bg-green-800"></span>
                    </div>
                    <div>
                        <span className="text-gray-800">999 $</span>
                    </div>
                </div>
            </div>
        </div>
    )
}