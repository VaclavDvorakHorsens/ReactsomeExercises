import { v4 as uuid } from 'uuid';
import './WeatherDataUnit.css';
//import WeatherDataUni2 from './WeatherDataUnit.js';

const WeatherData5 = ({ weatherDatas5 }) => {

    return (
        <div className='borderTypePast'>
            <h1>AVERAGE WIND SPEED IN LAST FIVE DAYS</h1>
            <p> Value: {weatherDatas5} </p>
        </div >)

}


export default WeatherData5