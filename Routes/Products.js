const express=require('express');
const updateimage=require('../utils/MulterConfig')
const {UpdatePro,DeletePro,NewProducts,GetProducts,GetonePro}=require('../Controllers/ProductsControllers')
const Router=express.Router();

Router.post('/',updateimage.single('file'),NewProducts)
       .get('/',GetProducts)
       .get('/:id',GetonePro)
       .delete('/:id',DeletePro)
       .put('/:id',updateimage.single('file'),UpdatePro);
module.exports=Router