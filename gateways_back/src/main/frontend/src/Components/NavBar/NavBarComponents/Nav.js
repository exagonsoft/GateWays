import styled from 'styled-components'

export const Nav = styled.nav`
  transition: all 0.3s ease-in-out;
  background : #000;
  height :80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position:fixed;
  width:100%;
  top: 0px;
  box-shadow: 3px 3px 3px gray;
  z-index: 900;

  @media screen and (max-width: 850px){
     top: 0;
  }
`