const express=require('express');
const {DeleteCustomer,AllCustomers,NewCustomer,OneCustomer,UpdateCust}=require('../Controllers/CustomersController')
//const {NewProducts}=require('../Controllers/ProductsControllers')
const Router=express.Router();

Router.get('/',AllCustomers)
      .post('/',NewCustomer)
      .get('/:id',OneCustomer)
      .put('/:id',UpdateCust)
       .delete('/:id',DeleteCustomer);
   
// Router.post('/',NewProducts);
      
module.exports=Router