import './../App.css';
import { useReducer, useEffect } from 'react'
import WeatherDataAll_5DaysBack from '../Components/Weather/WeatherDataAll_5DaysBack'
import WeatherData_5DaysBackAverageMin from '../Components/Weather/WeatherData_5DaysBackAverageMin'
import WeatherData_5DaysBackAverageMax from '../Components/Weather/WeatherData_5DaysBackAverageMax'
import WeatherData_TotalPrecipitation from '../Components/Weather/WeatherData_TotalPrecipitation'
import WeatherData_5DaysBackAverageSpeed from '../Components/Weather/WeatherData_5DaysBackAverageSpeed'
import WeatherDataForecast from '../Components/Weather/WeatherDataForecast'
import weatherDataStore from '../Store/WeatherDataStore'
import { callForCurrentData } from '../Actions/getDataActions'
import dispatcher from '../Dispatcher/Dispatcher'
import actionTypes from '../Actions/actionTypes'

function Forecast_Reducer() {
  const Horsens = 'Horsens'
  const Aarhus = 'Aarhus'
  const Copenhagen = 'Copenhagen'
  let [weatherDatas, dispatch] = useReducer(reducer, weatherDataStore.callForCurrentData())

  useEffect(() => {
    weatherDataStore.addChangeListener_WeatherData(onChangeWeatherData)
    return () => weatherDataStore.removeChangeListener(onChangeWeatherData);
  }, [])


  //callbacks functions that get data from store and set them in useState
  function onChangeWeatherData() {
    weatherDatas=weatherDataStore.callForCurrentData()
  }


  function reducer(weatherDatas, action) {
    switch (action.type) {
      case actionTypes.GET_ALL_DATA:
        dispatcher.dispatch(
            {
                actionTypes: actionTypes.GET_ALL_DATA,
                weatherData: action.data
            })


      return action.data;
      default:
        throw new Error();
    }
  }



  //react on GUI and call dispatcher
  async function dispatchWeatherData(e)
  {
   let newState=await callForCurrentData(e);
   dispatch({data:newState, type: actionTypes.GET_ALL_DATA})

  }

  return (
    <div className="App">
        <h1>USE_REDUCER WAY</h1>
        Choose city:<select
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


export default Forecast_Reducer;