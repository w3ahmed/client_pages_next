import { data } from "../data";

export default async function handler(req:any, res:any) {
    let {s} = req.query
    let filter = data.filter((ele:any)=> ele.title.match(new RegExp(s,'gi')));
    
    if(filter.length > 0){
        res.status(200).json(filter);
    }else{
        res.status(400).json(filter);
    }
}
  