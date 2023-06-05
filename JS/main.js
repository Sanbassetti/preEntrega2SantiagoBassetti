
class Lista {
    constructor() {
        this.lista = [];
    }

    agregarProducto(nombreProducto, precioProducto, cantidadProducto) {
        this.lista.push({ nombre: nombreProducto, precio: precioProducto, cantidad: cantidadProducto });
    }

    totalProductos() {
        return this.lista.length;
    }

    listaProductos() {
        let contenido = "\n\n";
        this.lista.forEach((producto,) => {
            const totalPorProducto = producto.precio * producto.cantidad;
            contenido += `Nombre: ${producto.nombre} - Precio: $ ${producto.precio} Cantidad: ${Math.round(producto.cantidad)} total $ ${totalPorProducto.toFixed(2)} \n`;
        });
        return contenido;
    }

    sumaAPagar() {
        return this.lista.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    }


}

alert("Hola denise bienvenida a tu simulador de la lista del super :)");

let nombre = "";
let precio = 0;
let cantidad = 0;
const lista = new Lista();

while (nombre.toUpperCase() !== "ESC") {
    nombre = prompt("Ingrese El Nombre Del Producto (escriba 'ESC' para salir)");

    if (nombre.toUpperCase() === "ESC") {
        break;
    }

    cantidad = parseFloat(prompt("La Cantidad Que Quiere Comprar (Unidad (ej 1 2 3 4 )"));
    precio = parseFloat(prompt("Ingrese El Precio Del Producto"));
    lista.agregarProducto(nombre, precio, cantidad);
}



alert(`Usted eligio ${lista.totalProductos()} productos: ${lista.listaProductos()}\nTotal a Pagar: $${lista.sumaAPagar()}`);

alert("Gracias por hacer la lista con nosotros")