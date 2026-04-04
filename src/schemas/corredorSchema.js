import * as z from 'zod'

const corredorSchema = z.object({
  nombre: z.string('El nombre debe ser un string').min(2).max(100, 'No debe superar 100 caracteres'),

  edad: z.int('La edad debe ser un número entero').min(18, 'Debes tener al menos 18 años'),

  categoria: z.enum(['Libre', 'Máster', 'Veterano'], {
    error: 'La categoría debe ser Libre, Master o Veterano'
  }),

  tiempoObjetivoMinutos: z.int('Debe ser un número entero').positive('El tiempo debe ser mayor a 0')

}).strict()

export const validateCorredorSchema = (corredor) => {
  return corredorSchema.safeParse(corredor)
}

export const validatePartialCorredorSchema = (corredor) => {
  return corredorSchema.partial().safeParse(corredor)
}