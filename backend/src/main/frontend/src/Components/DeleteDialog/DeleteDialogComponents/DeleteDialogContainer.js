import styled from "styled-components"

export const DeleteDialogContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 20px;
   width: 20%;
   height: auto;
   align-self: center;
   border-radius: 20px;
   background-color: #ddd4d4;
   box-shadow: 5px 5px 5px #090808f7;

   @media screen and (max-width: 850px) {
       width: 70%;
   }
`