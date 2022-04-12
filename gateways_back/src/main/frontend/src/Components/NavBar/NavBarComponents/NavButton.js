import styled from "styled-components"

export const NavButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: blue;
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(43, 38, 41, 0.9);
  display: grid;
  justify-self: right;
  cursor: pointer;
  z-index: 200;

  &:hover {
    background-color: #6df46d;
    box-shadow: 2px 3px 5px rgba(132, 115, 125, 0.9);
  }
`