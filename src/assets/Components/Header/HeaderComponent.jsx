import * as Styled from './HeaderComponent.style';
import React, { useContext } from 'react';
import { HeaderContext } from '../../Context/Header.context';

function NavBarHeader() {
    const { data } = useContext(HeaderContext)

  return (
    <Styled.Container>
      <Styled.TxtHeader id='titulo'>
        {data.titulo}
      </Styled.TxtHeader>

      <Styled.UserHeader>
        <Styled.TxtUser>
          Nome do Usuário
        </Styled.TxtUser>
        <img
          alt=""
          src="../../../public/images/logoteste.jpg"
        />{' '}
      </Styled.UserHeader>
    </Styled.Container>
  );
}

export default NavBarHeader;