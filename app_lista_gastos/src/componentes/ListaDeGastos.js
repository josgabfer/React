import React from 'react';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import { Header, Titulo} from './../elementos/Header';

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
    </>
  );
}

export default ListaDeGastos;