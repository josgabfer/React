import React, {useState} from 'react';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faCheckSquare,faSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    const [editantoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea]= useState(tarea.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    }

    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon
            // icon={} es codigo JS, por esa razon se puede utilizar una condicion ternaria para desplegar un icono u otro 
                icon={tarea.completada ? faCheckSquare : faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={() => toggleCompletada(tarea.id)}
            />
            <div className="lista-tareas__texto">
                {editantoTarea ? 
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input
                        type="text"
                        className="formulario-editar-tarea__input"
                        value={nuevaTarea}
                        onChange={(e) => cambiarNuevaTarea(e.target.value)}
                        />
                        <button 
                        type="submit" 
                        className="formulario-editar-tarea__btn">
                            Actualizar                            
                        </button>

                    </form>
                    :
                    tarea.texto
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
            <FontAwesomeIcon 
                icon={faEdit} 
                className="lista-tareas__icono lista-tareas__icono-accion"
                onClick={() => cambiarEditandoTarea(!editantoTarea)}
            />
            <FontAwesomeIcon 
                icon={faTimes} 
                className="lista-tareas__icono lista-tareas__icono-accion"
                onClick={() => borrarTarea(tarea.id)}
            />
            </div>
        </li>
    );
};

export default Tarea;