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
            console.log(accion)
            return estado;
            
    }
}
export default reducer;