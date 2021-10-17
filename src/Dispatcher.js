import { Dispatcher } from 'flux';
const dispatcher = new Dispatcher();
export default dispatcher;




/*async function callForCurrentData(city)
{
        let data = await fetch('http://localhost:8080/data').then(response => response.json())
        return mainCallback(data,city)
}


function mainCallback(data,city) {
    return callback_1(data,city)
    /*callback_2(data)
    callback_3(data)
    callback_4(data)
    callback_5(data)
}

function callback_1(data,city) {
    var yeasterday = new Date()
    yeasterday.setDate(yeasterday.getDate() - 5)

    const arrayToDisplayHorsens = data.filter(d => yeasterday <
        Date.parse(d.time) && d.place === city)
    return arrayToDisplayHorsens
}

export {callForCurrentData}*/