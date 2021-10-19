import { EventEmitter } from 'events'
import dispacher from './../Dispatcher'
import actionTypes from './../Actions/actionTypes'

const CHANGE_EVENT_WEATHERDATA = "change";
const CHANGE_EVENT_WEATHERDATA2 = "change2";
const CHANGE_EVENT_WEATHERDATA3 = "change3";
const CHANGE_EVENT_WEATHERDATA4  = "change4";
const CHANGE_EVENT_WEATHERDATA5  = "change5";
const CHANGE_EVENT_WEATHERDATAFORECAST  = "changeForecast";
let _weatherData = [];
let _weatherData2 = [];
let _weatherData3 = [];
let _weatherData4 = [];
let _weatherData5 = [];
let _weatherDataForecast = [];
let newEventEmiter= new EventEmitter()

const WeatherDataStore1=()=>
{
const weatherDataStore1={}
weatherDataStore1.on=/*EventEmitter.on*/newEventEmiter.on
weatherDataStore1.emit=newEventEmiter.emit
weatherDataStore1._weatherData=[];
weatherDataStore1._weatherData2=[];
weatherDataStore1._weatherData3=[];
weatherDataStore1._weatherData4=[];
weatherDataStore1._weatherData5=[];
weatherDataStore1._weatherDataForecast=[];

weatherDataStore1.setWeatherData=(weatherData)=>
{
    weatherDataStore1._weatherData= weatherData
}
weatherDataStore1.setWeatherData2=(weatherData)=>
{
    weatherDataStore1._weatherData2= weatherData
}
weatherDataStore1.setWeatherData3=(weatherData)=>
{
    weatherDataStore1._weatherData3= weatherData
}
weatherDataStore1.setWeatherData4=(weatherData)=>
{
    weatherDataStore1._weatherData4= weatherData
}
weatherDataStore1.setWeatherData5=(weatherData)=>
{
    weatherDataStore1._weatherData5= weatherData
}
weatherDataStore1.setWeatherDataForecast=(weatherData)=>
{
    weatherDataStore1._weatherDataForecast= weatherData
}
weatherDataStore1.addChangeListener_WeatherData=(callback)=>
{

    weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA, callback);
}
weatherDataStore1.addChangeListener_WeatherData2=(callback)=>
{

    weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA2, callback);
}
weatherDataStore1.addChangeListener_WeatherData3=(callback)=>
{

    weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA3, callback);
}
weatherDataStore1.addChangeListener_WeatherData4=(callback)=>
{

    weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA4, callback);
}
weatherDataStore1.addChangeListener_WeatherData5=(callback)=>
{

    weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA5, callback);
}
weatherDataStore1.addChangeListener_WeatherDataForecast=(callback)=>
{

    weatherDataStore1.on(CHANGE_EVENT_WEATHERDATAFORECAST, callback);
}
weatherDataStore1.emitChange=()=>{ 
    weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATA);
    weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATA2);
    weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATA3);
    weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATA4);
    weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATA5);
    weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATAFORECAST);
}
    weatherDataStore1.callForCurrentData=()=>
    {
        return weatherDataStore1._weatherData  
    }

    weatherDataStore1.callForCurrentData2=()=>
    {
        return weatherDataStore1._weatherData2 
    }
    weatherDataStore1.callForCurrentData3=()=>
    {
        return weatherDataStore1._weatherData3 
    }
    weatherDataStore1.callForCurrentData4=()=>
    {
        return weatherDataStore1._weatherData4 
    }
    weatherDataStore1.callForCurrentData5=()=>
    {
        return weatherDataStore1._weatherData5 
    }
    weatherDataStore1.callForCurrentDataForecast=()=>
    {
        return weatherDataStore1._weatherDataForecast
    }


return Object.assign({},weatherDataStore1/*,addChangeListener_WeatherData,addChangeListener_WeatherData2,
    addChangeListener_WeatherData3,addChangeListener_WeatherData4,addChangeListener_WeatherData5,
    addChangeListener_WeatherDataForecast*/
    )

}

class WeatherDataStore extends EventEmitter {

    addChangeListener_WeatherData(callback) {
        this.on(CHANGE_EVENT_WEATHERDATA, callback);
    }

    addChangeListener_WeatherData2(callback) {
        this.on(CHANGE_EVENT_WEATHERDATA2, callback);
    }
    
    addChangeListener_WeatherData3(callback) {
        this.on(CHANGE_EVENT_WEATHERDATA3, callback);
    }

    addChangeListener_WeatherData4(callback) {
        this.on(CHANGE_EVENT_WEATHERDATA4, callback);
    }
    addChangeListener_WeatherData5(callback) {
        this.on(CHANGE_EVENT_WEATHERDATA5, callback);
    }

    addChangeListener_WeatherDataForecast(callback) {
        this.on(CHANGE_EVENT_WEATHERDATAFORECAST, callback);
    }

    //fire up events
    emitChange() {
        this.emit(CHANGE_EVENT_WEATHERDATA);
        this.emit(CHANGE_EVENT_WEATHERDATA2);
        this.emit(CHANGE_EVENT_WEATHERDATA3);
        this.emit(CHANGE_EVENT_WEATHERDATA4);
        this.emit(CHANGE_EVENT_WEATHERDATA5);
        this.emit(CHANGE_EVENT_WEATHERDATAFORECAST);
    }
   
    //callbacks for data
    callForCurrentData() {
        return _weatherData
    }
    callForCurrentData2() {
        return _weatherData2
    }
    callForCurrentData3() {
        return _weatherData3
    }
    callForCurrentData4() {
        return _weatherData4
    }
    callForCurrentData5() {
        return _weatherData5
    }
    callForCurrentDataForecast() {
        return _weatherDataForecast
    }
}

const store1 =WeatherDataStore1()
const store = new WeatherDataStore()

dispacher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_ALL_DATA:
            store1.setWeatherData (action.weatherData[0]);
            store1.setWeatherData2(action.weatherData[1]);
            store1.setWeatherData3(action.weatherData[2]);
            store1.setWeatherData4(action.weatherData[3]);
            store1.setWeatherData5(action.weatherData[4]);
            store1.setWeatherDataForecast(action.weatherData[5]);
            store1.emitChange();
            break;
       /* case actionTypes.GET_ALL_MIN:
            _weatherData2 = action.weatherData;
            store.emitChange();
            break;*/
        default:
            throw new Error( `Not supported action ${action.types}` ); 
    }
});

export default store1