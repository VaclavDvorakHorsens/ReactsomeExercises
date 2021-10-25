import { v4 as uuid } from 'uuid';
import './WeatherDataAll_5DaysBackUnit.css';
//import WeatherDataUni2 from './WeatherDataUnit.js';

const WeatherData_5DaysBackAverageMin = ({ weatherDatas2 }) => {

    return (
        <div className='borderTypePast'>
            <h1>AVERAGE MIN FOR LAST 5 DAYS</h1>
            <p> Value: {weatherDatas2} </p>
        </div >)

}


export default WeatherData_5DaysBackAverageMin