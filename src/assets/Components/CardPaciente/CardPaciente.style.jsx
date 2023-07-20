import styled from 'styled-components';
import { ImUsers } from 'react-icons/im';

export const CardPacienteContainer = styled.div`
    width: 70vw;
    height: 20vw;

    position: absolute;

    margin: 32vw auto 0 0vw;
`

export const RenderCardPaciente = styled.div`
    width: 15vw;
    height: 17vw;
    position: absolute;
    background-image: linear-gradient(to top, #fff 37%, #fff 37%, #fff 82.5%, #92a8d1 70%, #92a8d1 20%, #92a8d1 20%, #92a8d1 );
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
    border: 2px solid black;
    background-image: url(<ImUsers/>);
    background-color: white;

/*     span{
                display: flex;
                justify-content: center;
                align-items: center;
              
                size: 10%;
                margin: 0 auto;
                border: 2px solid black;

                width: 4vw;
                height: 4vw;
                border: 2px solid black;
                border-radius: 100%;
            } */
    img {
                width: 3.2vw;
                border-radius: 150%;
                border: 1px solid red;
            }

`