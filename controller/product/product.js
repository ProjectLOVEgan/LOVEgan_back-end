import Product from '../../models/product_schema.js'

const getProduct = async (req, res) => {
   try{
    
        const productLists = await Product.find();
        res.json(productLists)
   }catch(error){   
        res.status(500).json({error : '서버 오류'})

   }
};

export {getProduct}