const Category = require("../models/category.model")


const addCategory = async (req, res, next) => {
    try {
        const category = await Category.create(req.body)
        return res.status(201).json(category)
    } catch (error) {
        next(error)
    }
}

module.exports ={
    addCategory,
}