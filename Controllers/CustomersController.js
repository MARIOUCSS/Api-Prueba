const Customer = require('../Models/Customers');

const AllCustomers = async (req, res, next) => {
    try {
        const AllCust = await Customer.find({});
        if (AllCust.length) return res.status(200).send({ AllCust });
        return res.status(204).send({ message: "No Content" });
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const NewCustomer = async (req, res, next) => {
    try {
        const UserC = new Customer({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone
        });
        const CreateCust = await UserC.save();
        return res.status(200).send({ message: "cliente agregado" });
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const OneCustomer = async (req, res, next) => {
    try {
        let id = req.params.id;
        const onecustomer = await Customer.findById(id);
        if (onecustomer) return res.status(200).send({ onecustomer })
        return res.status(404).send({ message: "Not Found" })
    } catch (error) {
        return res.status(500).send({ error })
    }

}
const UpdateCust = async (req, res, next) => {
    try {
       let Id = req.params.id;
        const customer = new Customer({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone
        })
       customer._id=Id;
        const updatecusto = await Customer.findByIdAndUpdate(customer._id,customer, { new: true });
        if (updatecusto) return res.status(200).send({ updatecusto })
        return res.status(404).send({ message: "Not Found" })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
const DeleteCustomer=async(req,res,next)=>{
try {
    let Id=req.params.id;
    const deletecus=await Customer.findOneAndRemove(Id);
    if(deletecus)return res.status(200).send({mesage:'Cliente Eliminado'})
    res.status(404).send({ message: 'Not Found' })
} catch (error) {
    return res.status(500).send({error})
}

}

module.exports = { DeleteCustomer,AllCustomers, NewCustomer, OneCustomer, UpdateCust }