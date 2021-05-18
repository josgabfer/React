import {useState, useEffect} from 'react';
import {db} from './../firebase/firebaseConfig';
import {startOfMonth, endOfMonth, getUnixTime} from 'date-fns';
import {useAuth} from './../contextos/AuthContext';

const useObtenerGastosDelMes = () => {
    const [gastos, establecerGastos] = useState([]);
    const {usuario} = useAuth();

    useEffect(()=>{
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finDeMes = getUnixTime(endOfMonth(new Date()));

        if(usuario){
            
            const unsusbcribe = db.collection('gastos')
            .orderBy('fecha', 'desc')
            .where('fecha', '>=', inicioDeMes)
            .where('fecha', '<=', finDeMes)
            .where('uidUsuario', '==', usuario.uid)
            .onSnapshot((snapshot)=>{
                establecerGastos(snapshot.docs.map((documento)=>{
                    return{...documento.data(), id:documento.id}
                }))
            })
            return unsusbcribe;
        }

    }, [usuario])
    

    return gastos;
}
 
export default useObtenerGastosDelMes;