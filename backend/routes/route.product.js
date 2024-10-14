import express from 'express'
import { handlePostProduct,handleGetProduct } from '../controllers/product.controller.js'
const router = express.Router()

router.get('/products',handleGetProduct)
router.post('/products',handlePostProduct)

export default router