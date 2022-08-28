const { count } = require("console")
const ProductModel = require("../models/productModel")

const createProduct= async function (req, res) {
    let product= req.body

    let savedproduct= await ProductModel.create(product)
    res.send({msg: savedproduct})
}



module.exports.createProduct = createProduct
