import Product from '../models/index.js'
export const  handlePostProduct = async(req,res)=> {
    try {
        
        const {productName, productDescription,productPrice,productFeature,productCondition,productReturnPolicy} = req.body;
        try{
        !productName || !productPrice
            console.log("no error")
        }
        catch(err){
            console.log(err)
        }

        const newPorduct = new Product({
            productName, 
            productDescription,
            productPrice,
            productFeature,
            productCondition,
            productReturnPolicy
        }) 
        await newPorduct.save();
        console.log(newPorduct)
        res.status(201).json({message:"Product created", product:newPorduct})
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error.' });
    }
}
export const  handleGetProduct = async(req,res)=>{
    console.log(req.header)
    const resu = await Product.find({})
    res.json(resu)
}