import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';

import { AuthContext } from '../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';



export const PacientePage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'CADASTRO DE PACIENTE',}) 
      
    }, []);
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <>

          </>
      )
    }

    return auth.isLogged ? render() : <Navigate to={'./login'}/>
    
  }
  


  


