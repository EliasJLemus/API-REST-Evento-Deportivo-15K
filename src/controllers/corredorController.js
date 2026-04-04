import Corredor from '../service/corredor.js'
import { validateCorredorSchema } from '../schemas/corredorSchema.js'

// GET /corredores
export const obtenerCorredores = async (req, res) => {
  const { categoria } = req.query
  const data = await Corredor.getAll({ categoria })
  res.json(data)
}

// GET /corredores/:id
export const obtenerCorredorPorId = async (req, res) => {
  const corredor = await Corredor.find(Number(req.params.id))

  if (!corredor) {
    return res.status(404).json({ error: `No se encontró corredor con id ${req.params.id}` })
  }

  res.json(corredor)
}

// POST /corredores
export const registrarCorredor = async (req, res) => {
  const resultado = validateCorredorSchema(req.body)

  if (!resultado.success) {
    return res.status(400).json({
      errores: resultado.error.issues.map(issue => ({
        campo: issue.path[0],
        mensaje: issue.message
      }))
    })
  }

  const nuevoCorredor = await Corredor.create(resultado.data)
  res.status(201).json(nuevoCorredor)
}