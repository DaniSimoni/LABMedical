import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: ${({ $width }) => ($width ? $width : '100%')};

`


export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;

`;


export const Select = styled.select`
  display: flex;
  padding: 0.3rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.2rem;
  border: 1px solid ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
  width: 100%;
`;

export const TextArea = styled.textarea`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.3125rem;
  border: 1px solid ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};;
`;


export const Icon = styled.button`
  position: absolute;
  top: .7rem;
  right: .7rem;

  cursor: pointer;

  background: transparent;
  border: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};;
`

