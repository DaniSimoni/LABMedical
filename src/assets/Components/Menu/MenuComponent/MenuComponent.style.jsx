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

  Switch {
    border: 1px solid black;
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

  Switch {
    border: 1px solid black;
  }
`;

export const MenuLogo = styled.img`
  width: 10vw;
  margin: 2rem auto 4rem;

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
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: #4682B4;

  Switch {
    border: 1px solid black;
  }
`;