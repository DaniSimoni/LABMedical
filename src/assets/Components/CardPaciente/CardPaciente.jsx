import * as Styled from './CardPaciente.style';

import { ImUsers } from 'react-icons/Im';


function CardPaciente ()  {

        const dataCardPaciente = [
        {
        id:'1',
        icone: '',
        nome: '',
        idade: '',
        telefone: '',
        plano: '',
        
      },
        {
        id:'2',
        icone: '',
        nome: '',
        idade: '',
        telefone: '',
        plano: '',

      },
        {
        id:'3',
        icone: '',
        nome: '',
        idade: '',
        telefone: '',
        plano: '',
      },

      ]

  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>
             <Styled.IconCardPaciente>
                {/* {dataCardPaciente.icone || <img src={ImUsers}></img>} */}
         
             {/*    <img src={ImUsers}></img> */}
             </Styled.IconCardPaciente>
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>

    </>
  );
}

export default CardPaciente;