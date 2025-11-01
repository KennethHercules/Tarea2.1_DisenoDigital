import { readFile, writeFile } from 'fs/promises'
const path = './data/productos.json'

export class ProductService {

    // Obtener todos los productos
    static async getAll() {
        const data = await readFile(path, 'utf-8')
        return JSON.parse(data)
    }

    // Obtener producto por ID
    static async getById(id) {
        const data = await this.getAll()
        return data.find(p => p.id === Number(id)) // Convertimos a número
    }

    // Crear nuevo producto
    static async create(producto) {
        const data = await this.getAll()

        // Generar ID único incremental
        const newId = data.length > 0 ? Math.max(...data.map(p => p.id)) + 1 : 1

        const nuevoProducto = {
            id: newId,
            fecha_ingreso: new Date(),
            ...producto
        }

        data.push(nuevoProducto)
        await writeFile(path, JSON.stringify(data, null, 2))
        return nuevoProducto
    }

    // Actualizar producto existente
    static async update(id, nuevosDatos) {
        const data = await this.getAll()
        const index = data.findIndex(p => p.id === Number(id))
        if (index === -1) return null
        data[index] = { ...data[index], ...nuevosDatos }
        await writeFile(path, JSON.stringify(data, null, 2))
        return data[index]
    }

    // Eliminar producto
    static async delete(id) {
        const data = await this.getAll()
        const nuevos = data.filter(p => p.id !== Number(id))
        await writeFile(path, JSON.stringify(nuevos, null, 2))
        return data.length !== nuevos.length
    }

    // Obtener productos disponibles
    static async getDisponibles() {
        const data = await this.getAll()
        return data.filter(p => p.disponible === true)
    }
}