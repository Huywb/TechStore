import express from 'express'
import { RoleProtected, verifyAccessToken } from '../midlleware/generateToken'

const router = express.Router()

router.get('/',verifyAccessToken,RoleProtected(['admin']),getBlogs)
router.get('/:slug',verifyAccessToken,RoleProtected(['admin']),getBlogBySlug)
router.post('/',verifyAccessToken,RoleProtected(['admin']),createBlog)
router.patch('/:id',verifyAccessToken,RoleProtected(['admin']),updateBlog)
router.delete('/:id',verifyAccessToken,RoleProtected(['admin']),deleteBlog)
export default router