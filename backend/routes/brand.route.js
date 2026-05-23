import express from 'express'
import { RoleProtected, verifyAccessToken } from '../midlleware/generateToken'
import { createBrand, deleteBrand, getAllBrands, updateBrand } from '../controllers/brand.controller'

const router = express.Router()

router.get('/',verifyAccessToken,RoleProtected(['admin']),getAllBrands)
router.post('/',verifyAccessToken,RoleProtected(['admin']),createBrand)
router.patch('/:id',verifyAccessToken,RoleProtected(['admin']),updateBrand)
router.delete('/:id',verifyAccessToken,RoleProtected(['admin']),deleteBrand)
export default router