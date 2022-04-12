import React, { useEffect, useState } from "react";
import { GatewayList } from "../../Components/Gateway/GatewayComponents/GatewayList";
import { HomeContainer } from "./HomeComponents/HomeContainer";
import { HomeWrapper } from "./HomeComponents/HomeWrapper";
import Gateway from "../../Components/Gateway/Gateway";

function CollapseClick(sender) {
  var gateWayHeader = sender.target.closest(".collapsible-header");
  var gateWayBody = gateWayHeader.childNodes[1];
  var classList = gateWayBody.classList;
  var hasClass = false;

  if (!sender.target.classList.contains("Button")) {
    classList.forEach((element) => {
      if (element === "Hidden") {
        hasClass = true;
      }
    });
    if (hasClass) {
      gateWayBody.classList.remove("Hidden");
    } else {
      gateWayBody.classList.add("Hidden");
    }
  }
}
const Home = (props) => {

  

  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <GatewayList className="collapsible">
            {props.gatewayList &&
              props.gatewayList.map((gateway, index) => (
                <Gateway
                  key={index++}
                  OnEditGatewayClick={props.OnEditGatewayClick}
                  OnDeleteGateWayClick={props.OnDeleteGateWayClick}
                  Gateway={gateway}
                  itemClick={CollapseClick}
                  OnPeripheralClick={props.OnPeripheralClick}
                  OnAddPeripheralClick={props.OnAddPeripheralClick}
                ></Gateway>
              ))}
          </GatewayList>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
