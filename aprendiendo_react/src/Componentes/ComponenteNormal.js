import React, {useState, useEffect} from 'react';
// import styles from './ComponenteNormal.module.css'
import Boton from './../elementos/Boton';

const ModificarContador = (props) => {

    const [contador, operacionContador] = useState(0);

    //Esto es equivalente a componentDidUpdate
    // useEffect(() => {
    //     console.log('El componente se renderizo')
    // });


    //Utilizando una lista vacia, se ejecuta como componentDidMount
    // useEffect(()=>{
    //     console.log('El componente se carga solo una vez');
    // },[]);


    //Se ejecuta cuando cambia el estado de la dependencia que le pasemos, en este caso "contador"
    // useEffect(()=>{
    //     console.log('El estado del contador cambio');
    // },[contador]);

    useEffect(()=>{
        //Se ejecuta cuando se va a quitar el componente del DOM
        return(() => {
            console.log('Adios Componente!');
            //Es util en caso de que se deba cerrar una conexion.
        });
    }, []);


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


