import React, {useState} from 'react';
// import styles from './ComponenteNormal.module.css'
import Boton from './../elementos/Boton';

const ModificarContador = (props) => {
    const [contador, operacionContador] = useState(0);


    return(
        <div>
            <h1>Contador: {contador}</h1>
            {/* <button className={styles.boton} onClick={() => operacionContador(contador + props.cantidad)}>Incrementar</button>
            <button className={styles.boton} onClick={() => operacionContador(contador - props.cantidad)}>Disminuir</button> */}
            <Boton onClick={() => operacionContador(contador + props.cantidad)}>Incrementar</Boton>
            <Boton onClick={() => operacionContador(contador - props.cantidad)}>Disminuir</Boton>

        </div>

    );
}
export default ModificarContador;


