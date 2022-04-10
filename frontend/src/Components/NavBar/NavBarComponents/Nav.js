import styled from 'styled-components'

export const Nav = styled.nav`
   transition: all 0.3s ease-in-out;
  background : #000;
  height :80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 40px;
  box-shadow: 3px 3px 3px gray;
  z-index: 100;

  @media screen and (max-width: 850px){
     top: 0;
  }
`