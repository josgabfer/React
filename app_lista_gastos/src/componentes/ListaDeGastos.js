import React from 'react';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import { Header, Titulo} from './../elementos/Header';
import BarraTotalGastado from './BarraTotalGastado';


const ListaDeGastos = () => {

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar ruta='/' />
        <Titulo>Lista de Gastos</Titulo>
      </Header>
      <BarraTotalGastado />
    </>
  );
}

export default ListaDeGastos;