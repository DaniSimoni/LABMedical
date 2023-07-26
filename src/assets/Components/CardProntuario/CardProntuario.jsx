import * as Styled from './CardProntuario.style';
import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';


const CardProntuario = ({ paciente }) => {

  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>


          <Styled.DadosPaciente>

            <Styled.Dados>{paciente.id}</Styled.Dados>
            <Styled.Dados>{paciente.nome}</Styled.Dados>
            <Styled.Dados>{paciente.convenio}</Styled.Dados>

           

            <Styled.Arrow>
            <Link to={`/prontuarios/${paciente.id}`}><ImArrowRight2/> </Link>
            </Styled.Arrow>

           </Styled.DadosPaciente>
        
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>
    </>
  );
};

export default CardProntuario;






/* import * as Styled from './CardProntuario.style';
import { ImArrowRight2 } from 'react-icons/im';
import { useHistory } from 'react-router-dom';

const CardProntuario = ({ paciente }) => {
  const history = useHistory();

  return (
    <>
      <Styled.CardPacienteContainer>
        <Styled.RenderCardPaciente>
          <Styled.DadosPaciente>
            <Styled.Dados>{paciente.id}</Styled.Dados>
            <Styled.Dados>{paciente.nome}</Styled.Dados>
            <Styled.Dados>{paciente.convenio}</Styled.Dados>

            <Styled.Arrow onClick={() => history.push('/prontuarios')}>
              <ImArrowRight2/> 
            </Styled.Arrow>
          </Styled.DadosPaciente>
        </Styled.RenderCardPaciente>
      </Styled.CardPacienteContainer>
    </>
  );
};

export default CardProntuario; */
