import './WeatherDataAll_5DaysBackUnit.css';

const WeatherData_5DaysBackAverageSpeed = ({ weatherDatas5 }) => {

    return (
        <div className='borderTypePast'>
            <h1>AVERAGE WIND SPEED IN LAST FIVE DAYS</h1>
            <p> Value: {weatherDatas5} </p>
        </div >)

}


export default WeatherData_5DaysBackAverageSpeed