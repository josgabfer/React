import React, {useState} from 'react';

// Se crea un contexto... contexto = estado global.
const ContextoTema = React.createContext();


// Para llamar los elementos del resto de la aplicacion, se debe de usar childre, de esa forma
// se llama el resto de componentes 

// children se debe de encerrar mediante el contexto 'ContextoTema'y lo valores en la opcion value={}

const  ProveedorTema= ({children}) => {
    const [tema, cambiarTema] = useState(
        {
            alineado: 'left',
            fuente: 100
        }
    );

    const aumentarFuente = () =>cambiarTema({...tema, fuente: tema.fuente + 1});
    const disminuirFuente = () =>cambiarTema({...tema, fuente: tema.fuente - 1});
    const alinearIzquierda = () =>cambiarTema({...tema, alineado: 'left'});
    const alinearCentro = () =>cambiarTema({...tema, alineado: 'center'});
    const alinearDerecha = () =>cambiarTema({...tema, alineado: 'right'});

    return ( 
        <ContextoTema.Provider 
        value={
            {
                tema,
                aumentarFuente,
                disminuirFuente,
                alinearIzquierda,
                alinearCentro,
                alinearDerecha
            }
        }
        >
            {children}
        </ContextoTema.Provider>
     );
}
 
// Exportar ambos, el contexto, y el componente
export {ContextoTema, ProveedorTema};