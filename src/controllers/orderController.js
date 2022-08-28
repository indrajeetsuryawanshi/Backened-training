const ProductModel = require("../models/productModel")

const UserModel= require("../models/userModel")
const Middleware= require("../middlewares/commonMiddlewares")
const OrderModel = require("../models/orderModel")


const createOrder= async function (req, res) {
     let order=req.body
    order.isFreeAppUser=req.headers["isfreeappuser"]
    let userid= order.userId
    let productid= order.productId
     
    let user= await UserModel.findById({ $in:[userid]}).select({isFreeAppUser:1,balance:1,_id:1})
    let product= await ProductModel.findById({ $in:[productid]}).select({price:1,_id:1})
    if (!user){
        return res.send(("userId is invalid"))

    }else if (!product){
        return res.send("productId is invalid")
     }
    if (user["isFreeAppUser"]==true){
        let saveData= await OrderModel.create(order)
        res.send({order:saveData})

    }
    let value=user["balance"]-product["price"]
    if (user["isFreeAppUser"]==false){
        order["amount"]=product["price"]
        if(product["price"]<user["balance"]){
            let deduct=await UserModel.find({userid}).updateOne({_id:userid}, {$set:{balance:value}})
            let saveData=await OrderModel .create(order)
            res.send({order:saveData})
        }else {
            return res.send("low balance")
        }
    }
}
module.exports.createOrder=createOrder