import { ImUser } from 'react-icons/im';
import styled from 'styled-components';


export const CardPacienteContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 16vw;
    height: 32vh;
    margin: 4vw 0;
`

export const RenderCardPaciente = styled.div`
    width: 15vw;
    height: 17vw;
    background-image: linear-gradient(to top, #fff 37%, #fff 37%, #fff 82.5%, #92a8d1 70%, #92a8d1 20%, #92a8d1 20%, #92a8d1 );
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
    justify-content: space-around;
`

export const IconCardPaciente = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #F00;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 5px 5px 10px gray;
    border-radius: 100%;
    margin: 1vw auto;
    border: 2px solid black;
    background: #FFF;
  
`

export const DadosPaciente = styled.div`

`


export const Dados = styled.p`
    display: flex;
    margin: 1vw;
    justify-content: center;
`