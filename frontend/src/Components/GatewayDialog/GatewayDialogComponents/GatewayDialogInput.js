import styled from "styled-components"

export const GatewayDialogInput = styled.input`
  width: 60%;
  margin-bottom: 10px;
  box-shadow: 2px 2px 1px #534747c7;
  height: 25px;
  align-self: center;

  &:hover {
    box-shadow: 2px 2px 2px  #e6af2f;
  }

  @media screen and (max-width: 850px) {
    width: 80%;
  }
`