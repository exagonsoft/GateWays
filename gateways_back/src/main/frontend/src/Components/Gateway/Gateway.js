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

const Gateway = (props) => {
  const [peripheralList, setperipheralList] = useState([]);

  async function GetPeripherals() {
    try {
      let jsonPeripherals = await (
        await fetch(
          "http://localhost:8085/peripherals/getAll?gatewayID=" +
            props.Gateway.id
        )
      ).json();
      setperipheralList(jsonPeripherals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetPeripherals();
  }, [props.Gateway]);

  return (
    <>
      <GatewayItem className="collapsible-header ClickableItem">
        <GatewayItemHead onClick={props.itemClick}>
          <GatewayItemHeadWrapper>
            <GatewayItemHeadIcon src={gatewayIcon} alt="Gateway" />
            <GatewayItemHeadText>
              {props.Gateway.name} ({props.Gateway.serialnumber}) (
              {props.Gateway.ipaddress})
            </GatewayItemHeadText>
          </GatewayItemHeadWrapper>
          <GatewayHeadButtonsWrapper>
            <GatewayItemEditButton
              onClick={() => {
                props.OnEditGatewayClick(props.Gateway);
              }}
              className="Button"
            >
              Edit
            </GatewayItemEditButton>
            <GatewayItemDelButton
              onClick={() => {
                props.OnDeleteGateWayClick(props.Gateway);
              }}
              className="Button"
            >
              Delete
            </GatewayItemDelButton>
          </GatewayHeadButtonsWrapper>
        </GatewayItemHead>
        <GatewayItemBodyWrapper className="Hidden">
          <GatewayItemBody>
            <GatewayItemBodyButtonsWrapper>
              {peripheralList.length < 10 ? (
                <GatewayItemBodyAddPeripheralButton
                  onClick={() => {
                    props.OnAddPeripheralClick(props.Gateway);
                  }}
                  className="Button"
                >
                  New Peripheral
                </GatewayItemBodyAddPeripheralButton>
              ) : (
                <></>
              )}
            </GatewayItemBodyButtonsWrapper>
            <GatewayItemBodySeparator />
            {peripheralList &&
              peripheralList.map((peripheral, index) => (
                <Peripheral key={index++} Peripheral={peripheral} OnPeripheralClick={props.OnPeripheralClick}></Peripheral>
              ))}
          </GatewayItemBody>
        </GatewayItemBodyWrapper>
      </GatewayItem>
    </>
  );
};

export default Gateway;
