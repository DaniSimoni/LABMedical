import * as Styled from './MenuComponent.style';
import MenuItem from '../../MenuItem/MenuItem';
import { MenuFechado } from './MenuComponent.style';


import React, { useState }  from 'react'
import { Switch } from 'antd';
import { 

  FaHome, 

} from 'react-icons/fa';




const MenuComponent = () => {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const [menu, setMenu] = useState(false)
  const [ menuFechado, setMenuFechado ]= useState(true)

  const showMenu = () => setMenu(!menu)
  const showMenuFechado = () => setMenuFechado(!menuFechado)

    return (
        <>

        
        <Styled.MenuContainer >
              <Styled.MenuArea>
            <Styled.MenuLogo src={'../../../../public/images/LABMedical_Logo.png'}/>

            <MenuItem Icon={FaHome} Text="INICIO" />
            <MenuItem Icon={FaHome} Text="SAIR" />

            <MenuItem Icon={FaHome} Text="CADASTRAR" />
            <MenuItem Icon={FaHome} Text="LIMPAR PRONTUÁRIO" />

            <MenuItem Icon={FaHome} Text="CADASTRAR CONSULTA" />
            <MenuItem Icon={FaHome} Text="CADASTRAR EXAME" />
              </Styled.MenuArea>

            <Styled.MenuFooter>Encolher Menu          
              <Switch defaultChecked onClick={[showMenu, showMenuFechado]} onChange={onChange}/>
              </Styled.MenuFooter>
                                      
              
            
         </Styled.MenuContainer>
        </>
    )
  }
  
  export default MenuComponent