import React from 'react';
import H1 from '../elementos/elmTitulo';
// Creacion de modulo de React, con valores por defecto (usuario y orange)
const Titulo = ({usuario = 'usuario', color='orange'}) => {
    // return (<h1 className="titulo" style={{color: color}}>Hola {usuario}!</h1>);
    return (<H1 color='blue'>Hola {usuario}</H1>);
}
export {Titulo};