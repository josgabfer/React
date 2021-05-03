import React, {useState, useContext, useEffect } from 'react';
import {auth} from './../firebase/firebaseConfig';

const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () =>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState();

    // Creamos un state para saber cuando termina de cargar la comprobacion de onAuthStateChanged
    const [cargando, cambiarCargando] = useState(true);

    // Efecto para ejecutar la comprobacion una sola vez
    useEffect(()=>{
        const cancelarSubscripcion = auth.onAuthStateChanged((usuario)=>{
            cambiarUsuario(usuario);
            cambiarCargando(false);
        });

        return cancelarSubscripcion;
    },[]);

    return ( 
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
     );
}
 
export {AuthProvider, AuthContext, useAuth};