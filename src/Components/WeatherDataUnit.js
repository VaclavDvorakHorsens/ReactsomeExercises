import './WeatherDataUnit.css';

const WeatherDataUnit = ({ weatherData }) => {

    return (
        <div className='borderTypePast'>
            <p> Value: {weatherData.value},   Type:{weatherData.type},   Unit:{weatherData.unit},   Place: {weatherData.place}, DateTime: {weatherData.time},  PrecipitationType: {weatherData.precipitation_type}
            </p>
           
        </div >
    )

}


export default WeatherDataUnit