import express from 'express'
import { AuthController } from '../controller/AuthController'

const router = express.Router()
const authController = new AuthController()

router.post('/sign-up', authController.createAcountWithEmailAndPassword)
router.post('/sign-in', authController.signInWithEmailAndPassword)

export default router