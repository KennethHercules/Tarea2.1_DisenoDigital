import express from 'express';
import productosRouter from './routes/productos.router.js';
import { handleError } from './helpers/handleError.js';

const app = express();

// Middleware para convertir el body a JSON
app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('API de Productos funcionando 🚀');
});

// Montar el router de productos
app.use('/productos', productosRouter);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Recurso no encontrado' });
});

// Middleware de manejo de errores
app.use(handleError);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
