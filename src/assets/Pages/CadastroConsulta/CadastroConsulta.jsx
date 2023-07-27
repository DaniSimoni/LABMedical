import * as Styled from './CadastroConsulta.style'

import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';


import {InputSearchConsulta} from '../../Components/InputSearchConsulta/InputSearchConsulta';


export const ConsultaPage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRO DE CONSULTA',}) 
      
    }, []);
    
      
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

    return render() 
    
  }
  


