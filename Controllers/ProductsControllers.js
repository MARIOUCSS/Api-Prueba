const Products = require('../Models/Products');

const NewProducts = async (req, res, next) => {
    try {
        //const {body,file}=req;
        //console.log(file);
        const Prod = new Products({
            sku: req.body.sku,
            name: req.body.name,
            descripcion: req.body.descripcion,
            price:req.body.price,
            stock:req.body.stock,
            available:req.body.available,
            image:req.file.filename
        });
        //let product = new Products(req.body);
        const CreateProduct = await Prod.save();
        return res.status(200).send({ CreateProduct });
    } catch (error) {

        return res.status(500).send({ error })
    }

}
const GetProducts = async (req, res, next) => {
    try {
        let product = await Products.find();
        if (product.length) return res.status(200).send({ product })
        return res.status(404).send({ mesage: 'No Productos' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const GetonePro = async (req, res, next) => {
    try {
        let id = req.params.id;
        let Product = await Products.findById(id);
        if (Product) return res.status(200).send({ Product });
        return res.status(404).send({ mesage: 'No Hay Producto' })
    } catch (error) {
        return res.status(500).send({ error })
    }

}
const DeletePro = async (req, res, next) => {
    try {
        let id = req.params.id;
        let product = await Products.findByIdAndRemove(id);
        if (product) return res.status(200).send({ mesage: 'Se elimino', product })
        return res.status(404).send({ mesage: 'Not found' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const UpdatePro = async (req, res, next) => {
    try {
        //const {id}=req.params
        let Id = req.params.id;
        const Prod = new Products({
            sku: req.body.sku,
            name: req.body.name,
            descripcion: req.body.descripcion,
            price:req.body.price,
            stock:req.body.stock,
            available:req.body.available,
            image:req.file.filename
        });
        Prod._id=Id;
        const UpdatePro= await Products.findByIdAndUpdate(Prod._id,Prod,{new:true});
        if (UpdatePro) return res.status(200).send({ UpdatePro })
        return res.status(404).send({ message: "Not Found" })
    } catch (error) {
        return res.status(500).send({ error })
    }

}

module.exports = { NewProducts, GetProducts, GetonePro, DeletePro, UpdatePro }