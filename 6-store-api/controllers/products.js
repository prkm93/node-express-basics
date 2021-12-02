const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors');
    
    // const search = "a";
    // const products = await Product.find({
    //     name: { $regex: search, $options: 'i' }, // searches for pattern in name
    // });

    // const products = await Product.find({}).sort('-name price'); // - used for descending sorting
    const products = await Product.find({})
        .sort('name price')
        .select('name price') // for displaying selected fields only
        .limit(4)
        .skip(2);

    res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async ( req, res) => {
    const { featured, company, name, sort, fields } = req.query;
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

    // console.log(queryObject);
    let result = Product.find(queryObject);

    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    if (fields) {
        console.log(fields);
        const fieldList = fields.split(",").join(" ");
        result = result.select(fieldList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);
    // total 23 items - 23/limit = 10, 10, 3 ( total 3 pages)
    // total 23 items - if limit = 7, 23/7, 7 7 7 2 (total 4 pages)
    

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}