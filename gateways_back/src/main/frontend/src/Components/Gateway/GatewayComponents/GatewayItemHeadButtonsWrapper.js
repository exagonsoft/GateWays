import styled from "styled-components"

export const GatewayHeadButtonsWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: space-between;
    margin: 3px 0;
  }
`