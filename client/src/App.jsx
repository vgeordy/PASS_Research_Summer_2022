import { EthProvider } from "./contexts/EthContext";
import React, { useState, useEffect } from 'react';
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import axios from 'axios';
import "./App.css";



function App() {

//display
return (
    <EthProvider>
      <div id="App" >
        <div className="container">
       
          <Demo />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
