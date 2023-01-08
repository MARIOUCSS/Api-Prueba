const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();
require('dotenv').config();
const config=require('./config/config')
const Customer=require('./Routes/customer');
const Products=require('./Routes/Products');
const Orders=require('./Routes/order');
mongoose.connect(process.env.MONGODB_URI)
      .then(()=>console.log("CONECTAO ATLAS"))
      .catch(()=>console.log("Erroreeee"))

app.listen(config.PORT,()=>console.log('Escuchando Server',config.PORT))
app.get('/',function(req,res){res.send('Prueba')})
app.use(cors());
app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.listen(5000,function(){
console.log('El servidor esta en ejecucion');

})

app.use('/Customer',Customer)
app.use('/Products',Products)
app.use('/Orders',Orders)