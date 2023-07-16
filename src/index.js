import expres from 'express'
import bodyParser from 'body-parser'

import { conn } from './database/db.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const app = expres()

app.use(expres.json())
app.use(bodyParser.urlencoded({extended: false}))

const PORT = 3000

//routes
app.use(userRoutes)
app.use(productRoutes)

conn()

app.listen(PORT, () => {
    console.log(`Run in http://localhost:${PORT}`)
})
