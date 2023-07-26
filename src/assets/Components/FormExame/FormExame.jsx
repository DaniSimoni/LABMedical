import * as Styled from './FormExame.style';

import { ExameService } from '../../../../src/Service/User/Exame.service';

import { useForm } from 'react-hook-form';
import { InputComponent } from '../Form/InputComponent/InputComponent';
import { Switch } from 'antd';


export const FormExame = ({paciente}) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()



  const createExame = (ExameData) => {
    ExameService.CreateExame(ExameData)
      .then(response => {
        console.log('Exame cadastrada com sucesso:', response);
        reset();
      })
      .catch(error => {
        console.error('Erro ao cadastrar Exame:', error);
      });
  };


  const deleteExame = (ExameData) => {
    ExameService.DeleteExame(ExameData.id)
      .then(response => {
        console.log('Exame deletado com sucesso:', response);
        reset();
      })
      .catch(error => {
        console.error('Erro ao deletar Exame:', error);
      });
  };

  const submitForm = async (ExameData) => {

    const exame = await ExameService.CreateExame(ExameData);

    if (!exame) {
      alert('Exame Cadastrada');
      reset();

    } else {
      alert('Exame não cadastrado');
    }

  }


  return (
    <Styled.Form onSubmit={handleSubmit(submitForm)}>

      <Styled.Header>
        <Styled.Title>Exame de {paciente.nome}</Styled.Title>


        <Styled.LabelSwitch>
          Editar
        </Styled.LabelSwitch>

        <Styled.SwitchBtn>
          <Switch /* defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange} */ />
        </Styled.SwitchBtn>


        <Styled.ButtonDel $width={'10%'} onClick={createExame} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>Deletar</Styled.ButtonDel>
        <Styled.Button $width={'10%'} onClick={deleteExame} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>Salvar</Styled.Button>
      </Styled.Header>


      <Styled.MainForm $width={'100%'}>
        <Styled.InputGroup>

          <InputComponent $width={'350%'}
            id='exameNome'
            type='string'
            placeholder='Nome do Exame'
            label='Nome do Exame'
            name='exameNome'
            register={{
              ...register('exameNome', {
                required: true,
              })
            }}
            error={errors.exameNome}
          />


          <InputComponent $width={'100%'}
            id='dataExame'
            type='date'
            placeholder='Digite a data'
            label='Data da Exame'
            name='dataExame'
            register={{
              ...register('dataExame', {
                required: true,
              })
            }}
            error={errors.dataExame}
          />

          <InputComponent $width={'100%'}
            id='hora'
            type='hour'
            placeholder='Digite o hora do exame'
            label='Hora do exame'
            name='hora'
            register={{
              ...register('hora', {
                required: true,
              })
            }}
            error={errors.nome}
          />
        </Styled.InputGroup>

        <Styled.InputGroup  >

          <InputComponent
            id='tipoExame'
            type='string'
            placeholder='Tipo de Exame'
            name='tipoExame'
            label='Tipo de Exame'
            register={{
              ...register('tipoExame', {
                required: true,
              })
            }}
            error={errors.tipoExame}
          />

          <InputComponent 
            id='labExame'
            type='string'
            placeholder='Laboratório'
            name='labExame'
            label='Laboratório'
            register={{
              ...register('labExame', {
                required: true,
              })
            }}
            error={errors.labExame}
          />

        </Styled.InputGroup>

        <Styled.InputGroup>


          <InputComponent 
            id='urlExame'
            type='url'
            placeholder='URL do Documento do Exame'
            name='urlExame'
            label='URL do Documento do Exame'
            register={{
              ...register('urlExame', {
                required: true,
              })
            }}
            error={errors.urlExame}
          />

        </Styled.InputGroup>

        <Styled.InputGroup>


          <InputComponent $height={'220px'}
            id='resultadoExame'
            type='textarea'
            placeholder='Resultado do Exame'
            name='resultadoExame'
            label='Resultado do Exame'
            register={{
              ...register('resultadoExame', {
                required: false,
              })
            }}
            error={errors.resultadoExame}
          />

        </Styled.InputGroup>
      </Styled.MainForm>
    </Styled.Form>
  )
}