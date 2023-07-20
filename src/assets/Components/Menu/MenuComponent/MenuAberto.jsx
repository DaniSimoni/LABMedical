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
            <Styled.MenuLogo src={'../../../../public/images/LABMedical_Logo.png'}/>

            <MenuItem Icon={FaHome} Text="INICIO" />
            <MenuItem Icon={FaSignInAlt} Text="SAIR" />

            <MenuItem Icon={FaPlus} Text="CADASTRAR" />
            <MenuItem Icon={FaTasks} Text="LIMPAR PRONTUÁRIO" />

            <MenuItem Icon={FaPlus} Text="CADASTRAR CONSULTA" />
            <MenuItem Icon={FaPlus} Text="CADASTRAR EXAME" />
        </Styled.MenuArea>


                                      
              
            
         </Styled.MenuContainer>
        </>
    )
  }
  
  export default MenuAberto