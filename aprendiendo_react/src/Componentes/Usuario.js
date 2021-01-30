import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';

const Usuario = () => {

    const pais = 'Costa Rica';
    const amigos = ['Alejandro', 'Manuel', 'Cesar'];
    return (
      <div>
        <Titulo usuario="Carlos" color="red"/>
      <Parrafo>Que tengas un buen dia</Parrafo>
      {pais &&<p>Tu eres de: {pais}</p>}
      <Parrafo>Tu lista de amigos es:</Parrafo>
      <ul>
        {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
      </ul>
      <Parrafo>Que tengas un buen dia. Saludos!</Parrafo>
    </div>
    );
  };

const Parrafo = styled.p`
  margin: 20px 0;
`;

export default Usuario;