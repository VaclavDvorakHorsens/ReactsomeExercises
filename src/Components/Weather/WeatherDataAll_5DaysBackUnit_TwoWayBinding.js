import './WeatherDataAll_5DaysBackUnit.css';

const WeatherDataAll_5DaysBackUnit_TwoWayBinding = ({ key,weatherData,handleChange }) => {
    const color='red'
    return (
        
        <div className='borderTypePast'>
            Value:<input type='text' value={weatherData.value} style={{color: color}} /*onChange={handleChange(key)}*/ />   
            Type:<input type='text' value={weatherData.type} style={{color: color}}/*onChange={handleChange(key)}*/ />   
            Unit:<input type='text' value={weatherData.unit} style={{color: color}}/> 
            Place:<input type='text' value={weatherData.place} style={{color: color}}/> 
            PrecipitationType:<input type='text' value={weatherData.precipitation_type} style={{color: color}}/>
            
         
        </div >
    )

}


export default WeatherDataAll_5DaysBackUnit_TwoWayBinding