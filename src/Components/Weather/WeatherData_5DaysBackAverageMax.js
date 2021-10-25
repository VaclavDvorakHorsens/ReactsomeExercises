import { v4 as uuid } from 'uuid';
import './WeatherDataAll_5DaysBackUnit.css';

const WeatherData_5DaysBackAverageMax = ({ weatherDatas3 }) => {

    return (
        <div className='borderTypePast'>
            <h1>AVERAGE MAX FOR LAST 5 DAYS</h1>
            <p> Value: {weatherDatas3} </p>
        </div >)

}


export default WeatherData_5DaysBackAverageMax