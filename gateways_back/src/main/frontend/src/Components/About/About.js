import React from "react";
import { AboutBack } from "./AboutComponents/AboutBack";
import { AboutCard } from "./AboutComponents/AboutCard";
import { AboutCardPicture } from "./AboutComponents/AboutCardImage";
import { AboutCardText } from "./AboutComponents/AboutCardText";
import { AboutCloseButton } from "./AboutComponents/AboutCloseButton";
import { AboutCloseWrapper } from "./AboutComponents/AboutCloseWrapper";
import { AboutContainer } from "./AboutComponents/AboutContainer";
import { CardDescription } from "./AboutComponents/AboutDescription";
import { CardTitle } from "./AboutComponents/AboutTitle";
import ListPicture from '../../Pictures/GatList.webp';
import DetailsPicture from '../../Pictures/GatList.png';
import AddPicture from '../../Pictures/GatAddNew.png';
import EditPicture from '../../Pictures/GatEdit.png';
import DeletePicture from '../../Pictures/GatDelete.png';
import AddPeripheralPicture from '../../Pictures/NewPeripheral.png';
import EditPeripheral from '../../Pictures/Peripheral.png';
import { AboutBar } from "./AboutComponents/AboutBar";

const About = (props) => {
  return (
    <>
      <AboutBack showAboutDialog={props.showAbout}>
        <AboutContainer>
          <AboutBar>
          <AboutCloseWrapper>
            <AboutCloseButton onClick={props.OnCloseAbout}>X</AboutCloseButton>
          </AboutCloseWrapper>
          </AboutBar>
          <CardTitle>How to Use</CardTitle>
          <CardDescription>Important hints to work width Gateways App</CardDescription>
          <AboutCard>
              <AboutCardPicture src={ListPicture} alt="Home View" />
              <AboutCardText>The default page Home display a list of all stored Gateways</AboutCardText>
          </AboutCard>
          <AboutCard>
              <AboutCardPicture src={DetailsPicture} alt="Details View" />
              <AboutCardText>To display the Peripherals of any GateWay, just click on it</AboutCardText>
          </AboutCard>
          <AboutCard>
              <AboutCardPicture src={AddPicture} alt="Add View" />
              <AboutCardText>To Add a GateWay click the (New GateWay) button</AboutCardText>
          </AboutCard>
          <AboutCard>
              <AboutCardPicture src={EditPicture} alt="Edit View" />
              <AboutCardText>To Edit a specific GateWay click the (Edit) button</AboutCardText>
          </AboutCard>
          <AboutCard>
              <AboutCardPicture src={DeletePicture} alt="Delete View" />
              <AboutCardText>To delete a Gateway click on the (Delete) button</AboutCardText>
          </AboutCard>
          <AboutCard>
              <AboutCardPicture src={AddPeripheralPicture} alt="Add Peripherals View" />
              <AboutCardText>To add a Peripheral to a selected Gateway click (Add peripheral)</AboutCardText>
              <AboutCardText>Only 10 Peripheral per GateWay allowed</AboutCardText>
          </AboutCard>
          <AboutCard>
              <AboutCardPicture src={EditPeripheral} alt="Add Peripherals View" />
              <AboutCardText>To display information abut a Peripheral, just click it</AboutCardText>
          </AboutCard>
        </AboutContainer>
      </AboutBack>
    </>
  );
};

export default About;
