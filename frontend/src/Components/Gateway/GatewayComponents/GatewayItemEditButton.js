import styled from "styled-components"

export const GatewayItemEditButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: green;
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

  @media screen and (max-width: 850px) {
    width:100%;
    text-align: center;
    padding: 2px 10px;
  }
`