import React, { useState } from "react";
import { DeleteDialogBack } from "./DeleteDialogComponents/DeleteDialogBack";
import { DeleteDialogButtonsWrapper } from "./DeleteDialogComponents/DeleteDialogButtonsWrapper";
import { DeleteDialogCancelButton } from "./DeleteDialogComponents/DeleteDialogCancelButton";
import { DeleteDialogCloseButton } from "./DeleteDialogComponents/DeleteDialogCloseButton";
import { DeleteDialogCloseButtonWrapper } from "./DeleteDialogComponents/DeleteDialogCloseButtonWraper";
import { DeleteDialogContainer } from "./DeleteDialogComponents/DeleteDialogContainer";
import { DeleteDialogMessage } from "./DeleteDialogComponents/DeleteDialogMessage";
import { DeleteDialogOkButton } from "./DeleteDialogComponents/DeleteDialogOkButton";

const DeleteDialog = ({ showDeleteDialog, deleteGateway, OnCloseDeleteGateWayDialog }) => {
  async function DeleteGateway(){
    await fetch("http://localhost:8085/peripherals/deleteall?gatewayID=" + deleteGateway.id,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("")
    });
    await fetch("http://localhost:8085/gateways/delete?gatewayID=" + deleteGateway.id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("")
    });
    OnCloseDeleteGateWayDialog(deleteGateway.id);
  }

  return (
    <>
      <DeleteDialogBack showDeleteDialog={showDeleteDialog}>
        <DeleteDialogContainer>
          <DeleteDialogCloseButtonWrapper>
            <DeleteDialogCloseButton onClick={() => { OnCloseDeleteGateWayDialog(null);}}>X</DeleteDialogCloseButton>
          </DeleteDialogCloseButtonWrapper>
          <DeleteDialogMessage>Are you sure?</DeleteDialogMessage>
          <DeleteDialogButtonsWrapper>
            <DeleteDialogCancelButton onClick={() => {OnCloseDeleteGateWayDialog(null);}}>Cancel</DeleteDialogCancelButton>
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
