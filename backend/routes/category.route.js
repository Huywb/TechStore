import express from 'express'
import { RoleProtected, verifyAccessToken } from '../midlleware/generateToken.js'
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/category.controller.js'

const router = express.Router()

router.get('/',getAllCategories)
router.post('/',verifyAccessToken,RoleProtected(['ADMIN']),createCategory)
router.patch('/:id',verifyAccessToken,RoleProtected(['ADMIN']),updateCategory)
router.delete('/:id',verifyAccessToken,RoleProtected(['ADMIN']),deleteCategory)
//router.get('/sort-deleted',verifyAccessToken,RoleProtected(['admin']),getDeletedCategories)
export default router