import * as Styled from './CardEstatistica.style';
/* import { ImUsers } from 'react-icons/Im'; */
import  LogoTeste  from '../../../../public/images/logoteste.jpg'

function CardEstatistica ({dataCard})  {

  return (
    <>
    <Styled.ContainerCardEstatisticas>  

            <Styled.HeaderCard id='resultado'>
              <span id='icone'>
                {dataCard.icone || <img src={LogoTeste}></img>}
              </span>
                {dataCard.resultado || '14'}
            </Styled.HeaderCard>

            <Styled.HeaderCard2 id='legenda'>{dataCard.legenda || 'Erro aqui'}</Styled.HeaderCard2>

    
    </Styled.ContainerCardEstatisticas>

    </>
  );
}

export default CardEstatistica;