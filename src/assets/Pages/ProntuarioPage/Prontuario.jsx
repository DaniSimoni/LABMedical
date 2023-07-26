import * as Styled from './Prontuario.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';


import { ConsultaService } from '../../../../src/Service/User/Consulta.service';
import { ExameService } from '../../../../src/Service/User/Exame.service';


export const ProntuarioPage = ({paciente}) => {
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'LISTAGEM DE PRONTUÁRIOS',}) 
      
    }, []);
    


  const buscaConsulta = async(consultaData) => {

  const dataConsuta = {...consultaData, pacienteId: paciente.id}
  const consulta = await ConsultaService.Get(data);
  if (!consulta) {
    reset();

  } else {
    console.log('Erro na busca da consulta')
  }
}

const buscaExame = async(exameData) => {

  const dataExame = {...exameData, pacienteId: paciente.id}
  const exame = await ExameService.Get(data);
  if (!exame) {
    reset();

  } else {
    console.log('Erro na busca do Exame')
  }
}
  

    const render = () => {
        return (

          <>          
          
            <Styled.Prontuario>
            <Styled.HeaderProntuario>
              <Styled.Title>Nome do Paciente {paciente.nome}</Styled.Title>
              <Styled.Label>Convênio: </Styled.Label>
              <Styled.Label>Alergias: </Styled.Label>
              <Styled.Label>Cuidados Específicos: </Styled.Label>

            </Styled.HeaderProntuario>

            <Styled.CorpoProntuario>

            <Styled.SubTitle>Consulta</Styled.SubTitle>

              <Styled.RenderResultados>
              {pacienteEncontrado && (
              <FormExame paciente={pacienteEncontrado} />
              )}

              </Styled.RenderResultados>

            <Styled.SubTitle>Exame</Styled.SubTitle>

              <Styled.RenderResultados>
              </Styled.RenderResultados>


            </Styled.CorpoProntuario>



          </Styled.Prontuario>

          </>

      )
    }

    return render()
    
  }
  


  


