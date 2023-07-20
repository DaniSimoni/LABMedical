import CardEstatistica from '../CardEstatistica/CardEstatistica';
import * as Styled from './EstatisticasSistema.style';
import React from 'react';
import { ImUsers, ImCalendar, ImDroplet } from 'react-icons/im';


function EstatisticasSistema() {

    const dataCard = [
        {
        id:'1',
        icone: <ImUsers/>,   
        resultado: '01',
        legenda: 'Pacientes',

      },
        {
        id:'2',
        icone: <ImCalendar/>,
        resultado: '02',
        legenda: 'Consultas',

      },
        {
        id:'3',
        icone: <ImDroplet/>,   
        resultado: '03',
        legenda: 'Exames',
      },

      ]
  return (
  <>
  
    <Styled.ContainerEstatisticas>     
        
        <h2>Estatísticas do Sistema</h2> 

        <Styled.ContainerCardEstatisticas>
            { dataCard.map(estatistica => <CardEstatistica key={estatistica.id} dataCard={estatistica}/>)}
        </Styled.ContainerCardEstatisticas>

   </Styled.ContainerEstatisticas>

   </>
  );
}

export default EstatisticasSistema;


