const router = require('express').Router();

const {GetAllProducts, GetProductByID, UpdateProduct, AddProduct, DeleteProduct} = require('../controlers/product')

// определили маршрутизацию-конечную точку метода GET для пути до товаров
router.get('/', GetAllProducts) 

//получение товара по коду
router.get('/:id', GetProductByID)    

//обновление товара по коду
router.put('/:id', UpdateProduct)

//добавление нового товара
router.post('/', AddProduct)

//удаление товара по коду
router.delete('/:id', DeleteProduct)


module.exports = router;