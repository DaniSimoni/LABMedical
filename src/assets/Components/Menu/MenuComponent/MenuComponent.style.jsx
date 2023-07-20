import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: #4682B4;
  position: absolute;

  span.ant.switch-inner {

    margin-top: 20vw;
  }

`;

export const MenuArea = styled.div`
  display: flex;
  width: 20rem;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: #4682B4;

  
`;

export const MenuLogo = styled.img`
  width: 10vw;
  margin: 4rem auto 4rem;

`
export const LabelSwitch = styled.label`
  font-size: 0.8rem;
`

export const MenuFooter = styled.legend`
  display: flex;
  justify-content: space-around;
  color: white;
  margin: 2vh auto;
  width: 13vw;
`

export const MenuFechado = styled.div`
  display: flex;
  width: 5rem;
  height: 80%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: #4682B4;


`;

export const MenuLogoFechado = styled.img`
  width: 4vw;
  margin: 2rem auto 4rem;

`

export const MenuFooterFechado = styled.legend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: column;
  color: white;
  margin: 2vh auto;
  width: 5vw;
  font-size: .8vw;
`

export const LabelSwitchFechado = styled.label`
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5vh;


`



