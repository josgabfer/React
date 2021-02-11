import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  // Se obtienen las tareas guardadas de local Storage
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];

  // Se establece el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);


 // Se guardan las tareas en local Storage
  useEffect(() =>{
    JSON.stringify(tareas);
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }, [tareas]);


let configMostrarCompletadas = '';
if(localStorage.getItem('mostrarCompletadas') === null ){
  configMostrarCompletadas = true;
}else{
 configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
}
  // Se crea un estado para las tareas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  // Se guardan los estados de mostrar Completadas
  useEffect(() =>{
   localStorage.setItem('mostrarCompletadas',mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
<div className="contenedor">
  <Header 
  mostrarCompletadas={mostrarCompletadas}
  cambiarMostrarCompletadas={cambiarMostrarCompletadas}
  />
  <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
  <ListaTareas 
  tareas={tareas} 
  cambiarTareas={cambiarTareas}
  mostrarCompletadas={mostrarCompletadas}
  />
</div>
  );
}

export default App;
