import React from 'react';
import BarraTotalGastado from './BarraTotalGastado';
import {Helmet} from 'react-helmet';
import {Header, Titulo} from './../elementos/Header';
import BtnRegresar from './../elementos/BtnRegresar';
import FormularioGasto from './FormularioGastos';
import {useParams} from 'react-router-dom';
import useObtenerGasto from './../hooks/useObtenerGasto';


const EditarGasto = () => {
  const {id} = useParams();
  const [gasto] = useObtenerGasto(id);


    return (  
      <>
      <Helmet>
          <title>Editar Gasto</title>
      </Helmet>

      <Header>
              <BtnRegresar ruta='/lista'/>
              <Titulo>
              Editar Gasto
              </Titulo>
      </Header>
      <FormularioGasto gasto={gasto} />
      <BarraTotalGastado/>
  </>
      );
}
 
export default EditarGasto;