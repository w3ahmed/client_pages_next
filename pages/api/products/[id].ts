import { colors, data } from "../data";
export default async function handler(req:any, res:any) {
    const {id, color, option, quantity} = req.body
    
    if(req.method === 'POST'){
        let check = data.filter(ele => {
            let checkOpt = ele.options ? 
            Boolean(ele.options.filter(ele => ele.id === option && ele.quantity >= Number(quantity))[0])
            :
            Boolean(ele.no_options.filter(ele => ele.color === color && ele.quantity >= Number(quantity))[0]);
            return String(ele.id) === id && ele.colors.every((ele:any) => ele.id !== color) && checkOpt
        });
        if(check[0]){
            let {id, title, main_image, options, no_options} = check[0]
            let getOption = options ? 
                options.filter(ele => ele.id === option )[0]
                :
                no_options && no_options.filter(ele => ele.color === color )[0]
            let data = {
                id: id, title: title, main_image: main_image, color: colors.filter((ele:any) => ele.id === color)[0] ,
                option: getOption, quantity: Number(quantity), price: getOption &&  getOption.price , total: getOption && getOption.price * Number(quantity)
            }
            console.log(data);
            
            res.status(200).json(data)
      
        }else{
            res.status(400).json({errors: 'Process Failed'})
        }
    }else if(req.method === 'GET'){
        let product = data.filter((ele:any) => String(ele.id) === req.query.id)[0];
        let resData = {...product, colors: colors.filter(ele=> product.colors.includes(ele.id))}
        
        res.status(200).json(resData);
    }
    
}
  