import { React } from 'react';
import * as Styled from './InputSearch.style';


export const InputSearch = () => {
    return (
        <>
            <Styled.InputContainer>

            <h2>Informações Rápidas de Pacientes</h2>
                <Styled.FormInput>
                <input className="input2  inputFaq" placeholder="Digite o nome do paciente"/>

                <button className="botao "><span className="material-symbols-outlined">
                    search</span></button>
                </Styled.FormInput>
            </Styled.InputContainer>
           
        </>
    )
};