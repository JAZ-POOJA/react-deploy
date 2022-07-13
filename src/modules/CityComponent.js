import React from "react";
import styled from "styled-components";


const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input{
    padding: 10px;
    font-size: 15px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  
  }
  & button{
    background-color: teal;
    font-size: 16px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
  `;

  const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 15px;
  font-weight: bold;
`;
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityComponent = (props) => {
    const{updateCity , fetchWeather} = props;
    return (
        <>
        <WeatherLogo src = "/icons/logo.svg" />
        < ChooseCityLabel > Find Weather of your City </ChooseCityLabel>
        <SearchBox  onSubmit={fetchWeather}> 
            <input 
              onChange= {(e) => updateCity(e.target.value)}
            placeholder=" City"
            /> 
         <button type = {"submit"}>
             Search
            </button>  
             </SearchBox>
        </>
    );
};

export default CityComponent;