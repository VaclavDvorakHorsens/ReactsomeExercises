import './WeatherDataAll_5DaysBackUnit.css';

const WeatherData_TotalPrecipitation = ({ weatherDatas4 }) => {

    return (
        <div className='borderTypePast'>
            <h1>TOTAL VALUE OF PRECIPITATION</h1>
            <p> Value: {weatherDatas4} </p>
        </div >)

}


export default WeatherData_TotalPrecipitation