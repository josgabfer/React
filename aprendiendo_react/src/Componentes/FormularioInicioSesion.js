import React, {useState} from 'react';
import styles from './FormularioinicioSesion.module.css';
import Boton from './../elementos/Boton';

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChange = (evento) => {
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value);
        }
        else if(evento.target.name === 'password'){
            cambiarPassword(evento.target.value);
        }
    }

    const onSubmit = (evento) =>{
        evento.preventDefault();

        if(usuario === 'jose' && password === '123'){
            props.cambiarEstadoSesion(true);
            alert('datos correctos');
        }else{
            alert('datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return (
        <form action ="" onSubmit={onSubmit} className={styles.formulario}>
      <h1>No has iniciado sesion</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className="input"
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contrasenha</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange = {onChange}
                    className="input"
                />
            </div>
            {/* <button type="submit" className={styles.label}>Iniciar Sesion</button> */}
            <Boton type="submit">Iniciar Sesion</Boton>
        </form>
    );
}
export default FormularioInicioSesion;
