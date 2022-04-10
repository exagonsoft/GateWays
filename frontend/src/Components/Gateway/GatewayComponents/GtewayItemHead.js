import styled from "styled-components"

export const GatewayItemHead = styled.div`
  class-name: collapsible-header;
  display: flex;
  padding: 5px 20px;
  border-radius: 5px;
  background-color: burlywood;
  border: solid 2px blanchedalmond;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 3px 5px rgba(43, 38, 41, 0.9);
  cursor: pointer;
  position: relative;
  z-index: 100;

  &:hover {
    background-color: bisque;
    box-shadow: 2px 3px 5px rgba(132, 115, 125, 0.9);
  }
`