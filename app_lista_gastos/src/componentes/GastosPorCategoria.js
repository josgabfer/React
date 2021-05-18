import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo} from './../elementos/Header';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastosDelMesPorCategoria from './../hooks/useObtenerGastosDelMesPorCategoria';



const GastosPorCategoria = () => {
    const gastos = useObtenerGastosDelMesPorCategoria();

    return ( 
        <>
            <Helmet>
                <title>Gastos por categoria</title>
            </Helmet>

            <Header>
                    <BtnRegresar ruta='/'/>
                    <Titulo>
                    Gastos por categoria
                    </Titulo>
            </Header>
            <BarraTotalGastado/>
        </>
     );
}
 
export default GastosPorCategoria;