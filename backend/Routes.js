import express from 'express'
import { allUsers, Login, Register } from './userController.js'
import { addProduct, allProduct, editById, getProductById } from './productController.js'


const router=express.Router()
router.post('/register',Register)
router.post('/login',Login)
router.get("/allUsers",allUsers)
router.post("/addProduct",addProduct)
router.get("/allProduct",allProduct)
router.get("/getProductById/:productId",getProductById)
router.put("/editById/:productId",editById)

export default router