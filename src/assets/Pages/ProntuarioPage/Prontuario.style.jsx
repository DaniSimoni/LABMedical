import styled from 'styled-components';

export const Prontuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
  margin: 0 auto;

`;


export const HeaderProntuario = styled.div`
  justify-content: start;
  align-items: column;
  width: 95%;
  height: 30%;
  color: white;
  margin: 2% auto;
  border-radius: 5px;

`;

export const CorpoProntuario = styled.div`
 display: flex;
  align-items: column;
  flex-wrap: wrap;
  gap: 16px;
  width: 95%;
  height: 20%;
  color: white;
  margin: 2% auto;
  border-radius: 5px;

`;

export const Title = styled.h1`
  display: flex;
  
  color: gray;
  font-size: 2rem;
  width: 100%;
  height: auto;

`;

export const SubTitle = styled.h1`
  display: flex;
  color:  #4682B4;
  font-size: 2rem;
  width: 100%;
  height: auto;
  
`;

export const Label = styled.legend`
  display: flex;
  color: gray;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;

`;

export const RenderResultados = styled.div`
  display: flex;
  align-items: column;
  flex-wrap: wrap;
  gap: 16px;
  width: 95%;
  height: 80%;
  color: white;
  margin: 2% auto;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray; ;
`;