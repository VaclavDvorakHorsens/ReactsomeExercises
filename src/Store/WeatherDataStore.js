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

const store = new WeatherDataStore()

dispacher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_ALL_DATA:
            _weatherData = action.weatherData[0];
            _weatherData2 = action.weatherData[1];
            _weatherData3 = action.weatherData[2];
            _weatherData4 = action.weatherData[3];
            _weatherData5 = action.weatherData[4];
            _weatherDataForecast = action.weatherData[5];
            store.emitChange();
            break;
       /* case actionTypes.GET_ALL_MIN:
            _weatherData2 = action.weatherData;
            store.emitChange();
            break;*/
        default:
            throw new Error( `Not supported action ${action.types}` ); 
    }
});

export default store