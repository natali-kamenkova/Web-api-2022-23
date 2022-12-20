
//экспорт обьекта с 5ю функциями для каждого действия
//цель- чтобы вся логика была в этом файле
//const connection = global.MySqlDb;
module.exports={
  GetAllProducts: (req, res)=>{
    let connection = global.db
    connection.query("select * from t_products", function(err, rows, fields){
      if(err){
        console.log(err.message);
        return res.status(500).json(err.message);
      }
      else {
        console.log('OK');
        return res.status(200).json(rows);
      }
    });
    
   },
  GetProductByID: (req, res)=>{
    let connection = global.db
    connection.query("select * from t_products where pid =" + req.params.id, function(err, rows, fields){
      if(err){
        console.log(err.message);
        return res.status(500).json(err.message);
      }
      else {
        console.log('OK');
        return res.status(200).json(rows);
      }
    });
   // return res.status(200).json({Msg: "Get Product by id" +" "+  req.params.id});
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