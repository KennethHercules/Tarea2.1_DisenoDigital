import { ProductService } from '../services/productos.service.js'

// Obtener todos los productos
export const getAllProducts = async (req, res, next) => {
  try {
    const productos = await ProductService.getAll()
    res.json({ success: true, message: 'Listado de productos', data: productos })
  } catch (err) {
    next(err)
  }
}

// Obtener producto por ID
export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params
    const producto = await ProductService.getById(id)
    if (!producto) throw { statusCode: 404, message: 'Producto no encontrado' }
    res.json({ success: true, data: producto })
  } catch (err) {
    next(err)
  }
}

// Crear nuevo producto
export const createProduct = async (req, res, next) => {
  try {
    const { nombre, precio, descripcion, disponible } = req.body

    // Validaciones
    if (!nombre) throw { statusCode: 400, message: 'El nombre es obligatorio' }
    if (typeof precio !== 'number' || precio <= 0)
      throw { statusCode: 400, message: 'El precio debe ser mayor a cero' }
    if (!descripcion || descripcion.length < 10)
      throw { statusCode: 400, message: 'La descripción debe tener al menos 10 caracteres' }
    if (typeof disponible !== 'boolean')
      throw { statusCode: 400, message: 'Disponible debe ser true o false' }

    const producto = await ProductService.create({ nombre, precio, descripcion, disponible })
    res.status(201).json({ success: true, message: 'Producto creado', data: producto })
  } catch (err) {
    next(err)
  }
}

// Actualizar producto existente
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const updated = await ProductService.update(id, req.body)
    if (!updated) throw { statusCode: 404, message: 'Producto no encontrado' }
    res.json({ success: true, message: 'Producto actualizado', data: updated })
  } catch (err) {
    next(err)
  }
}

// Eliminar producto por ID
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleted = await ProductService.delete(id)
    if (!deleted) throw { statusCode: 404, message: 'Producto no encontrado' }
    res.json({ success: true, message: 'Producto eliminado' })
  } catch (err) {
    next(err)
  }
}

// Obtener productos disponibles
export const getAvailableProducts = async (req, res, next) => {
  try {
    const productos = await ProductService.getDisponibles()
    res.json({ success: true, message: 'Productos disponibles', data: productos })
  } catch (err) {
    next(err)
  }
}
