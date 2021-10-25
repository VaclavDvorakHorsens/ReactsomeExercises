import { EventEmitter } from 'events'
import dispacher from '../Dispatcher/Dispatcher'
import actionTypes from './../Actions/actionTypes'

const CHANGE_EVENT_WEATHERDATA = "change";
//let _weatherData = [];

let newEventEmiter = new EventEmitter()

const WeatherDataStore1 = () => {
    const weatherDataStore1 = {}
    weatherDataStore1.on = newEventEmiter.on
    weatherDataStore1.emit = newEventEmiter.emit
    weatherDataStore1._weatherData = [[], [], [], [], [], []];


    weatherDataStore1.setWeatherData = (weatherData) => {
        weatherDataStore1._weatherData = [weatherData[0], weatherData[1], weatherData[2], weatherData[3], weatherData[4], weatherData[5]]
    }

    weatherDataStore1.addChangeListener_WeatherData = (callback) => {

        weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA, callback);
    }
    weatherDataStore1.removeChangeListener = (callback) => {
        weatherDataStore1.on(CHANGE_EVENT_WEATHERDATA, callback);
    }

    weatherDataStore1.emitChange = () => {
        weatherDataStore1.emit(CHANGE_EVENT_WEATHERDATA);

    }

    weatherDataStore1.callForCurrentData = () => {
        return weatherDataStore1._weatherData
    }



    return Object.assign({}, weatherDataStore1)

}

/*class WeatherDataStore extends EventEmitter {

    addChangeListener_WeatherData(callback) {
        this.on(CHANGE_EVENT_WEATHERDATA, callback);
    }
}*/

const store1 = WeatherDataStore1()
//const store = new WeatherDataStore()

dispacher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_ALL_DATA:
            store1.setWeatherData([[...action.weatherData[0]], action.weatherData[1], action.weatherData[2],
            action.weatherData[3], action.weatherData[4], [...action.weatherData[5]]]);
            store1.emitChange();
            break;
        default:
            throw new Error(`Not supported action ${action.types}`);
    }
});

export default store1