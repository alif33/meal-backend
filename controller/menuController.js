const Product = require("../models/Product");
const Category = require("../models/Category");

exports.getCategories = async(req, res) => {
    const { resturant } = req.query;
    const categories = await Category.find({resturant})
    .populate("products", { Product });
    res.status(200).json(categories.reverse());
};

exports.Deletation = async(req, res) => {
    const { _ids } = req.body;
    const _length = _ids.length - 1;
  
    _ids.forEach(async (_id, _index)=>{
      const _category = await Category.findByIdAndDelete({_id});
      if(_category){
          const __length = _category.products.length - 1;
          _category.products.forEach(async(product, __index)=>{
              const _product = await Product.findByIdAndDelete({_id: product});
              if(_index === _length && __index === __length){
                  res.send({
                      success: true,
                      message: "Deleted successfully"
                  })
              }
          })
      }
    })
};

exports.Importer = async(req, res) => {
    const {  
        menu, 
        resturant
      } = req.body;

    const _length = menu.length - 1;
    menu.forEach(async (category, _index) => {
        const {
            name,
            description,
            _date,
            date_,
            deliveryMethod,
            dayWeek,
            startTime,
            endTime,
            products
            } = category;

        const _category = await Category({
            name,
            description,
            _date,
            date_,
            deliveryMethod,
            dayWeek,
            startTime,
            endTime,
            resturant
        })
        _category.save(async (err, __category)=>{
            if(__category){
                const __length = products.length - 1;
                products.forEach(async (product, __index)=>{

                    const {
                        name, 
                        description
                    } = product;
                    const _product = await Product({
                        name,
                        description,
                        category: __category._id,
                        resturant
                    })
                    _product.save((err, __product)=>{
                        if(__product){
                            Category.findOneAndUpdate(
                                { _id: __category._id },
                                { $push: {
                                "products": __product._id
                                }},
                                { returnOriginal: false },
                                (err, ___category) => {
                                    if (err) {
                                        return res.status(400).json({
                                        err,
                                        message: "Something went wrong",
                                        });
                                    }
                                    if(_index === _length && __index === __length){
                                        res.send({
                                            success: true,
                                            message: "Okay"
                                        })
                                    }
                                }
                            );
                        }
                    })
                })
            }
        })
        
    });
};

exports.addCategory = async(req, res) => {
    const { 
        name,
        description,
        _date,
        date_,
        deliveryMethod,
        dayWeek,
        startTime,
        endTime,
        resturant
      } = req.body;
  
      const category = new Category({
        name,
        description,
        _date,
        date_,
        deliveryMethod,
        dayWeek,
        startTime,
        endTime,
        resturant
      });
  
      if(await category.save()){
        return res.send({
          success: true,
          message: 'Category added successfully'
        })
      }
};

exports.addProduct = async(req, res) => {
    const {  
        name, 
        description,
        category,
        resturant 
      } = req.body;
    
    const _product = new Product({
        name, 
        description,
        category,
        resturant
    });

    const product = await _product.save();
    if (product) {
        Category.findOneAndUpdate(
        { _id: category },
        { $push: {
            "products": product._id
        }},
        { returnOriginal: false },
        (err, category) => {
            if (err) {
            return res.status(400).json({
                err,
                message: "Something went wrong",
            });
            }
    
            if (category) {
            return res.status(201).json({
                success: true,
                category,
                message: "Product added successfully"
            });
            }
        }
        );
    }
};