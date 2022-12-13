//экспорт обьекта с 5ю функциями для каждого действия
//цель- чтобы вся логика была в этом файле

module.exports={
  GetAllProducts: (req, res)=>{
    return res.status(200).json({Msg: "All products"});
   },
  GetProductByID: (req, res)=>{
    return res.status(200).json({Msg: "Get Product by id" +" "+  req.params.id});
  },
  AddProduct: (req, res)=>{
    return res.status(200).json({Msg: "Add product"});
  },
  UpdateProduct: (req, res)=>{
    return res.status(200).json({Msg: "Update Product by id"+" " +  req.params.id});
  },
  DeleteProduct: (req, res)=>{
    return res.status(200).json({Msg: "Delete product by id"+" "+   req.params.id});
  }
}