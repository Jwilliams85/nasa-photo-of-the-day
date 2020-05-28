import React from "react";
import "./App.css";
import NasaPic from './components/NasaPic'
import logo from './img/nasa_logo.png'
import NasaCard from './components/NasaCard'


function App() {
  return (
    <div className="App">
     <div className ="nasa_logo_container">
     <h1>Picture Of The Day</h1>
     <NasaPic/>
    
     </div>
    </div>
  );
}

export default App;
