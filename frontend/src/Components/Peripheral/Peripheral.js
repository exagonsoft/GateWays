import React from "react";
import { PeripheralIcon } from "./PeripheralComponents/PeripheralIcon";
import { PeripheralText } from "./PeripheralComponents/PeripheralText";
import { PeripheralWrapper } from "./PeripheralComponents/PeripheralWrapper";
import peripheralActive from "../../Pictures/Peripherical_Active.svg";
import peripheralInactive from "../../Pictures/Peripherical_Inactive.svg";

const Peripheral = ({ Peripheral, onPeripheralClick }) => {
  return (
    <>
      <PeripheralWrapper onClick={onPeripheralClick}>
        {Peripheral.status ? (
          <PeripheralIcon src={peripheralActive} alt="Active"></PeripheralIcon>
        ) : (
          <PeripheralIcon src={peripheralInactive} alt="Inactive"></PeripheralIcon>
        )}

        <PeripheralText>{Peripheral.idnumber} ({Peripheral.vendor}) ({Peripheral.cratedate})</PeripheralText>
      </PeripheralWrapper>
    </>
  );
};

export default Peripheral;
