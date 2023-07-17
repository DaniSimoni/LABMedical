import { FormLoginComponent } from "../../Components/Form/Login/LoginComponent";
import { useNavigate } from 'react-router-dom';


import * as Styled from './LoginPage.style';

import imagemLogin from '../../../../public/images/imgLogin.png';



export const LoginPage = () => {


  return (
    <>

      <Styled.ContainerLogin>
          <Styled.ImageLogin src={imagemLogin} />
          <Styled.BarraCentral></Styled.BarraCentral>

          <Styled.DivCriarConta>
            <Styled.LabelCriarConta>Não possui uma conta?</Styled.LabelCriarConta>
            <Styled.ButtonHeaderLogin onClick={() => alert('Em breve você poderá criar sua conta...')}>Criar Conta</Styled.ButtonHeaderLogin>
          </Styled.DivCriarConta>

          <Styled.Login>
            <FormLoginComponent />
          </Styled.Login>

      </Styled.ContainerLogin>
    </>
  )
}



