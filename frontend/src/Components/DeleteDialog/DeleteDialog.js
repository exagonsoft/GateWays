import React from "react";
import { DeleteDialogBack } from "./DeleteDialogComponents/DeleteDialogBack";
import { DeleteDialogButtonsWrapper } from "./DeleteDialogComponents/DeleteDialogButtonsWrapper";
import { DeleteDialogCancelButton } from "./DeleteDialogComponents/DeleteDialogCancelButton";
import { DeleteDialogCloseButton } from "./DeleteDialogComponents/DeleteDialogCloseButton";
import { DeleteDialogCloseButtonWrapper } from "./DeleteDialogComponents/DeleteDialogCloseButtonWraper";
import { DeleteDialogContainer } from "./DeleteDialogComponents/DeleteDialogContainer";
import { DeleteDialogMessage } from "./DeleteDialogComponents/DeleteDialogMessage";
import { DeleteDialogOkButton } from "./DeleteDialogComponents/DeleteDialogOkButton";

const DeleteDialog = ({ showDeleteDialog, editGatewayID, CloseDialog }) => {
  async function DeleteGateway(){
    let res = await fetch("http://localhost:8085/gateways/delete?gatewayID=" + editGatewayID, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(""),
    });
  }

  return (
    <>
      <DeleteDialogBack showDeleteDialog={showDeleteDialog}>
        <DeleteDialogContainer>
          <DeleteDialogCloseButtonWrapper>
            <DeleteDialogCloseButton onClick={() => {CloseDialog(false);}}>X</DeleteDialogCloseButton>
          </DeleteDialogCloseButtonWrapper>
          <DeleteDialogMessage>Are you sure?</DeleteDialogMessage>
          <DeleteDialogButtonsWrapper>
            <DeleteDialogCancelButton onClick={() => {CloseDialog(false);}}>Cancel</DeleteDialogCancelButton>
            <DeleteDialogOkButton onClick={() => {
              DeleteGateway();
              CloseDialog(true);
            }}>Delete</DeleteDialogOkButton>
          </DeleteDialogButtonsWrapper>
        </DeleteDialogContainer>
      </DeleteDialogBack>
    </>
  );
};

export default DeleteDialog;
