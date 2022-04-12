import React, { Suspense, useState } from "react";
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
  const homeRef = React.createRef();
  function OnCloseDialogs(res) {
    setshowGatewayDialog(false);
    setshowdelDialog(false);
    setshowperipheralDialog(false);
    seteditGateway(null);
    seteditPeripheral(null);
    if (res) {
      homeRef.current.click();
    }
  }

  function OnAddGatewayClick() {
    setshowGatewayDialog(!showGatewayDialog);
  }

  function OnEditGatewayClick(Gateway) {
    seteditGateway(Gateway);
    setshowGatewayDialog(!showGatewayDialog);
  }

  function OnDeleteGatewayClick(Gateway) {
    seteditGateway(Gateway);
    setshowdelDialog(!showdelDialog);
  }

  function OnAddPeripheralClick(Gateway){
    seteditGateway(Gateway);
    seteditPeripheral(null);
    setshowperipheralDialog(!showperipheralDialog);
  }

  function OnPeripheralClick(Peripheral) {
    seteditPeripheral(Peripheral);
    setshowperipheralDialog(!showperipheralDialog);
  }

  return (
    <>
      <Router>
        <NavBar OnAddGatewayClick={OnAddGatewayClick} />
        <MainContainer>
          <Suspense fallback={renderLoader()}>
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
                    ref={homeRef}
                  />
                }
              />
            </Routes>
          </Suspense>
        </MainContainer>
      </Router>
      <GatewayDialog
        Gateway={editGateway}
        showGatewayDialog={showGatewayDialog}
        OnCloseDialogs={OnCloseDialogs}
      />
      <PeripheralDialog showPeripheralDialog={showperipheralDialog}
         peripheral={editPeripheral}
         OnCloseDialogs={OnCloseDialogs}
         editGateway={editGateway}
      />
      <DeleteDialog
        showDeleteDialog={showdelDialog}
        editGateway={editGateway}
        OnCloseDialogs={OnCloseDialogs}
      />
    </>
  );
};

export default App;
