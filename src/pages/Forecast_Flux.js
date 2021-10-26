import './../App.css';
import { useState, useEffect } from 'react'
import WeatherDataAll_5DaysBack from '../Components/Weather/WeatherDataAll_5DaysBack'
import WeatherData_5DaysBackAverageMin from '../Components/Weather/WeatherData_5DaysBackAverageMin'
import WeatherData_5DaysBackAverageMax from '../Components/Weather/WeatherData_5DaysBackAverageMax'
import WeatherData_TotalPrecipitation from '../Components/Weather/WeatherData_TotalPrecipitation'
import WeatherData_5DaysBackAverageSpeed from '../Components/Weather/WeatherData_5DaysBackAverageSpeed'
import WeatherDataForecast from '../Components/Weather/WeatherDataForecast'
import weatherDataStore from '../Store/WeatherDataStore'
import { callForCurrentData } from '../Actions/getDataActions.mjs'
import dispatcher from '../Dispatcher/Dispatcher'
import actionTypes from '../Actions/actionTypes'

function Forecast_Flux() {
  const Horsens = 'Horsens'
  const Aarhus = 'Aarhus'
  const Copenhagen = 'Copenhagen'
  const [weatherDatas, setweatherDatas] = useState(weatherDataStore.callForCurrentData())

  useEffect(() => {
    weatherDataStore.addChangeListener_WeatherData(onChangeWeatherData)
    return () => weatherDataStore.removeChangeListener(onChangeWeatherData);
  }, [])


  //callbacks functions that get data from store and set them in useState
  function onChangeWeatherData() {
    setweatherDatas(weatherDataStore.callForCurrentData())
  }


  //react on GUI and call dispatcher
  async function dispatchWeatherData(e)
  {
    dispatcher.dispatch(
      {
          actionTypes: actionTypes.GET_ALL_DATA,
          weatherData: await callForCurrentData(e)
      })
  }

  return (
    <div className="App">
       <h1>FLUX WAY</h1>Choose city:<select
     onChange={dispatchWeatherData}>         
        <option disabled selected value> -- select City -- </option>
        <option value={Horsens}>{Horsens}</option>
        <option value={Aarhus}>{Aarhus}</option>
        <option value={Copenhagen}>{Copenhagen}</option>
      </select>
      <h1 style={{ color: "blue" }}>ALL THE DATA FOR 5 DAYS BACK</h1>
      <WeatherDataAll_5DaysBack weatherDatas={weatherDatas[0]} />
      <WeatherData_5DaysBackAverageMin weatherDatas2={weatherDatas[1]} />
      <WeatherData_5DaysBackAverageMax weatherDatas3={weatherDatas[2]} />
      <WeatherData_TotalPrecipitation weatherDatas4={weatherDatas[3]} />
      <WeatherData_5DaysBackAverageSpeed weatherDatas5={weatherDatas[4]} />
      <h1 style={{ color: "Red" }}>FORECAST FOR 24h</h1>
      <WeatherDataForecast weatherDatasForecast={weatherDatas[5]} />
    </div>
  );
}


export default Forecast_Flux;