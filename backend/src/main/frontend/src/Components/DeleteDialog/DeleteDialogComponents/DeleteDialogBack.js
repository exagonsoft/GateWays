import styled from "styled-components"

export const DeleteDialogBack = styled.div`
   width: 100%;
   height: 100vh;
   position:fixed;
   top:0;
   left:0;
   z-index: 990;
   background-color: #000000e3;
   display: ${({ showDeleteDialog }) => (showDeleteDialog ? "flex" : "none")};
   justify-content: center;
`