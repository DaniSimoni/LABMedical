import * as Styled from './CadastroConsulta.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import { AuthContext } from '../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';


import {InputSearchConsulta} from '../../Components/InputSearchConsulta/InputSearchConsulta';


export const ConsultaPage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRO DE CONSULTA',}) 
      
    }, []);
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <>
        <Styled.AreaCadastro>
            <Styled.Title>
                  <InputSearchConsulta/>
            </Styled.Title>
        </Styled.AreaCadastro>
          </>
      )
    }

    return auth.isLogged ? render() : <Navigate to={'.'}/>
    
  }
  


