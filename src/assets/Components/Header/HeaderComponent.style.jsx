import styled from 'styled-components';

export const Container = styled.div`
  height: 3rem;
  display: flex;

  background-color: #4682B4; 
  box-shadow: 0 0 20px 3px;
  position: absolute;
  width: 100vw;
  margin-left: 10em;
  color: white;

`;

export const UserHeader = styled.div`

    display: flex;
    align-items: center;
    width: 12rem;
    margin-left: 0vw;
    padding: 0;
    justify-content: right;



img{
  width: 2.5vw;
  height: 2.5vw;
  cursor: pointer;
  margin: .25vw auto;
  border-radius: 1.5rem;
  padding: .3rem;
  border: .1rem solid white;
}

`

export const TxtHeader = styled.h3`
    display: flex;
    justify-content: left;
    width: 60vw;
    margin: .5vw 0 0 17vw;
    padding-left: 2vw;
    align-items: center;

`

export const TxtUser = styled.h6`
    display: flex;
    justify-content: right;
    width: 60vw;
    margin: 0;
    padding-right: .5vw;
`