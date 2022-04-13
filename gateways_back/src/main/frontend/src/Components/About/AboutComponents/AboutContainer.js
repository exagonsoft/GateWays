import styled from "styled-components"

export const AboutContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   padding: 20px;
   width: 80%;
   height: 90vh;
   align-self: center;
   border-radius: 20px;
   background-color: #ddd4d4;
   box-shadow: 5px 5px 5px #090808f7;
   overflow-y: scroll;
   scrollbar-width: none;

   @media screen and (max-width: 850px) {
       width: 70%;
   }
`