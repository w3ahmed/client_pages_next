import { data, props, colors, brands } from "../data";
export default async function handler(req:any, res:any) {
    req.query.filter = [];
    for (const key in req.query) {
        if(key !== 'filter'){req.query[key] = req.query[key].split(',')};
        if(!['color', 'brand', 'category', 'filter'].includes(key)){

            req.query.filter = req.query.filter.concat(req.query[key])
        }
    }        
    
    function checkData(ele:any){

        
        return Boolean(
            Boolean(req.query.color ? ele.colors.filter((ele:any) => req.query.color.includes(ele)).length > 0 : true)
            && Boolean(req.query.brand  ? req.query.brand.includes(ele.brand):true)
            && Boolean(req.query.filter.length > 0 ? ele.filter.filter((filter:any) => req.query.filter.includes(filter)).length > 0:true)
        )
    }

    let checkCategory = ['laptops', 'phones', 'accessories'].includes(req.query.category[0])
    let dataCategory = data.filter(ele => ele.category === req.query.category[0]);
    let {filter, brand, color} = req.query;
    let finalyData = Boolean(filter || brand || color) ? dataCategory.filter(ele => checkData(ele)):null

    let getOptions:any[] = [], getBrands:any[] = [], getColors:any[] = [];
    for (let i = 0; i < dataCategory.length; i++) {
        getBrands.push(dataCategory[i].brand);
        getColors = getColors.concat(dataCategory[i].colors)
        getOptions = getOptions.concat(dataCategory[i].filter)
    }

    let objFilter = {
        props: props.map(ele => {
            return {...ele, options: ele.options.filter(ele => getOptions.includes(ele.id))}
        }).filter(ele => ele.options.length > 0),
        brands: brands.filter(ele => getBrands.includes(ele.id)),
        colors: colors.filter(ele => getColors.includes(ele.id)),
    }
    
    delete req.query.filter
    if(checkCategory){
        res.status(200).json({data: finalyData ? finalyData:dataCategory, query: req.query, filter: objFilter})
    }else{
        res.status(404).json({error:'page not found'})
    }
}