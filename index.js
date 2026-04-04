import express from 'express'
import corredorRouter from './src/routes/corredorRoutes.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>API Evento Deportivo 15K</h1>')
})

app.use('/corredores', corredorRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})