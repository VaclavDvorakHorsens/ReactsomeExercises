import './WeatherDataAll_5DaysBackUnit.css';

const WeatherDataAll_5DaysBackUnit = ({ weatherData }) => {

    return (
        <div className='borderTypePast'>
            <p> Value: {weatherData.value},   Type:{weatherData.type},   Unit:{weatherData.unit},   Place: {weatherData.place}, DateTime: {weatherData.time},  PrecipitationType: {weatherData.precipitation_type}
            </p>
           
        </div >
    )

}


export default WeatherDataAll_5DaysBackUnit