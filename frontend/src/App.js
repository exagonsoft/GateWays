import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainContainer } from "./Components/Main/Container";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <>
      <Router>
        <NavBar />
        <MainContainer>
          <Suspense fallback={renderLoader()}>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </MainContainer>
      </Router>
    </>
  );
}

export default App;
