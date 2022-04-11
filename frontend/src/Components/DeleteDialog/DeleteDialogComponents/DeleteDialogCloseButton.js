import styled from "styled-components"

export const DeleteDialogCloseButton = styled.div`
   display: flex;
   justify-content: center;
   width: 40px;
   height: 40px;
   background-color: red;
   color: #fff;
   position: relative;
   border-radius: 0 20px 0 20px;
   text-align: center;
   cursor: pointer;

   &:hover {
       box-shadow: 1px 1px 1px 1px #000;
   }
`