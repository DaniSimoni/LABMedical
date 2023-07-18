import * as Styled from './CardPaciente.style';
/* import  LogoTeste  from '../../../../public/images/logoteste.jpg'
 */
/* import { ImUsers } from 'react-icons/im'; */
import { ImUsers } from 'react-icons/im';


const CardPaciente =  ({Icon}) => {

/*         const dataCardPaciente = [
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

      ] */

  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>
             <Styled.IconCardPaciente Icon={ImUsers}/>

         
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>

    </>
  );
}

export default CardPaciente;