const express=require('express');
const Router=express.Router();
const {Deleteorder,newOrders,AllOrders,GetoneOrders,UpdateOrder}=require('../Controllers/OrdersControllers');

Router.post('/',newOrders)
      .get('/',AllOrders)
      .get('/:id',GetoneOrders)
      .put('/:id',UpdateOrder)
      .delete('/:id',Deleteorder);
      
module.exports=Router;
