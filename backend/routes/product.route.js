import express from 'express'
import { RoleProtected, verifyAccessToken } from '../midlleware/generateToken'

const router = express.Router()

router.get('/',verifyAccessToken,RoleProtected(['admin']),getProducts)
router.get('/:slug',verifyAccessToken,RoleProtected(['admin']),getProductBySlug)
router.post('/',verifyAccessToken,RoleProtected(['admin']),createProduct)
router.patch('/:id',verifyAccessToken,RoleProtected(['admin']),updateProduct)
router.delete('/:id',verifyAccessToken,RoleProtected(['admin']),deleteProduct)
export default router