import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Styled from './InputSearchExame.style';
import  { FormExame }  from '../FormExame/FormExame'; 
import { PacienteService } from '../../../Service/User/Paciente.service';


export const InputSearchExame = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { error },
      } = useForm()
    
    const [pacienteEncontrado, setPacienteEncontrado] = useState(null);

    const submitInputForm = async (dataInput) => {
        const {nome} = dataInput;

        const paciente = await PacienteService.ShowByEmail(nome);
        console.log(paciente)

           if(!paciente) {
            alert('Usuário não cadastrado');
            setPacienteEncontrado(null);
            reset();
          } else {  
            setPacienteEncontrado(paciente);
            reset()
          }
    }
  
    
    return (
        <>
            <Styled.InputContainer>

            <h4>Encontre o paciente</h4>
                <Styled.FormInput 
                onSubmit={ handleSubmit(submitInputForm)}>
                
                <input className="input2  inputFaq" placeholder="Digite o E-mail do paciente" {...register('nome')}/>

                <button className="botao" type='submit'><span className="material-symbols-outlined">
                    Buscar</span></button>
                </Styled.FormInput>

                  <Styled.AreaPaciente>
                    
            {pacienteEncontrado && (
              <FormExame paciente={pacienteEncontrado} />
              )}
                  </Styled.AreaPaciente>
              </Styled.InputContainer>
     
           
        </>
    )
};