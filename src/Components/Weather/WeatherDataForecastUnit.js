import './WeatherDataAll_5DaysBackUnit.css';

const WeatherDataUnitForecast = ({ weatherDataForecast }) => {

    //parse inner data arrays
    const parseArray = function (array) {
        let stringToReturn = ''
        if (Array.isArray(array))
            array.forEach(element => {
                stringToReturn = stringToReturn + element + ', '
            });
        return stringToReturn
    }

    return (
        <div className='borderTypeForecast'>
            <p> From: {weatherDataForecast.from},  To: {weatherDataForecast.to}, Type:{weatherDataForecast.type},   Unit:{weatherDataForecast.unit},   Place: {weatherDataForecast.place},
                PrecipitationTypes: {parseArray(weatherDataForecast.precipitation_types)}, Directions: {parseArray(weatherDataForecast.directions)}
            </p>

        </div >
    )

}


export default WeatherDataUnitForecast