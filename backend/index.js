import express from 'express'
import {connectDB} from './connection.js'
import userRouter from './routes/route.product.js'

const PORT = 4000
const app= express()

const url="mongodb://localhost:27017/bluelappy"
connectDB(url)
app.use(express.json())

app.use('/',userRouter)

app.listen(PORT,()=>{
    console.log(`Example app listening on port http://localhost:${PORT} !`)
})