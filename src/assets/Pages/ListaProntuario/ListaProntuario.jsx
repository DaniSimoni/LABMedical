import * as Styled from './ListaProntuario.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import { AuthContext } from '../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';

import { InputSearchProntuario } from '../../Components/InputSearchProntuario/InputSearchProntuario';


export const ListaProntuarioPage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'LISTAGEM DE PRONTUÁRIOS',}) 
      
    }, []);
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <>
        <Styled.AreaCadastro>
            <Styled.Title>
                <InputSearchProntuario/>
            </Styled.Title>
        </Styled.AreaCadastro>
          </>
      )
    }

    return auth.isLogged ? render() : <Navigate to={'.'}/>
    
  }
  


  


