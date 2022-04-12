import styled from "styled-components"

export const DeleteDialogOkButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: blue;
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(43, 38, 41, 0.9);
  display: grid;
  align-self: center;
  cursor: pointer;
  z-index: 200;

  &:hover {
    background-color: #6df46d;
    box-shadow: 2px 3px 5px rgba(132, 115, 125, 0.9);
  }
`