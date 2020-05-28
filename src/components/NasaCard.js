import React from 'react'
import styled from 'styled-components'

const picContainer = styled.div`
min-width = 50%`


const NasaCard = ({title, date, explanation, copyright}) => {
 console.log();
    return (
        <picContainer>
              <h2>title = {title}</h2>
                <p>date = {date}</p>
                <p>explanation = {explanation}</p>
                <p>copyright = {copyright}</p>
        </picContainer>
    )
}
export default NasaCard;
