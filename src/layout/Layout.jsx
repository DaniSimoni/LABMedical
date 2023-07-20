import { Outlet } from "react-router-dom"

import * as Styled from './Layout.style'
import { MenuComponent}  from '../assets/Components/Menu/MenuComponent/MenuComponent.jsx';
import HeaderComponent from './../assets/Components/Header/HeaderComponent';


export const Layout = () => {



    return (
        <Styled.App>
                
        <Styled.Sidebar>
            <MenuComponent/>
        </Styled.Sidebar>

            <Styled.Header>
                <HeaderComponent></HeaderComponent>
            </Styled.Header>
         <Styled.Main>

            <Styled.Content>
            <Outlet />
            </Styled.Content>
         </Styled.Main>

    {/*      <Styled.Footer></Styled.Footer> */}
        </Styled.App>
    )
}