"use client";
export default function ListItem({item, type, action}:{action:any, type:any, item:any}){
    let handleSetQuery = (action:any, type:any, value:any)=>{
        let searchParam = new URLSearchParams(location.search)
        let getParam = searchParam.get(type)
        if(action){
            if(getParam){
                searchParam.delete(type)
                if(getParam.match(`,${value}`)){
                    searchParam.append(type, getParam.replace(`,${value}`, `,${value}`))
                }else if(getParam.match(`${value}`)){
                    searchParam.append(type,getParam.replace(`${value}`, `${value}`))
                }else{
                    searchParam.append(type, getParam.concat(`,${value}`))
                }

            }else{
                searchParam.append(type, value)
            }
        }else{
            
            if(getParam && getParam.split(',').length > 1){
                searchParam.delete(type)
                if(getParam.match(`,${value}`)){
                    searchParam.append(type, getParam.replace(`,${value}`, ""))
                }else if(getParam.match(`${value},`)){
                    searchParam.append(type,getParam.replace(`${value},`, ""))
                }
            }else{
                console.log(getParam);
                getParam?.match(`,${value}`) || getParam?.match(`${value}`)&& searchParam.delete(type)
            }
        }

        let getQuery = `?`
        searchParam.forEach((value, key) =>{
            getQuery = getQuery.concat(`${getQuery.length > 2 ? '&':''}${key}=${value}`)
        })
        
        location.assign(getQuery);

    }

    return(
        <li className={`cursor-pointer ${!action && "check_option"}`} onClick={()=>handleSetQuery(action, type, item.id)}>{['color', 'brand'].includes(type) ? item.name:item.value}</li>
    )
}