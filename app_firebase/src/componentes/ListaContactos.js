import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import Contacto from './Contacto';

const ListaContactos = () => {
const [contactos, cambiarContactos] = useState([
    {id:1,
    nombre:'Carlos',
    correo:'Correo@mail.com'},
    {id:2,
    nombre:'Arturo',
    correo:'Correo2@mail.com'}
]);

useEffect(()=> {
    db.collection('usuarios').onSnapshot((snapshot)=>{
        cambiarContactos(snapshot.docs.map((documento)=>{
            return {...documento.data(), id: documento.id}
        }));
    });
}, []);

    return (
        contactos.length > 0 &&  
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto
                key={contacto.key}
                id={contacto.id}
                nombre={contacto.nombre}
                correo={contacto.correo}
                />
            ))}
        </ContenedorContactos>
        
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
 
export default ListaContactos;