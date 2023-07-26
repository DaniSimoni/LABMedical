import * as Styled from './CadastroExame.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import { AuthContext } from '../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';

import { InputSearchExame } from './../../Components/InputSearchExame/InputSearchExame';


export const ExamePage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRO DE EXAME',}) 
      
    }, []);
    
    

  
    const render = () => {
        return (
          <>
        <Styled.AreaCadastro>
            <Styled.Title>
            <InputSearchExame/>
           </Styled.Title>
        </Styled.AreaCadastro>
          </>
      )
    }

    return render()
   /*   auth.isLogged ? render() : <Navigate to={'.'}/> */
    
  }
  


  


