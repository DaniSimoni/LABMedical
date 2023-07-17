import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/Header.context';
import  MenuComponent  from '../../Components/Menu/MenuComponent/MenuComponent'
import Header from '../../Components/Header/HeaderComponent'
import EstatisticasSistema from '../../Components/EstatisticasSistema/EstatisticasSistema';
import { InputSearch } from '../../Components/InputSearch/InputSearch';
import CardPaciente from '../../Components/CardPaciente/CardPaciente';


export const HomePage = () => {

    const { setData } = useContext(HeaderContext)
        useEffect(() => {
        setData({       
            titulo: 'ESTATÍSTICAS E INFORMAÇÕES',}) 
           
      }, []);




    return (
      <>
        <Header/>
        <MenuComponent/>
        <EstatisticasSistema/>
        <InputSearch/>
        <CardPaciente/>
      </>
    )
  }
  
  export default HomePage

  


