import React from 'react';
import {useAuth} from './../contextos/AuthContext';
import {Route, Redirect} from 'react-router-dom';


const RutaPrivada = ({children, ...propiedades}) => {
    const {usuario} = useAuth();

    if(usuario){
        return <Route {...propiedades}>{children}</Route>
    }else{
        return <Redirect to='/iniciar-sesion'/>
    }
}
 
export default RutaPrivada;