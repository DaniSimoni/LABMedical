import CardEstatistica from '../CardEstatistica/CardEstatistica';
import * as Styled from './EstatisticasSistema.style';
import React from 'react';
import { ImUsers } from 'react-icons/im';


function EstatisticasSistema() {

    const dataCard = [
        {
        id:'1',
        icone: ImUsers,   
        resultado: 'sdfsdfsdfsd',
        legenda: 'sdfsdfd',

      },
        {
        id:'2',
        icone: '',   
        resultado: 'ESTATÍSTICAS E INFORMAÇÕES',
        legenda: '',

      },
        {
        id:'3',
        icone: '',   
        resultado: 'ESTATÍSTICAS E INFORMAÇÕES',
        legenda: '',
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


