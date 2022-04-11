import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GatewayDialog from "./Components/GatewayDialog/GatewayDialog";
import { MainContainer } from "./Components/Main/Container";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

const App = () => {
  const renderLoader = () => <p>Loading</p>;
  const [showGatewayDialog, setshowGatewayDialog] = useState(false);
  const [editGateway, seteditGateway] = useState(null);
  const homeRef = React.createRef();
  function OnAddGatewayClick(res){
    setshowGatewayDialog(!showGatewayDialog);
    seteditGateway(null);
    if(res){
      homeRef.current.click();
    }
  }

  function OnEditGatewayClick(Gateway){
    seteditGateway(Gateway);
    setshowGatewayDialog(!showGatewayDialog);
  }


  return (
    <>
      <Router>
        <NavBar OnAddGatewayClick={OnAddGatewayClick}/>
        <MainContainer>
          <Suspense fallback={renderLoader()}>
            <Routes>
              <Route exact path="/" element={<Home OnEditGatewayClick={OnEditGatewayClick} ref={homeRef}/>} />
            </Routes>
          </Suspense>
        </MainContainer>
      </Router>
      <GatewayDialog Gateway={editGateway} showGatewayDialog={showGatewayDialog} OnAddGatewayClick={OnAddGatewayClick}/>
    </>
  );
}

export default App;
