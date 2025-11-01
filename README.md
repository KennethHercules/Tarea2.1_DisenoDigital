
# API RESTful de Productos

API para gestionar un listado de productos de una tienda. Los datos se almacenan en un archivo `data/productos.json`, sin necesidad de una base de datos.

---
## Estudiante

Kenneth Geovani Hercules Rodezno        #20212021218

## Instalación

1. Clonar el repositorio:

git clone https://github.com/KennethHercules/Tarea2.1_DisenoDigital.git


### Instrucciones para instalar dependencias

Ejecutar el siguiente comando en la terminal dentro de la carpeta del proyecto:

npm install

### ejecutar la API
Para iniciar el servidor y probar la API, usar: npm run dev

El servidor estará corriendo en http://localhost:3000

## Rutas disponibles y su funcionalidad
Método	        Ruta	                  Función
GET	            /productos	            Listar todos los productos.
GET	            /productos/:id	        Obtener un producto por su ID.
GET	            /productos/disponibles	Listar únicamente los productos disponibles.
POST	          /productos	            Crear un nuevo producto (JSON: nombre, precio, descripcion, disponible).
PUT	            /productos/:id	        Actualizar un producto existente por ID.
DELETE	        /productos/:id	        Eliminar un producto por su ID.

## Notas

Cada producto tiene un ID único numérico y una fecha de ingreso automática.

Los datos se guardan y leen desde data/productos.json.

## Ejemplo JSON para crear o actualizar un producto

{
  "nombre": "Monitor",
  "precio": 2500,
  "descripcion": "Monitor que ofrece una experiencia visual de máxima calidad",
  "disponible": true
}
