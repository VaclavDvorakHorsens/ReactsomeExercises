import './WeatherDataAll_5DaysBackUnit.css';

const WeatherDataAll_5DaysBackUnit_TwoWayBinding = ({ key,weatherData,handleChange }) => {

    return (
        <div className='borderTypePast'>
            <input type='text' value={weatherData.value} onChange={handleChange(key)} />   <p> Type:{weatherData.type},   Unit:{weatherData.unit},   Place: {weatherData.place}, DateTime: {weatherData.time},  PrecipitationType: {weatherData.precipitation_type}
            </p>
           
        </div >
    )

}


export default WeatherDataAll_5DaysBackUnit_TwoWayBinding