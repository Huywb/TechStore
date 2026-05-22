
import express from 'express'
import { RoleProtected, verifyAccessToken } from '../midlleware/generateToken'
import { createUserAdmin, deleteUser, getAllUsers, getUserById, loginAdmin, updateActivateUser, updateUserPassword, updateUserProfile } from '../controllers/auth.controller'

const router = express.Router()

router.get('/', verifyAccessToken, getAllUsers)
router.get('/:id', verifyAccessToken, getUserById)
router.post('/admin/register',  createUserAdmin)
router.post('/admin/login',  loginAdmin)
router.patch('/:id', verifyAccessToken, RoleProtected(['admin']),updateActivateUser)
router.patch('/password/:id', verifyAccessToken, RoleProtected(['admin']), updateUserPassword)
router.patch('/profile/:id', verifyAccessToken, RoleProtected(['admin']), updateUserProfile)
router.delete('/:id', verifyAccessToken, RoleProtected(['admin']), deleteUser)
export default router