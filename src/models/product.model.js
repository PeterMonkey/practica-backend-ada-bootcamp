import { Schema, model } from "mongoose";

export const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    details: {
        type: String
    }
},
    {timestamps: true}
)

export const Product = model("Product", productSchema)