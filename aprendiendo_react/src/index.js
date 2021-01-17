import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './Componentes/Usuario';
import FormularioInicioSesion from './Componentes/FormularioInicioSesion';
import ComponenteNormal from './Componentes/ComponenteNormal';
import './index.css'
import Boton from './elementos/Boton';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);
  

  return(
  <div className='contenedor'>
  {sesion === true ?
  <div>
    <Usuario />
    <ComponenteNormal cantidad={1}/>
    {/* <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button> */}
    <Boton onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
  </div>
   :
   <div>

      <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
   </div>
}
</div>
  );
};

ReactDOM.render(
<App />,document.getElementById('root')
);
