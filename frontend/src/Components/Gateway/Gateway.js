import React, { useEffect, useState } from "react";
import { GatewayItemDelButton } from "./GatewayComponents/GatewayItemDelButoon";
import { GatewayItemEditButton } from "./GatewayComponents/GatewayItemEditButton";
import { GatewayHeadButtonsWrapper } from "./GatewayComponents/GatewayItemHeadButtonsWrapper";
import { GatewayItemHeadIcon } from "./GatewayComponents/GatewayItemHeadIcon";
import { GatewayItemHeadText } from "./GatewayComponents/GatewayItemHeadText";
import { GatewayItem } from "./GatewayComponents/GtewayItem";
import { GatewayItemHead } from "./GatewayComponents/GtewayItemHead";
import { GatewayItemHeadWrapper } from "./GatewayComponents/GtewayItemHeadWrapper";
import gatewayIcon from "../../Pictures/GateWay.svg";
import { GatewayItemBody } from "./GatewayComponents/GatewayItemBody";
import { GatewayItemBodyWrapper } from "./GatewayComponents/GatewayItemBodyWrapper";
import { GatewayItemBodyButtonsWrapper } from "./GatewayComponents/GatewayItemBodyButtonsWrapper";
import { GatewayItemBodySeparator } from "./GatewayComponents/GatewayItemBodySeparator";
import { GatewayItemBodyAddPeripheralButton } from "./GatewayComponents/GatewayItemBodyAddPeripheralButton";
import Peripheral from "../Peripheral/Peripheral";

const Gateway = ({ Gateway, itemClick, ShowDeleteDialog, OnEditGatewayClick}) => {
  const [peripheralList, setperipheralList] = useState([]);

  async function GetPeripherals(){
    try {
      let jsonPeripherals = await (await fetch("http://localhost:8085/peripherals/getAll?gatewayID=" + Gateway.id)).json();
      setperipheralList(jsonPeripherals);
    } catch (error) {
      console.log(error);
    }
  }

  function onPeripheralClick(){

  }

  useEffect(() => {
    GetPeripherals();
  }, [setperipheralList]);

  return (
    <>
      <GatewayItem className="collapsible-header ClickableItem">
        <GatewayItemHead onClick={itemClick}>
          <GatewayItemHeadWrapper>
            <GatewayItemHeadIcon src={gatewayIcon} alt="Gateway"/>
            <GatewayItemHeadText>
              {Gateway.name} ({Gateway.serialnumber}) ({Gateway.ipaddress})
            </GatewayItemHeadText>
          </GatewayItemHeadWrapper>
          <GatewayHeadButtonsWrapper>
            <GatewayItemEditButton onClick={() => {
              OnEditGatewayClick(Gateway);
            }} className="Button">
              Edit
            </GatewayItemEditButton>
            <GatewayItemDelButton onClick={() => {
               ShowDeleteDialog(Gateway);
            }} className="Button">
              Delete
            </GatewayItemDelButton>
          </GatewayHeadButtonsWrapper>
        </GatewayItemHead>
        <GatewayItemBodyWrapper className="Hidden">
          <GatewayItemBody>
            <GatewayItemBodyButtonsWrapper>
              {peripheralList.length < 10 ? (
                <GatewayItemBodyAddPeripheralButton>
                  New Peripheral
                </GatewayItemBodyAddPeripheralButton>
              ) : (
                <></>
              )}
            </GatewayItemBodyButtonsWrapper>
            <GatewayItemBodySeparator />
            {peripheralList && peripheralList.map((peripheral, index) => (
               <Peripheral key={index++} Peripheral={peripheral} onPeripheralClick={onPeripheralClick}></Peripheral>
            ))}
          </GatewayItemBody>
        </GatewayItemBodyWrapper>
      </GatewayItem>
    </>
  );
};

export default Gateway;
