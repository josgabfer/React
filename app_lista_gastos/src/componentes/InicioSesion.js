import React, {useState} from 'react';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import Boton from './../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import styled from 'styled-components';
import useHistory from 'react-router-dom';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100 px */
  margin-bottom: 1.25rem; /* 20px */
`;


const InicioSesion = () => {

  const history = useHistory();
  const [correo, establecerCorreo] = useState('');
  const [password, establecerPassword] = useState('');
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState('');

  const handleChange = (e) => {
    if(e.target.name === 'email'){
      establecerCorreo(e.target.value);
    }else if(e.target.name === 'password'){
      establecerPassword(e.target.value);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if(!expresionRegular.test(correo)){
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Por favor ingresar un correo electronico valido'
      });
        return;
    }
    if(correo === '' || password ===''){
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'Por favor ingresar todos los datos requeridos'
      });

      return;
    }

    try{
			await auth.createUserWithEmailAndPassword(correo, password);
      history.push('/');
    }catch(error){
      cambiarEstadoAlerta(true);


      let mensaje;
      switch(error.code){
        case 'auth/invalid-password':
          mensaje = 'La contraseña debe de ser de al menos 6 caracteres';
          break;
        case 'auth/email-already-exists':
          mensaje = 'El correo proporcionado ya esta en uso';
          break;
        case 'auth/invalid-email':
          mensaje = 'El correo electronico no es valido';
          break;
        default:
          mensaje='Hubo un error al intentar crear la cuenta';
          break;
      }
      cambiarAlerta({tipo: 'error',mensaje: mensaje});
    }
  }

    return ( 
      <>
      <Helmet><title>Iniciar Sesion</title></Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesion</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Svg/>
        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={correo}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">Iniciar Sesion</Boton>
        </ContenedorBoton>
      </Formulario>

    </>
     );
}
 
export default InicioSesion;