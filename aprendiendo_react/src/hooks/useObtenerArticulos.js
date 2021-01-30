import {useState, useEffect } from 'react';

const useObtenerArticulos = () => {
    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);
    
    useEffect (() => {
        setTimeout(()=>{
            establecerArticulos([
                {
                    id: 1,
                    Titulo: 'Titulo del primer articulo'
                },
                {
                    id: 2,
                    Titulo: 'Titulo del segundo articulo'
                },
                {
                    id: 3,
                    Titulo: 'Titulo del tercer articulo'
                }
            ]);
            establecerCargando(false);
        }, 3000);
    }, []);

    return [articulos, cargando];
}
export default useObtenerArticulos;