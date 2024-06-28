### Trabajo Practico Opcional JS 4
# Gestión de Inventario de Productos

Este proyecto implementa un sistema básico de gestión de inventario en JavaScript. Permite añadir, eliminar, actualizar y buscar productos dentro de un inventario, así como calcular el valor total del mismo.

## Estructura del Inventario

Cada producto en el inventario es representado por un objeto con las siguientes propiedades:

- `nombre`: Nombre del producto.
- `categoria`: Categoría a la que pertenece el producto.
- `precio`: Precio unitario del producto.
- `cantidad`: Cantidad disponible del producto.
- `codigo`: Código único del producto.

## Funciones Disponibles

### `agregarProducto(producto)`

- **Descripción**: Añade un nuevo producto al inventario.
- **Parámetros**:
  - `producto`: Objeto que representa el producto a añadir.

### `eliminarProducto(codigo)`

- **Descripción**: Elimina un producto del inventario basado en su código.
- **Parámetros**:
  - `codigo`: Código del producto a eliminar.

### `actualizarCantidad(codigo, nuevaCantidad)`

- **Descripción**: Actualiza la cantidad de un producto específico en el inventario.
- **Parámetros**:
  - `codigo`: Código del producto a actualizar.
  - `nuevaCantidad`: Nueva cantidad del producto.

### `buscarProductoPorCategoria(categoria)`

- **Descripción**: Busca productos en el inventario por categoría y los devuelve en un array.
- **Parámetros**:
  - `categoria`: Categoría de los productos a buscar.

### `calcularValorTotal()`

- **Descripción**: Calcula el valor total del inventario multiplicando el precio por la cantidad de cada producto y sumándolos.
- **Parámetros**: Ninguno.

## Ejemplo de Uso

Para utilizar este sistema de gestión de inventario, primero debe incluir el código en su proyecto JavaScript. Luego, puede interactuar con el inventario utilizando las funciones proporcionadas.

```javascript
// Añadir un nuevo producto al inventario
agregarProducto({
    nombre: "Mouse",
    categoria: "Accesorios",
    precio: 25,
    cantidad: 30,
    codigo: "P006"
});

// Eliminar un producto del inventario
eliminarProducto("P003");

// Actualizar la cantidad de un producto
actualizarCantidad("P001", 8);

// Buscar productos por categoría
console.log(buscarProductoPorCategoria("Electrónica"));

// Calcular el valor total del inventario
console.log(calcularValorTotal());
