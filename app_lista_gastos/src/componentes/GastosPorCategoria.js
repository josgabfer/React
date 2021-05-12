import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';



const GastosPorCategoria = () => {
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