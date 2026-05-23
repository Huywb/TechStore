import express from 'express'

const router = express.Router()

router.get('/',getOrders)
router.get('/:id',getOrderById)
export default router