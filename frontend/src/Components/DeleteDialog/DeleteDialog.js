import React from "react";
import { DeleteDialogBack } from "./DeleteDialogComponents/DeleteDialogBack";
import { DeleteDialogButtonsWrapper } from "./DeleteDialogComponents/DeleteDialogButtonsWrapper";
import { DeleteDialogCancelButton } from "./DeleteDialogComponents/DeleteDialogCancelButton";
import { DeleteDialogCloseButton } from "./DeleteDialogComponents/DeleteDialogCloseButton";
import { DeleteDialogCloseButtonWrapper } from "./DeleteDialogComponents/DeleteDialogCloseButtonWraper";
import { DeleteDialogContainer } from "./DeleteDialogComponents/DeleteDialogContainer";
import { DeleteDialogMessage } from "./DeleteDialogComponents/DeleteDialogMessage";
import { DeleteDialogOkButton } from "./DeleteDialogComponents/DeleteDialogOkButton";

const DeleteDialog = ({ showDeleteDialog, editGateway, OnCloseDialogs }) => {
  async function DeleteGateway(){
    await fetch("http://localhost:8085/peripherals/deleteall?gatewayID=" + editGateway.id,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("")
    });
    await fetch("http://localhost:8085/gateways/delete?gatewayID=" + editGateway.id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("")
    });
    OnCloseDialogs(true);
  }

  return (
    <>
      <DeleteDialogBack showDeleteDialog={showDeleteDialog}>
        <DeleteDialogContainer>
          <DeleteDialogCloseButtonWrapper>
            <DeleteDialogCloseButton onClick={() => {OnCloseDialogs(false);}}>X</DeleteDialogCloseButton>
          </DeleteDialogCloseButtonWrapper>
          <DeleteDialogMessage>Are you sure?</DeleteDialogMessage>
          <DeleteDialogButtonsWrapper>
            <DeleteDialogCancelButton onClick={() => {OnCloseDialogs(false);}}>Cancel</DeleteDialogCancelButton>
            <DeleteDialogOkButton onClick={() => {
              DeleteGateway();
            }}>Delete</DeleteDialogOkButton>
          </DeleteDialogButtonsWrapper>
        </DeleteDialogContainer>
      </DeleteDialogBack>
    </>
  );
};

export default DeleteDialog;
