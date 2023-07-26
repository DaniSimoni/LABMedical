import * as Styled from './MenuComponent.style';
import MenuItem from '../../MenuItem/MenuItem';

import React from 'react'
import { 

  FaHome, 
  FaSignInAlt,
  FaPlus,
  FaTasks,
} from 'react-icons/fa';

const MenuAberto = () => {

    return (
        <>

        
        <Styled.MenuContainer >
              <Styled.MenuArea>
            <Styled.MenuLogo src={'../../../../public/images/LABMedical_Logo.png'} alt='Logo LAB Medical'/>

            <MenuItem Icon={FaHome} Text="INICIO" To='/' />
            <MenuItem Icon={FaSignInAlt} Text="SAIR" To='/login' />

            <MenuItem Icon={FaPlus} Text="CADASTRAR" To='/paciente' />
            <MenuItem Icon={FaTasks} Text="LISTAR PRONTUÁRIO" To='/listaProntuarios'  />

            <MenuItem Icon={FaPlus} Text="CADASTRAR CONSULTA" To='/consulta' />
            <MenuItem Icon={FaPlus} Text="CADASTRAR EXAME" To='/exame' />
        </Styled.MenuArea>


                                      
              
            
         </Styled.MenuContainer>
        </>
    )
  }
  
  export default MenuAberto