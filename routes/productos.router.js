import { Router } from 'express'
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAvailableProducts
} from '../controllers/productos.controller.js'

const productosRouter = Router()

// Listar todos los productos
productosRouter.get('/', getAllProducts)

// Listar productos disponibles
productosRouter.get('/disponibles', getAvailableProducts)

// Listar producto por ID
productosRouter.get('/:id', getProductById)

// Crear un nuevo producto
productosRouter.post('/', createProduct)

// Actualizar un producto existente
productosRouter.put('/:id', updateProduct)

// Eliminar un producto por ID
productosRouter.delete('/:id', deleteProduct)

export default productosRouter