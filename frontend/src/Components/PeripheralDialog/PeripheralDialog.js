import React, { useState } from "react";
import { PeripheralDialogButtonsWrapper } from "./PeripheralDialogComponents/PeripheralDialogButonsWrapper";
import { PeripheralDialogButton } from "./PeripheralDialogComponents/PeripheralDialogButton";
import { PeripheralDialogChecker } from "./PeripheralDialogComponents/PeripheralDialogChecker";
import { PeripheralDialogCheckerWrapper } from "./PeripheralDialogComponents/PeripheralDialogCheckerWrapper";
import { PeripheralDialogCloseButton } from "./PeripheralDialogComponents/PeripheralDialogCloseButton";
import { PeripheralDialogCloseButtonWrapper } from "./PeripheralDialogComponents/PeripheralDialogCloseButtonWrapper";
import { PeripheralDialogContainer } from "./PeripheralDialogComponents/PeripheralDialogContainer";
import { PeripheralDialogInput } from "./PeripheralDialogComponents/PeripheralDialogInput";
import { PeripheralDialogTitle } from "./PeripheralDialogComponents/PeripheralDialogTilte";
import { PeripheralDialogModalBack } from "./PeripheralDialogComponents/PeripheralModalBack";

const PeripheralDialog = (props) => {
  const initialPeripheralState = {
    vendor: "",
    status: "",
  };
  const [peripheralData, setperipheralData] = useState(initialPeripheralState);
  const UpdateField = (sender, field) => {
    sender.target.style.border = "";
    let data = null;
    if(sender.target.type.toString() === "checkbox")
    {
      if(sender.target.checked){
        data = 1
      }else{
        data = 0
      }
    }else{
      data = sender.target.value;
    }
    setperipheralData({
      ...peripheralData,
      [field]: data,
    });
  };
  function RandomSerial() {
    var digit1 = Math.round(Math.random() * 10);
    var digit2 = Math.round(Math.random() * 10);
    var digit3 = Math.round(Math.random() * 10);
    var digit4 = Math.round(Math.random() * 10);
    var digit5 = Math.round(Math.random() * 10);
    var digit6 = Math.round(Math.random() * 10);
    return (
      digit1.toString() +
      digit2.toString() +
      digit3.toString() +
      digit4.toString() +
      digit5.toString() +
      digit6.toString()
    );
  }

  function ClearData(){
    let dummyVendor = document.getElementById('vendorInput');
    dummyVendor.value = '';
    let dummyStatus = document.getElementById('peripheralStatus');
    //dummyStatus.Chequ
    setperipheralData(initialPeripheralState);
  }

  async function SaveData(){
    try {
      let dumyData = {
        idnumber:  parseInt(RandomSerial()),
        vendor: peripheralData.vendor,
        status: peripheralData.status,
        cratedate: new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear().toString(),
        gatewayid: props.editGateway.id
      }
      let res = await fetch("http://localhost:8085/peripherals/addperipheral", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dumyData),
          });

      ClearData();
      props.OnCloseDialogs(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <PeripheralDialogModalBack
        showPeripheralDialog={props.showPeripheralDialog}
      >
        <PeripheralDialogContainer>
          <PeripheralDialogCloseButtonWrapper>
            <PeripheralDialogCloseButton onClick={props.OnCloseDialogs}>
              X
            </PeripheralDialogCloseButton>
          </PeripheralDialogCloseButtonWrapper>
          <PeripheralDialogTitle>
            {props.peripheral === null
              ? "Add New Peripheral"
              : "Update Peripheral"}
          </PeripheralDialogTitle>
          <PeripheralDialogInput id="vendorInput" placeholder="Vendor ej.(Samsung)"
            onChange={(sender) => UpdateField(sender, "vendor")}
          />
          <PeripheralDialogCheckerWrapper>
            <PeripheralDialogChecker id="peripheralStatus" type="checkbox" 
              onChange={(sender) => {
                UpdateField(sender, "status");
              }}
            />
            OnlineStatus
          </PeripheralDialogCheckerWrapper>
          <PeripheralDialogButtonsWrapper isAddNew={props.peripheral === null}>
            {props.peripheral === null ? (
              <>
                <PeripheralDialogButton onClick={SaveData}>Save</PeripheralDialogButton>
              </>
            ) : (
              <>
                <PeripheralDialogButton>Delete</PeripheralDialogButton>
                <PeripheralDialogButton>Update</PeripheralDialogButton>
              </>
            )}
          </PeripheralDialogButtonsWrapper>
        </PeripheralDialogContainer>
      </PeripheralDialogModalBack>
    </>
  );
};

export default PeripheralDialog;
