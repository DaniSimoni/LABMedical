import * as Styled from './MenuComponent.style';
import React  from 'react'
import { Switch } from 'antd';

export const MenuComponent = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
    
      const [menu, setMenu] = useState(false)
    
      const showMenu = () => setMenu(!menu)

    return (
        <>
     <Styled.MenuFooter>Encolher Menu          
              <Switch defaultChecked onClick={showMenu} onChange={onChange}/>{menu && <MenuComponent active={setMenu} />}
    </Styled.MenuFooter>
                                      
        </>
    )
}