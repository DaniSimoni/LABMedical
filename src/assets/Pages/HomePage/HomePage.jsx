import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';
import EstatisticasSistema from '../../Components/EstatisticasSistema/EstatisticasSistema';
import { InputSearch } from '../../Components/InputSearch/InputSearch';
import CardPaciente from '../../Components/CardPaciente/CardPaciente';
import { AuthContext } from './../../Context/Auth/auth.context';
import { Navigate } from 'react-router-dom';



export const HomePage = () => {
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'ESTATÍSTICAS E INFORMAÇÕES',}) 
      
    }, []);
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <>
            <EstatisticasSistema/>
            <InputSearch/>
            <CardPaciente/>
          </>
      )
    }

    return auth.isLogged ? render() : <Navigate to={'./login'}/>
    
  }
  


  


