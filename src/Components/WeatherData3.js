import { v4 as uuid } from 'uuid';
import './WeatherDataUnit.css';
//import WeatherDataUni2 from './WeatherDataUnit.js';

const WeatherData3 = ({ weatherDatas3 }) => {

    return (
        <div className='borderTypePast'>
            <h1>AVERAGE MAX FOR LAST 5 DAYS</h1>
            <p> Value: {weatherDatas3} </p>
        </div >)

}


export default WeatherData3