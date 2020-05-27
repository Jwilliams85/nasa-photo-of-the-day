import React from "react";
import "./App.css";
import NasaPic from './components/NasaPic'
import logo from './img/nasa_logo.png'


function App() {
  return (
    <div className="App">
     <div className ="nasa_logo_container">
     {/*<img clasName = "logo" src = {logo} alt= "nasa official logo"/>*/}
     <h1>Picture Of The Day</h1>
     <NasaPic/>
     </div>
    </div>
  );
}

export default App;
