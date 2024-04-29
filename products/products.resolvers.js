const productModel=require('./products.model')

module.exports={
    Query:{
        products:(parent)=>{
            return productModel.getAllProducts();
        },
        productsByPrice:(_,args)=>{
            return productModel.getProductsByPrice(args.min,args.max);
        },
        product: (_, args) => {
            return productModel.getProductById(args.id);
        }
    }
};