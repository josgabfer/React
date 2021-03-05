const estadoInical = {
    productos: [
        {id: 1, nombre: 'Producto 1'},
        {id: 2, nombre: 'Producto B'},
        {id: 3, nombre: 'Producto C'},
        {id: 4, nombre: 'Producto D'}
    ],
    carrito:[1,2,3]
}

const reducer = (estado = estadoInical, accion) => {
    switch(accion.type){
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            const {nombre, idProductoAAgregar} = accion;
            if(estado.carrito.lenght === 0){
                return {
                    ...estado,
                    carrito: [{
                        id: idProductoAAgregar, 
                        nombre: nombre,
                        cantidad: 1
                    }]
                }
            }else{
                const nuevoCarrito = [...estado.carrito];
                // Comprobar si el carrito ya tiene el id del producto a agregar
                const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                  return productoDeCarrito.id === idProductoAAgregar 
                }).length > 0;
          
                if(yaEstaEnCarrito){
                  nuevoCarrito.forEach((productoDeCarrito, index) => {
                    if(productoDeCarrito.id === idProductoAAgregar){
                      const cantidad = nuevoCarrito[index].cantidad;
                      nuevoCarrito[index] = {id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1}
                    }
                  });
                }else{
                  nuevoCarrito.push(
                    {id: idProductoAAgregar, nombre: nombre, cantidad: 1}
                  )
                }
                return {
                    ...estado,
                    carrito: nuevoCarrito
                }
            }

        default:
            return estado;
            
    }
}
export default reducer;