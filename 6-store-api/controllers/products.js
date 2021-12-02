const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors');
    
    // const search = "a";
    // const products = await Product.find({
    //     name: { $regex: search, $options: 'i' }, // searches for pattern in name
    // });

    const products = await Product.find({}).sort('-name price'); // - used for descending sorting
    res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async ( req, res) => {
    const { featured, company, name, sort } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i'}
    }

    console.log(queryObject);
    let result = Product.find(queryObject);

    if (sort) {
        console.log(sort);
        const sortList = sort.split(',').join(' ');
        console.log(sortList);
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}