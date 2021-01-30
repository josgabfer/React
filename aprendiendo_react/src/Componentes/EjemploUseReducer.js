import React, {useReducer} from 'react';
import Boton from './../elementos/Boton';


const EjemploUseReducer = () =>{
//Accion
//{tipo: 'INCREMENTAR'}


//Estado Inicial del Reducer
const contadorInicial = {contador: 0};

//El reducer es una funcion que escucha que accion le enviamos con el tipo
const reducer = (estado, accion) =>{
    switch(accion.tipo){
        case 'INCREMENTAR':
            return{contador: estado.contador + 1}
        case 'DISMINUIR':
            return{contador: estado.contador - 1}
        case 'REINICAR':
            return{contador: 0}
        default:
            return estado;
        }

}

    const [estado, dispatch] = useReducer(reducer, contadorInicial);
    return (
        <div>
            <h1>Contador: {estado.contador}</h1>
            <Boton 
            negro
            marginRight
            onClick={()=> dispatch({tipo: 'INCREMENTAR'})}
            >Incrementar</Boton>

            <Boton 
            negro
            marginRight
            onClick={()=> dispatch({tipo: 'DISMINUIR'})}
            >Disminuir</Boton>

            <Boton 
            negro
            marginRight
            onClick={()=> dispatch({tipo: 'REINICAR'})}
            >Reinicar</Boton>

        </div>
    );
}
export default EjemploUseReducer;