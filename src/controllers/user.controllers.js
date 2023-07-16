import * as bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken';
import { User } from "../models/user.model.js";
import { Product } from '../models/product.model.js';

export const userControllers = {
    create: async(req, res) => {
        const {name, email, password, role} = req.body
        try {
            const hash = await bcrypt.hash(password, 10)

            const newUser = {
                name,
                email,
                password: hash,
                role
            }

            await User.create(newUser)
            res.status(201).json({
                ok: true,
                data: newUser
            })
        } catch (error) {
            throw new Error
        }
    },
    login: async(req, res) => {
        const {email, password} = req.body

        const user = await User.findOne({email})
        const hash = user.password

        bcrypt.compare(password, hash, (err, result) => {
            if(result){
                const {_id, name, email, role} = user
                const payload = {
                    id: _id,
                    name,
                    email,
                    role
                }
                const token = Jwt.sign(payload, 'secret-key')

                res.status(200).json({
                    token
                })
            } else {
                res.status(401).json({
                    message: 'contraseña incorrecta'
                })
            }
        })
    },
    addProduct: async(req, res) => {
        try {
            const {id} = req.user
            const {pdt_id} = req.body
            const product = await Product.findById(pdt_id)
            const user = await User.findByIdAndUpdate(id, {$push: {car: product}})
            res.status(200).json({
                data: user
            })
        } catch (error) {
            throw new Error
        }

    }
}