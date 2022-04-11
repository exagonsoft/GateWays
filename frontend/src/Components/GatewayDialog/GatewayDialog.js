import React, { useEffect, useState } from "react";
import { GatewayDialogButton } from "./GatewayDialogComponents/GatewayDialogButton";
import { GatewayDialogCloseButtonWrapper } from "./GatewayDialogComponents/GatewayDialogCloseButtnWrapper";
import { GatewayDialogCloseButton } from "./GatewayDialogComponents/GatewayDialogCloseButton";
import { GatewayDialogContainer } from "./GatewayDialogComponents/GatewayDialogContainer";
import { GatewayDialogInput } from "./GatewayDialogComponents/GatewayDialogInput";
import { GatewayDialogModalBack } from "./GatewayDialogComponents/GatewayDialogModalBack";
import { GatewayDialogTitle } from "./GatewayDialogComponents/GatewayDialogTitle";

const GatewayDialog = ({ showGatewayDialog, OnAddGatewayClick, Gateway }) => {
  const [isvalidData, setisvalidData] = useState(false);
  const initialGatewayState = {
    name: "",
    ipaddress: "",
  };
  const [gatewayData, setgatewayData] = useState(initialGatewayState);

  function ValidIP(stringIP) {
    var patronIp = new RegExp(
      "^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$"
    );
    var values;

    // early return if the string is in incorrect format
    if (stringIP.search(patronIp) !== 0) {
      return false;
    }

    values = stringIP.split(".");

    return (
      values[0] <= 255 &&
      values[1] <= 255 &&
      values[2] <= 255 &&
      values[3] <= 255
    );
  }

  const UpdateField = (sender, field) => {
    sender.target.style.border = "";
    let data = sender.target.value;
    setgatewayData({
      ...gatewayData,
      [field]: data,
    });
    if (field === "ipaddress") {
      if (!ValidIP(data)) {
        sender.target.style.border = "2px solid red";
        setisvalidData(false);
      } else {
        sender.target.style.border = "";
        setisvalidData(true);
      }
    }
  };

  function ValidateData() {
    if (gatewayData.name !== "" && ValidIP(gatewayData.ipaddress)) {
      setisvalidData(true);
      return true;
    } else {
      if (gatewayData.name === "") {
        let name = document.getElementById("gatName");
        name.style.border = "2px solid red";
      }
      if (gatewayData.name === "") {
        let address = document.getElementById("gatIpAddress");
        address.style.border = "2px solid red";
      }
      setisvalidData(false);
      return false;
    }
  }

  function getCharacter(digit) {
    let charValue = "";
    switch (digit) {
      case "0": {
        charValue = "A";
        break;
      }
      case "1": {
        charValue = "L";
        break;
      }
      case "2": {
        charValue = "V";
        break;
      }
      case "3": {
        charValue = "R";
        break;
      }
      case "4": {
        charValue = "O";
        break;
      }
      case "5": {
        charValue = "5";
        break;
      }
      case "6": {
        charValue = "6";
        break;
      }
      case "7": {
        charValue = "E";
        break;
      }
      case "8": {
        charValue = "X";
        break;
      }
      case "9": {
        charValue = "3";
        break;
      }
      default:
        break;
    }

    return charValue;
  }

  function RandomSerial() {
    var digit1 = Math.round(Math.random() * 10);
    var digit2 = Math.round(Math.random() * 10);
    var digit3 = Math.round(Math.random() * 10);
    var digit4 = Math.round(Math.random() * 10);
    var digit5 = Math.round(Math.random() * 10);
    var digit6 = Math.round(Math.random() * 10);
    return (
      getCharacter(digit1.toString()) +
      getCharacter(digit2.toString()) +
      getCharacter(digit3.toString()) +
      getCharacter(digit4.toString()) +
      getCharacter(digit5.toString()) +
      getCharacter(digit6.toString())
    );
  }

  function ClearData() {
    let name = document.getElementById("gatName");
    let address = document.getElementById("gatIpAddress");
    name.value = "";
    address.value = "";
    name.style.border = "";
    address.style.border = "";
    setgatewayData(initialGatewayState);
  }

  async function SaveData() {
    if (ValidateData()) {
      try {
        if (Gateway === null) {
          let dummyData = RandomSerial();
          let dummyGatewayDta = {
            serialnumber: dummyData,
            name: gatewayData.name,
            ipaddress: gatewayData.ipaddress,
          };
          let res = await fetch("http://localhost:8085/gateways/addgateway", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dummyGatewayDta),
          });
        } else {
          let dummyGatewayDta = {
            id: Gateway.id,
            serialnumber: Gateway.serialnumber,
            name: gatewayData.name,
            ipaddress: gatewayData.ipaddress,
          };
          let res = await fetch("http://localhost:8085/gateways/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dummyGatewayDta),
          });
        }
        ClearData();
        OnAddGatewayClick(true);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Invalid Data");
    }
  }

  function LoadGatewayData() {
    if (Gateway != null) {
      let name = document.getElementById("gatName");
      let address = document.getElementById("gatIpAddress");
      name.value = Gateway.name;
      address.value = Gateway.ipaddress;
    }
  }

  useEffect(() => {
    LoadGatewayData();
  }, [Gateway]);

  return (
    <>
      <GatewayDialogModalBack showGatewayDialog={showGatewayDialog}>
        <GatewayDialogContainer>
          <GatewayDialogCloseButtonWrapper>
            <GatewayDialogCloseButton
              onClick={() => {
                ClearData();
                OnAddGatewayClick(false);
              }}
            >
              X
            </GatewayDialogCloseButton>
          </GatewayDialogCloseButtonWrapper>
          <GatewayDialogTitle>New Gateway</GatewayDialogTitle>
          <GatewayDialogInput
            id="gatName"
            required
            placeholder="Name ej.(North Caroline)"
            onChange={(sender) => UpdateField(sender, "name")}
          />
          <GatewayDialogInput
            id="gatIpAddress"
            required
            placeholder="IP Address ej.(192.254.137.25)"
            onChange={(sender) => UpdateField(sender, "ipaddress")}
          />
          <GatewayDialogButton onClick={SaveData}>
            {Gateway === null ? "Submit" : "Update"}
          </GatewayDialogButton>
        </GatewayDialogContainer>
      </GatewayDialogModalBack>
    </>
  );
};

export default GatewayDialog;
