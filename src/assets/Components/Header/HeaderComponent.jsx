import * as Styled from './HeaderComponent.style';
import React, { useContext } from 'react';
import { HeaderContext } from '../../Context/Header.context';

function NavBarHeader({user}) {
    const { data } = useContext(HeaderContext)

     

  return (
    <Styled.Container>
      <Styled.TxtHeader id='titulo'>
        {data.titulo}
      </Styled.TxtHeader>

      <Styled.UserHeader>
        <Styled.TxtUser>
        {/*   {user.email} */} Esperando dados
        </Styled.TxtUser>
        <img
          alt="Imagem do usuário"
          src="../../../public/images/logoteste.jpg"
        />{' '}
      </Styled.UserHeader>
    </Styled.Container>
  );
}

export default NavBarHeader;