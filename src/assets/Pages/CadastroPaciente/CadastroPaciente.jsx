import * as Styled from './CadastroPaciente.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import { AuthContext } from '../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';
/* import { InputComponent } from './../../Components/Form/InputComponent/InputComponent';
 */
import { FormPaciente } from '../../Components/FormPaciente/FormPaciente';


export const PacientePage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRO DE PACIENTE',}) 
      
    }, []);
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <Styled.AreaCadastro>
            <Styled.Title>
              Preencha os campos para cadastrar
            </Styled.Title>
              <Styled.AreaPaciente>

                <FormPaciente/>
            
              </Styled.AreaPaciente> 

          </Styled.AreaCadastro>
      )
    }
    return auth.isLogged ? render() : <Navigate to={'.'}/>
    
  }
  


  


