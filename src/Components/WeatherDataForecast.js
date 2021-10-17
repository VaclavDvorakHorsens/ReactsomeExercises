import { v4 as uuid } from 'uuid';
import WeatherDataUnitForecast from './WeatherDataForecastUnit.js';

const WeatherDataForecast = ({weatherDatasForecast}) => {

    return (
        weatherDatasForecast.map(weatherDataForecast=>{return <WeatherDataUnitForecast key={uuid()} weatherDataForecast={weatherDataForecast}/>})
            )
          
}


export default WeatherDataForecast