import styled from 'styled-components'

export const App = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;
`;



export const Sidebar = styled.div`
    width: 20%;
    height: 100%;
`;

export const Main = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 16px;
    height: 100%;
`;


export const Header = styled.header`
    display: flex;
    justify-content: center;
    margin-left: 30vw;


    div{
        box-shadow: none;
    }

`;

export const Content = styled.div`
    width: 39%;
    height: 100%;
    display: flex;
    justify-content: center;


`;



/* export const Footer = styled.footer``; */