import {db} from './firebaseConfig';

const AgregarGasto =({categoria, descripcion, cantidad, fecha, uidUsuario}) =>{
    db.collection('gastos').add({
        categoria: categoria, 
        descripcion: descripcion, 
        cantidad: cantidad, 
        fecha: fecha, 
        uidUsuario: uidUsuario
    })
}
export default AgregarGasto;