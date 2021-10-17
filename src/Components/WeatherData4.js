import { v4 as uuid } from 'uuid';
import './WeatherDataUnit.css';
//import WeatherDataUni2 from './WeatherDataUnit.js';

const WeatherData4 = ({ weatherDatas4 }) => {

    return (
        <div className='borderTypePast'>
            <h1>TOTAL VALUE OF PRECIPITATION</h1>
            <p> Value: {weatherDatas4} </p>
        </div >)

}


export default WeatherData4