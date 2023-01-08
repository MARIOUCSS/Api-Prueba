const Orders = require('../Models/Orders');


const newOrders = async (req, res, next) => {
    try {
        const order = new Orders(req.body);

        const createOrder = await order.save();
        return res.status(200).send({ createOrder })

    } catch (error) {
        return res.status(500).send({ error })
    }
}

const AllOrders = async (req, res, next) => {
    try {
        const orde = await Orders.find({})
            .populate('customer')
            //es un array hay que especificar
            .populate({
                path: 'Products.product',
                model: 'Products'
            });
        if (orde.length) return res.status(200).send({ orde })
        return res.status(404).send({ message: 'No Hay Nada' })


    } catch (error) {
        return res.status(500).send({ error })
    }

}
const GetoneOrders = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const order = await Orders.findById(Id)
            .populate('customer')
            .populate({
                path: 'Products.product',
                model: 'Products'
            });
        if (order) return res.status(200).send({ order })
        return res.status(404).send({ message: 'No hay Orden' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const UpdateOrder = async (req, res, next) => {
    try {
        //const Id = req.params.id;
        const order = await Orders.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },)
            .populate('customer')
            .populate({
                path: 'Products.product',
                model: 'Products'
            });
        if (order) return res.status(200).send({ order })
        return res.status(404).send({ message: 'No se Pudo Actualizar' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const Deleteorder = async (req, res, next) => {
    try {
        let id = req.params.id;
        let ord = await Orders.findByIdAndRemove(id);
        if (ord) return res.status(200).send({ message: 'Se Elimino', ord })
        return res.status(404).send({ mesage: 'Not Se elimino' })
    } catch (error) {
        return res.status(500).send({ error })
    }



}

module.exports = { Deleteorder, newOrders, AllOrders, GetoneOrders, UpdateOrder }