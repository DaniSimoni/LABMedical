import styled from 'styled-components';

export const CardPacienteContainer = styled.div`
    width: 70vw;
    height: 20vw;

    position: absolute;

    margin: 30vw auto 0 25vw;
`

export const RenderCardPaciente = styled.div`
    width: 15vw;
    height: 17vw;
    position: absolute;
    background-image: linear-gradient(to bottom, #92a8d1 20%, white 30%);
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
`

export const IconCardPaciente = styled.img`
    display: flex;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 5px 5px 10px gray;
    border-radius: 100%;
    margin: 1vw auto;

    span{
                display: flex;
                justify-content: center;
                align-items: center;
                color: black;
                size: 110%;
                margin-right: 1vw;


                width: 4vw;
                height: 4vw;
                border: 2px solid black;
                border-radius: 100%;
            }
    img {
                width: 3.2vw;
                border-radius: 150%;
            }

`