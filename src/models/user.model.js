import { Schema, model } from "mongoose";
import { productSchema } from "./product.model.js";

export const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    car: {
        type: [productSchema]
    },
    role: {
        type: String,
        default: 'user'
    }
},
    {timestamps: true}
)

export const User = model('User', userSchema)