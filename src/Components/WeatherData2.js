import { v4 as uuid } from 'uuid';
import './WeatherDataUnit.css';
//import WeatherDataUni2 from './WeatherDataUnit.js';

const WeatherData2 = ({ weatherDatas2 }) => {

    return (
        <div className='borderTypePast'>
            <h1>AVERAGE MIN FOR LAST 5 DAYS</h1>
            <p> Value: {weatherDatas2} </p>
        </div >)

}


export default WeatherData2