import { z } from 'zod';

// esquema para creación/actualización (requiere todos los campos)
export const productSchema = z.object({
  nombre: z.string({ required_error: 'nombre es requerido' }).min(1, 'nombre no puede estar vacío'),
  precio: z.number({ required_error: 'precio es requerido' }).gt(0, 'precio debe ser mayor a cero'),
  descripcion: z.string({ required_error: 'descripcion es requerida' }).min(10, 'descripcion debe tener mínimo 10 caracteres'),
  disponible: z.boolean({ required_error: 'disponible es requerido' })
});

// helper para validar bodies (retorna objeto con success/error/data)
export function validateProduct(body) {
  const parsed = productSchema.safeParse(body);
  if (parsed.success) {
    return { success: true, data: parsed.data, error: null };
  } else {
    return { success: false, data: null, error: parsed.error };
  }
}