import express from 'express'
import { RoleProtected, verifyAccessToken } from '../midlleware/generateToken'

const router = express.Router()

router.get('/',verifyAccessToken,RoleProtected(['admin']),getCategories)
router.post('/',verifyAccessToken,RoleProtected(['admin']),createCategory)
router.patch('/:id',verifyAccessToken,RoleProtected(['admin']),updateCategory)
router.delete('/:id',verifyAccessToken,RoleProtected(['admin']),deleteCategory)
//router.get('/sort-deleted',verifyAccessToken,RoleProtected(['admin']),getDeletedCategories)
export default router