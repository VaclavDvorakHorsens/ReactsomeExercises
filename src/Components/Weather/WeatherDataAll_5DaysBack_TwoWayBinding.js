import { v4 as uuid } from 'uuid';
import WeatherDataAll_5DaysBackUnit_TwoWayBinding from './WeatherDataAll_5DaysBackUnit_TwoWayBinding.js';

const WeatherDataAll_5DaysBack_TwoWayBinding = ({weatherDatas,handleChange}) => {
    debugger
    return (
        weatherDatas.map(weatherData=>{return <WeatherDataAll_5DaysBackUnit_TwoWayBinding key={weatherDatas.id} weatherData={weatherData} handleChange={handleChange}/>})
            )
          
}


export default WeatherDataAll_5DaysBack_TwoWayBinding