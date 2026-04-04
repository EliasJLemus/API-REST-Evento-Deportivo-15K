import { corredores } from '../data/corredores.js'

export default class Corredor {

  static getAll = async ({ categoria } = {}) => {
    if (categoria) {
      return corredores.filter(c => c.categoria === categoria)
    }
    return corredores
  }

  static find = async (id) => {
    return corredores.find(c => c.id === id)
  }

  static create = async (data) => {
    const nuevoCorredor = {
      id: corredores.length + 1,
      ...data
    }
    corredores.push(nuevoCorredor)
    return nuevoCorredor
  }
}