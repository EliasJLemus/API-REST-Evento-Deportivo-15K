import { Router } from 'express'
import {
  obtenerCorredores,
  obtenerCorredorPorId,
  registrarCorredor
} from '../controllers/corredorController.js'

const router = Router()

router.get('/', obtenerCorredores)
router.get('/:id', obtenerCorredorPorId)
router.post('/', registrarCorredor)

export default router