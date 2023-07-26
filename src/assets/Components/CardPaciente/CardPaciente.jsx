import * as Styled from './CardPaciente.style';
import { ImUsers } from 'react-icons/im';

const CardPaciente = ({ paciente }) => {
console.log(paciente)
  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>
          <Styled.IconCardPaciente/>

          <Styled.DadosPaciente>
            <Styled.Dados>{paciente.nome}</Styled.Dados>
            <Styled.Dados>{paciente.nasc}</Styled.Dados>
            <Styled.Dados>{paciente.tel}</Styled.Dados>
            <Styled.Dados>{paciente.convenio}</Styled.Dados>
          </Styled.DadosPaciente>
          
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>
    </>
  );
};

export default CardPaciente;
