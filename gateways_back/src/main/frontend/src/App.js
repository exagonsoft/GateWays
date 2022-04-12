import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DeleteDialog from "./Components/DeleteDialog/DeleteDialog";
import GatewayDialog from "./Components/GatewayDialog/GatewayDialog";
import { MainContainer } from "./Components/Main/Container";
import NavBar from "./Components/NavBar/NavBar";
import PeripheralDialog from "./Components/PeripheralDialog/PeripheralDialog";
import Home from "./Pages/Home/Home";

const App = () => {
  const renderLoader = () => <p>Loading</p>;
  const [showGatewayDialog, setshowGatewayDialog] = useState(false);
  const [showdelDialog, setshowdelDialog] = useState(false);
  const [showperipheralDialog, setshowperipheralDialog] = useState(false);
  const [editGateway, seteditGateway] = useState(null);
  const [editPeripheral, seteditPeripheral] = useState(null);
  const [peripheralGateWay, setperipheralGateWay] = useState(null);
  const [deleteGateway, setDeleteGateWay] = useState(null);
  const [gatewayList, setgatewayList] = useState([]);

  async function GetGateways(gatewayID) {
    try {
      let jsonRes = await (
        await fetch("http://localhost:8085/gateways/getAll")
      ).json();
      setgatewayList(jsonRes);
    } catch (error) {
      console.log(error);
    }
  }

  function OnCloseDialogs(res) {
    setshowGatewayDialog(false);
    seteditGateway(null);
    if (res) {
      setperipheralGateWay(null);
      setDeleteGateWay(null);
      GetGateways();
    }
  }

  function OnCloseDeleteGateWayDialog(res){
    setshowdelDialog(false);
    if(res != null) {
      GetGateways();
    }
  }

  function onClosePeripheralDialog(res){
    setshowperipheralDialog(false);
    seteditPeripheral(null);
    if(res) {
      GetGateways();
    }
  }

  function OnAddGatewayClick() {
    seteditGateway(null);
    setshowGatewayDialog(!showGatewayDialog);
  }

  function OnEditGatewayClick(Gateway) {
    seteditGateway(Gateway);
    setshowGatewayDialog(!showGatewayDialog);
  }

  function OnDeleteGatewayClick(Gateway) {
    setDeleteGateWay(Gateway);
    setshowdelDialog(!showdelDialog);
  }

  function OnAddPeripheralClick(Gateway){
    setperipheralGateWay(Gateway);
    seteditPeripheral(null);
    setshowperipheralDialog(!showperipheralDialog);
  }

  function OnPeripheralClick(Peripheral) {
    seteditPeripheral(Peripheral);
    setshowperipheralDialog(!showperipheralDialog);
  }

  useEffect(() => {
    GetGateways();
  }, []);

  return (
    <>
      <Router>
        <NavBar OnAddGatewayClick={OnAddGatewayClick} />
        <MainContainer>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    OnDeleteGateWayClick={OnDeleteGatewayClick}
                    OnEditGatewayClick={OnEditGatewayClick}
                    OnPeripheralClick={OnPeripheralClick}
                    OnAddPeripheralClick={OnAddPeripheralClick}
                    gatewayList={gatewayList}
                    GetGateways={GetGateways}
                  />
                }
              />
            </Routes>
        </MainContainer>
      </Router>
      <GatewayDialog
        Gateway={editGateway}
        showGatewayDialog={showGatewayDialog}
        OnCloseDialogs={OnCloseDialogs}
      />
      <PeripheralDialog showPeripheralDialog={showperipheralDialog}
         peripheral={editPeripheral}
         onClosePeripheralDialog={onClosePeripheralDialog}
         peripheralGateWay={peripheralGateWay}
      />
      <DeleteDialog
        showDeleteDialog={showdelDialog}
        deleteGateway={deleteGateway}
        OnCloseDeleteGateWayDialog={OnCloseDeleteGateWayDialog}
      />
    </>
  );
};

export default App;
