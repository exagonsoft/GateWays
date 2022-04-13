import styled from "styled-components"

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-decoration: none;
  align-content: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`