import { connect } from "mongoose";

export async function conn() {
    try {
        await connect('mongodb://localhost:27018/store')
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}