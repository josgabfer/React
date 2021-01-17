import React from 'react';

const Titulo = ({usuario = 'usuario', color='orange'}) => {
    return (<h1 className="titulo" style={{color: color}}>Hola {usuario}!</h1>);
}
export {Titulo};