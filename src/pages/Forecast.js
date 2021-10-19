import './../App.css';
import Login from '../Components/Auth/Login'
import { useState, useRef, useEffect } from 'react'
import WeatherData from '../Components/WeatherData'
import WeatherData2 from '../Components/WeatherData2'
import WeatherData3 from '../Components/WeatherData3'
import WeatherData4 from '../Components/WeatherData4'
import WeatherData5 from '../Components/WeatherData5'
import WeatherDataForecast from '../Components/WeatherDataForecast'
import weatherDataStore from '../Store/WeatherDataStore'
import {callForCurrentData} from '../Actions/getDataActions'

function Forecast()
{
     //const weatherDataStore = new WeatherDataStore()
    const [token, setToken] = useState();
    const [weatherDatas, setweatherDatas] = useState([]/*weatherDataStore.callForCurrentData()*/)
    const [weatherDatas2, setweatherDatas2] = useState([]/*weatherDataStore.callForCurrentData2()*/)
    const [weatherDatas3, setweatherDatas3] = useState([]/*weatherDataStore.callForCurrentData3()*/)
    const [weatherDatas4, setweatherDatas4] = useState([]/*weatherDataStore.callForCurrentData4()*/)
    const [weatherDatas5, setweatherDatas5] = useState([]/*weatherDataStore.callForCurrentData5()*/)
    const [weatherDatasForecast, setweatherDatasForecast] = useState([]/*weatherDataStore.callForCurrentDataForecast()*/)
     
    useEffect(()=>
    {
      weatherDataStore.addChangeListener_WeatherData(onChangeWeatherData)
      weatherDataStore.addChangeListener_WeatherData2(onChangeWeatherData2)
      weatherDataStore.addChangeListener_WeatherData3(onChangeWeatherData3)
      weatherDataStore.addChangeListener_WeatherData4(onChangeWeatherData4)
      weatherDataStore.addChangeListener_WeatherData5(onChangeWeatherData5)
      weatherDataStore.addChangeListener_WeatherDataForecast(onChangeForecast)
    },[])
   /* if(!token) {
      return <Login setToken={setToken} />
    }*/

    const Horsens = 'Horsens'
    const Aarhus = 'Aarhus'
    const Copenhagen = 'Copenhagen'
    //const refCity = useRef()
  
   
 
  
  
    //callbacks functions that get data from store and set them in useState
    function onChangeWeatherData()
    {
      setweatherDatas(weatherDataStore.callForCurrentData())
    
    }
  
    function onChangeWeatherData2()
    {
      setweatherDatas2(weatherDataStore.callForCurrentData2())
    }
    function onChangeWeatherData3()
    {
      setweatherDatas3(weatherDataStore.callForCurrentData3())
    }
    function onChangeWeatherData4()
    {
      setweatherDatas4(weatherDataStore.callForCurrentData4())
    }
    function onChangeWeatherData5()
    {
      setweatherDatas5(weatherDataStore.callForCurrentData5())
    }
    function onChangeForecast()
    {
      setweatherDatasForecast(weatherDataStore.callForCurrentDataForecast())
    }
  
  
  return (
    <div className="App">
       <select
          onChange={callForCurrentData}>
            <option disabled selected value> -- select City -- </option>
          <option value={Horsens}>{Horsens}</option>
          <option value={Aarhus}>{Aarhus}</option>
          <option value={Copenhagen}>{Copenhagen}</option>
        </select>
      <h1 style={{color: "blue"}}>ALL THE DATA FOR 5 DAYS BACK</h1>     
     <WeatherData weatherDatas={weatherDatas}/>
     <WeatherData2 weatherDatas2={weatherDatas2}/>    
     <WeatherData3 weatherDatas3={weatherDatas3}/>  
     <WeatherData4 weatherDatas4={weatherDatas4}/> 
     <WeatherData5 weatherDatas5={weatherDatas5}/>
     <h1 style={{color: "Red"}}>FORECAST FOR 24h</h1>
     <WeatherDataForecast weatherDatasForecast={weatherDatasForecast}/> 
    </div>
  );
  }




export default Forecast;