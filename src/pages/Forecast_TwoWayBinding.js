import './../App.css';
import { useState } from 'react'
import { callForCurrentData,postNewData} from '../Actions/getDataActions'
import WeatherDataAll_5DaysBack_TwoWayBinding from '../Components/Weather/WeatherDataAll_5DaysBack_TwoWayBinding'

function Forecast_TwoWayBinding() {
  const Horsens = 'Horsens'
  const Aarhus = 'Aarhus'
  const Copenhagen = 'Copenhagen'
  const [state, setState] = useState([]);
  let eventValue;


  //react on GUI and call dispatcher
  async function dispatchWeatherData(e)
  {
   eventValue=e;
   let newState=await callForCurrentData(e); 
   let newStateCopyOfFirstArray=newState[0]
   //add id to objects in array
   newStateCopyOfFirstArray.forEach((o, i) => o.id = i + 1) 
   debugger
   setState(newStateCopyOfFirstArray)
   debugger
  }

  async function handleChange(sentId) {
    debugger
    let newTemp=state.find(data=>data.id=sentId).map(data=>data.temperature)
    debugger
    let newData={"value":newTemp,"type":"temperature","unit":"C","time":"2021-10-25T22:00:00.000Z","place":"Horsens"}
    debugger
    let newRequest = await postNewData(newData)
    debugger
    dispatchWeatherData(eventValue)
  }

  return (
   
    <div className="App">
        <h1>USE_TWO_WAY_BINDING</h1>
      Choose city:<select
     onChange={dispatchWeatherData}>         
        <option disabled selected value> -- select City -- </option>
        <option value={Horsens}>{Horsens}</option>
        <option value={Aarhus}>{Aarhus}</option>
        <option value={Copenhagen}>{Copenhagen}</option>
      </select>
      <WeatherDataAll_5DaysBack_TwoWayBinding weatherDatas={state} handleChange={handleChange} />
    </div>
  );
}


export default Forecast_TwoWayBinding;