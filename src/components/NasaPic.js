import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard'
import styled from 'styled-components'



const SpaceImg = styled.img `
max-width: 90%;
height: 50px;
bordr-radius: 4px;`


const NasaPic = () => {
 const [pictures, setPictures] = useState ([]);
 useEffect (() => {
     axios
     .get('https://api.nasa.gov/planetary/apod?api_key=jfJHOcyk4gP22bAahAekna0Y4kyKsEOQ818uUM9H')
     .then (response => {
         console.log(response.data);
         setPictures(response.data)
     })
     .catch(error => console.log("Error!", error))
 }, []);
 

 return (
   
     <div className = "pic">
 
        <NasaCard
        key={pictures.id}
        image={pictures.title}
        date={pictures.date}
        explanation={pictures.explanation}
        copyright={pictures.copyright}/>
  
     </div>
 )
}
export default NasaPic;