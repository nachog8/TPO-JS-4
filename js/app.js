let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];

// Añade un producto al inventario
function agregarProducto(producto) {
    inventario.push(producto);
}

// Elimina un producto del inventario basado en su código
function eliminarProducto(codigo) {
    inventario = inventario.filter(producto => producto.codigo !== codigo);
}

// Actualiza la cantidad de un producto específico en el inventario
function actualizarCantidad(codigo, nuevaCantidad) {
    const producto = inventario.find(producto => producto.codigo === codigo);
    if (producto) {
        producto.cantidad = nuevaCantidad;
    }
}

// Busca productos en el inventario por categoría y los devuelve en un array
function buscarProductoPorCategoria(categoria) {
    return inventario.filter(producto => producto.categoria === categoria);
}

// Calcula el valor total del inventario multiplicando el precio por la cantidad de cada producto y sumándolos
function calcularValorTotal() {
    return inventario.reduce((total,producto) => total + producto.precio * producto.cantidad,0);
}
