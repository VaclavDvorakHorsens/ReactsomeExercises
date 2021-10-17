import { v4 as uuid } from 'uuid';
import WeatherDataUnit from './WeatherDataUnit.js';

const WeatherData = ({weatherDatas}) => {

    return (
        weatherDatas.map(weatherData=>{return <WeatherDataUnit key={uuid()} weatherData={weatherData}/>})
            )
          
}


export default WeatherData