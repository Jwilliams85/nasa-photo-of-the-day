import React from 'react'
import styled from 'styled-components'





const NasaCard = ({title, date, explanation, copyright}) => {
    return (
        <div className = "picture-list">
       <h2>Title:{title}</h2>
       <p>Date: {date}</p>
       <p>Explanation: {explanation}</p>
       <p>Photo by: {copyright} </p>
      </div>
    )
}
export default NasaCard;
