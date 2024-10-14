import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        require:true,
    },
    productDescription:{
        type:String,
    },
    productPrice:{
        type:Number,
        require:true
    },
    productFeature:{
        type:String
    },
    productCondition:{
        type:String
    },
    productReturnPolicy:{
        type:String
    }
})

const Product = mongoose.model("Product", productSchema)

export default Product