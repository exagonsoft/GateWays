import styled from "styled-components"

export const PeripheralDialogModalBack = styled.div`
   width: 100%;
   height: 100vh;
   position:fixed;
   top:0;
   z-index: 990;
   background-color: #000000e3;
   display: ${({ showPeripheralDialog }) => (showPeripheralDialog ? "flex" : "none")};
   justify-content: center;
`