import { v4 as uuid } from 'uuid';
import WeatherDataAll_5DaysBackUnit from './WeatherDataAll_5DaysBackUnit.js';

const WeatherDataAll_5DaysBack = ({weatherDatas}) => {

    return (
        weatherDatas.map(weatherData=>{return <WeatherDataAll_5DaysBackUnit key={uuid()} weatherData={weatherData}/>})
            )
          
}


export default WeatherDataAll_5DaysBack