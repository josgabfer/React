import React, {useState, useEffect} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from './../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg' ;
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import AgregarGasto from './../firebase/AgregarGasto';
import getUnixTime from 'date-fns/getUnixTime';
import {useAuth} from './../contextos/AuthContext';
import Alerta from './../elementos/Alerta';
import fromUnixTime from 'date-fns/fromUnixTime';
import {useHistory} from 'react-router-dom'
import editarGasto from './../firebase/editarGasto';

const FormularioGasto = ({gasto}) => {
    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    const [categoria, cambiarCategoria] = useState('hogar');
    const [fecha, cambiarFecha] = useState(new Date());
    const {usuario} = useAuth();
    const history = useHistory();
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    useEffect(()=>{
        // Comprobamos si ya hay algun gasto
        // De ser asi establecemos todo el stado con los valores del gasto
        if(gasto){
            // Comprobar si el usuario que desea editar el gasto, es el que esta logeado
            if(gasto.data().uidUsuario === usuario.uid){
                cambiarCategoria(gasto.data().categoria);
                cambiarFecha(fromUnixTime(gasto.data().fecha));
                cambiarInputDescripcion(gasto.data().descripcion);
                cambiarInputCantidad(gasto.data().cantidad);
            }else{
                history.push('/lista')
            }
        }
    },[gasto, usuario, history]);


    const handleChange = (e) =>{
        if(e.target.name === 'descripcion'){
            cambiarInputDescripcion(e.target.value);
        }else if(e.target.name === 'cantidad'){
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g,''));
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let cantidad = parseFloat(inputCantidad).toFixed(2);

        // Comprobamos que haya una descripcion y valor
        if(inputDescripcion !== '' && inputCantidad !== '' ){
            if(cantidad){
                if(gasto){
                    editarGasto({
                        id: gasto.id,
                        categoria: categoria, 
                        descripcion: inputDescripcion, 
                        cantidad: cantidad, 
                        fecha: getUnixTime(fecha)
                    }).then(()=> {
                        history.push('lista');
                    }).catch((error)=>{
                        console.log(error)
                    })
                }else{
                    AgregarGasto({
                        categoria: categoria, 
                        descripcion: inputDescripcion, 
                        cantidad: cantidad, 
                        fecha: getUnixTime(fecha),
                        uidUsuario: usuario.uid
                    })
                    .then(()=>{
                        cambiarCategoria('hogar');
                        cambiarInputDescripcion('');
                        cambiarInputCantidad('');
                        cambiarFecha(new Date());
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({tipo: 'exito', mensaje: 'El gasto fue agregado'});
                    }).catch((error)=>{
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({tipo: 'exito', mensaje: 'Hubo un problema al intentar agregar la informacion'});
                    })
                }
            }else{
                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo: 'error', mensaje: 'El valor que ingresaste no es correcto'});
            }
        }else{
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: 'Por favor rellenar todos los campos'});
        }

    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias
                    categoria={categoria}
                    cambiarCategoria={cambiarCategoria}
                />
                <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
            </ContenedorFiltros>
            <div>
                <Input 
                type="text"
                name="descripcion"
                id="descripcion"
                placeholder="Descripcion"
                value={inputDescripcion}
                onChange={handleChange}
                />
                <InputGrande
                type="text"
                name="cantidad"
                id="cantidad"
                placeholder="$0.00"
                value={inputCantidad}
                onChange={handleChange}
                />
            </div>
            <ContenedorBoton>
                <Boton as="button" primario conIcono type="submit">
                    {gasto ? 'Editar Gasto' : 'Agregar Gasto'}<IconoPlus/></Boton>
            </ContenedorBoton>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </Formulario>
     );
}
 
export default FormularioGasto;



