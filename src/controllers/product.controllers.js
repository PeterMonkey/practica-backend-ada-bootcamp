import { Product } from "../models/product.model.js";

export const productController = {
    create: async(req, res) => {
        const {role} = req.user
        if(role === "admin"){
            const {name, category, details} = req.body
            try {
                const newProduct = {
                    name, 
                    category,
                    details
                }
    
                await Product.create(newProduct)
                res.status(201).json({
                    ok: true,
                    data: newProduct
                })
            } catch (error) {
                throw new Error
            }
        } else {
            res.status(401).json({
                message: 'No tienes permisos para esta accion'
            })
        }

    }
}