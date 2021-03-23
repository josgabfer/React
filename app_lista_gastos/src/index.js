import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Switch, Swtich}from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import InicioSesion from './componentes/InicioSesion';

WebFont.load({
  google: {
    families: ['Work Sans: 400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return ( 
      <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path="/iniciar-sesion" component={InicioSesion}/>
              <Route path="/crear-cuenta" component={RegistroUsuarios}/>
              <Route path="/categorias" component={GastosPorCategoria}/>
              <Route path="/lista" component={ListaDeGastos}/>
              <Route path="/editar/:id" component={EditarGasto}/>
              <Route path="/" component={App}/>
            </Switch>
          </Contenedor>
      </BrowserRouter>
   );
}
 
ReactDOM.render(<Index/>,document.getElementById('root')
);
