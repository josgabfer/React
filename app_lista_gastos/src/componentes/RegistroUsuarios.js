import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import Boton from './../elementos/Boton';

const RegistroUsuarios = () => {
  return (
    <>
      <Helmet><title>Crear Cuenta</title></Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to="iniciar-sesion">Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>

    </>
  );
}

export default RegistroUsuarios;