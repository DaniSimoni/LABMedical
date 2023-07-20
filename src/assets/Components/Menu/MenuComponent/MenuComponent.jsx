import * as Styled from './MenuComponent.style';

import React, { useState } from 'react';
import { Switch } from 'antd';

import MenuFechado from './MenuFechado.jsx';
import MenuAberto from './MenuAberto.jsx';




export const MenuComponent = () => {

  const [menu, setMenu] = useState(false);



  /*   const menuFechado = () => {
      return (
      <>
      <Styled.MenuFechado >
        <Styled.MenuFooterFechado>
            <Styled.LabelSwitchFechado>
              MENU
            </Styled.LabelSwitchFechado>          
            <Switch defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange}/>
        </Styled.MenuFooterFechado>
        </Styled.MenuFechado>
        </>
      )
      }
  
      const menuAberto = () => {
        return (
        <Styled.MenuContainer >
        <Styled.MenuFooter>
            <Styled.LabelSwitch>
              MENU
            </Styled.LabelSwitch>          
            <Switch defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange}/>
        </Styled.MenuFooter>
        </Styled.MenuContainer>
        ) 
      } */



  const onChange = () => {
    setMenu((MenuAberto) => !MenuAberto);
  };




  return (
    <>
      {menu ? <MenuAberto /> : <MenuFechado />}
      {/*           {menu ? menuAberto()  : menuFechado()} */}

      <Styled.MenuFechado >
        <Styled.MenuFooterFechado>

          <Styled.LabelSwitchFechado>
            MENU
          </Styled.LabelSwitchFechado>

          <Switch defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange} />

        </Styled.MenuFooterFechado>
      </Styled.MenuFechado>

    </>
  )
}

/*   export default MenuComponent */

