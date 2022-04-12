import styled from "styled-components"

export const PeripheralDialogButtonsWrapper = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   justify-content: ${({ isAddNew }) => (isAddNew ? "center" : "space-between")};
   align-self: center;
`