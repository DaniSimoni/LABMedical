import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';

import { InputComponent } from '../InputComponent/InputComponent';
import * as Styled from './LoginComponent.style';
import { AuthContext } from '../../../Context/Auth/auth.context';
import { UserService } from '../../../../Service/User/User.service';

export const FormLoginComponent = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext)



  const submitForm = async (data) => {
    const { email, password } = data;

    /* const user = users.find(u => u.email === email); */
    const user = await UserService.ShowByEmail(email);  

    if(!user) {
      alert('Usuário não cadastrado');
      reset();
      return;
    }

    password === user.password
      ? redirectToHome(user)
      : alert('Ops! Usuário e/ou Senha Invalidos.');
  }

  const redirectToHome = (user) => {
    setAuth({
      user,
      isLogged: true,
    })
    navigate('/')
  }

  return(
    <Styled.Form onSubmit={ handleSubmit(submitForm) }>
          
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
      </Styled.Header>

      <Styled.InputGroup>
        <InputComponent
          id='email'
          type='email' 
          placeholder='Digite seu email' 
          label='E-mail'
          register={{...register('email', {
              required: true, 
              validate: { matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) }
            })
          }}
          error={ errors.email }
        />
        <InputComponent
          id='password'
          type='password'
          placeholder='Digite sua senha'
          label='Senha'
          register={{...register('password', { 
            required: true, 
            minLength: 8,
           })
          }}
          error={ errors.password }
        />
      </Styled.InputGroup>

      <Styled.Button $active={ !errors.email && !errors.password } type='submit' disabled={ errors.email || errors.password }>Entrar</Styled.Button>

      <Styled.Action>
          <Styled.LabelRecuperarSenha>Esqueceu a senha?</Styled.LabelRecuperarSenha>
      </Styled.Action>
    </Styled.Form>
  )
}