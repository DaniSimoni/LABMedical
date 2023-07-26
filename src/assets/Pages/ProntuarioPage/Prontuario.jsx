import * as Styled from './Prontuario.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import { AuthContext } from '../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';



export const ProntuarioPage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'LISTAGEM DE PRONTUÁRIOS',}) 
      
    }, []);
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (

          <>          
          
            <Styled.Prontuario>
            <Styled.HeaderProntuario>
              <Styled.Title>Nome do Paciente</Styled.Title>
              <Styled.Label>Convênio: </Styled.Label>
              <Styled.Label>Alergias: </Styled.Label>
              <Styled.Label>Cuidados Específicos: </Styled.Label>

            </Styled.HeaderProntuario>

            <Styled.CorpoProntuario>

            <Styled.SubTitle>Consulta</Styled.SubTitle>

              <Styled.RenderResultados>
              </Styled.RenderResultados>

            <Styled.SubTitle>Exame</Styled.SubTitle>

              <Styled.RenderResultados>
              </Styled.RenderResultados>


            </Styled.CorpoProntuario>



          </Styled.Prontuario>

          </>

      )
    }

    return auth.isLogged ? render() : <Navigate to={'.'}/>
    
  }
  


  


