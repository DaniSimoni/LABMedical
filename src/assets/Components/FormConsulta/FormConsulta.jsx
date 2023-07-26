import * as Styled from './FormConsulta.style';

import { ConsultaService } from '../../../Service/User/Consulta.service';

import { useForm } from 'react-hook-form';
import { InputComponent } from '../Form/InputComponent/InputComponent';
import { Switch } from 'antd';





export const FormConsulta = ({paciente}) => {

 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()



  const createConsulta = (consultaData) => {
    ConsultaService.CreateConsulta(consultaData)
      .then(response => {
        console.log('Consulta cadastrada com sucesso:', response);
        reset();
      })
      .catch(error => {
        console.error('Erro ao cadastrar Consulta:', error);
      });
  };


  const deleteConsulta = (consultaData) => {
    ConsultaService.DeleteConsulta(consultaData.id)
      .then(response => {
        console.log('Consulta deletado com sucesso:', response);
        reset();
      })
      .catch(error => {
        console.error('Erro ao deletar consulta:', error);
      });
  };

  const submitForm = async (consultaData) => {

    const consulta = await ConsultaService.CreateConsulta(consultaData);

    if (!consulta) {
      alert('Consulta Cadastrada');
      reset();

    } else {
      alert('Consulta não cadastrado');
    }

  }



  return (
    <Styled.Form onSubmit={handleSubmit(submitForm)}>

      <Styled.Header>
        <Styled.Title>Consulta de {paciente.nome}</Styled.Title>


        <Styled.LabelSwitch>
          Editar
        </Styled.LabelSwitch>

        <Styled.SwitchBtn>
          <Switch /* defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange} */ />
        </Styled.SwitchBtn>


        <Styled.ButtonDel $width={'10%'} onClick={deleteConsulta} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>Deletar</Styled.ButtonDel>
        <Styled.Button $width={'10%'} onClick={createConsulta} $active={!errors.email && !errors.password} type='submit' disabled={errors.email || errors.password}>Salvar</Styled.Button>
      </Styled.Header>


      <Styled.MainForm $width={'100%'}>
        <Styled.InputGroup>

          <InputComponent $width={'350%'}
            id='motivo'
            type='string'
            placeholder='Digite o motivo da consulta'
            label='Motivo da Consulta'
            name='motivo'
            register={{
              ...register('motivo', {
                required: true,
              })
            }}
            error={errors.nome}
          />


          <InputComponent $width={'100%'}
            id='dataConsulta'
            type='date'
            placeholder='Digite a data'
            label='Data da Consulta'
            name='dataConsulta'
            register={{
              ...register('dataConsulta', {
                required: true,
              })
            }}
            error={errors.nome}
          />

          <InputComponent $width={'100%'}
            id='hora'
            type='hour'
            placeholder='Digite o hora da consulta'
            label='Hora da Consulta'
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

          <InputComponent $height={'100px'}
            id='descProb'
            type='textarea'
            placeholder='Descreva o problema'
            name='descProb'
            label='Descrição do Problema'
            register={{
              ...register('descProb', {
                required: true,
              })
            }}
            error={errors.descProb}
          />

        </Styled.InputGroup>

        <Styled.InputGroup>


          <InputComponent $height={'70px'}
            id='medicacao'
            type='textarea'
            placeholder='Medicação Receitada'
            name='medicacao'
            label='Medicação Receitada'
            register={{
              ...register('medicacao', {
                required: true,
              })
            }}
            error={errors.medicacao}
          />

        </Styled.InputGroup>

        <Styled.InputGroup>


          <InputComponent $height={'70px'}
            id='dosagem'
            type='textarea'
            placeholder='Dosagem e Precauções'
            name='dosagem'
            label='Dosagem e Precauções'
            register={{
              ...register('dosagem', {
                required: false,
              })
            }}
            error={errors.dosagem}
          />

        </Styled.InputGroup>
      </Styled.MainForm>
    </Styled.Form>
  )
}