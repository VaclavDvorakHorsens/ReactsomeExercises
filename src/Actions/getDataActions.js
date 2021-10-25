

async function callForCurrentData(e) {
    let data = await makeTheCall(e.target.value)
    return data;
}

//call for data on server
async function makeTheCall(city) {
    let dataPast = await fetch('http://localhost:8080/data').then(response => response.json()).catch(e=>console.log(e))
    let dataForecast = await fetch('http://localhost:8080/forecast').then(response => response.json()).catch(e=>console.log(e))
    return mainCallback(dataPast, dataForecast, city)
}


function mainCallback(dataPast, dataForecast, city) {
    let dataPast0 = callback_Past0(dataPast, city)
    let dataPast2 = callback_Past2(dataPast, city)
    let dataPast3 = callback_Past3(dataPast, city)
    let dataPast4 = callback_Past4(dataPast, city)
    let dataPast5 = callback_Past5(dataPast, city)
    let dataForecast6 = callback_Forecast(dataForecast, city)
    return [dataPast0, dataPast2, dataPast3, dataPast4, dataPast5,dataForecast6]
}

//show all latest in last 5days data
function callback_Past0(data, city) {
    var yeasterday = new Date()
    yeasterday.setDate(yeasterday.getDate() - 5)
    const arrayToDisplay = data.filter(d => yeasterday <
        Date.parse(d.time) && d.place === city)
    return arrayToDisplay
}

//show min in five days
function callback_Past2(data, city) {
    var fiveDaysBack = new Date()
    fiveDaysBack.setDate(fiveDaysBack.getDate() - 5)
    const arrayToDisplay = Math.min(...data.filter(d => fiveDaysBack <
        Date.parse(d.time) && d.place === city).map(m => m.value))
    return arrayToDisplay
}

//show max in five days
function callback_Past3(data, city) {
    var fiveDaysBack = new Date()
    fiveDaysBack.setDate(fiveDaysBack.getDate() - 5)
    const arrayToDisplay = Math.max(...data.filter(d => fiveDaysBack <
        Date.parse(d.time) && d.place === city).map(m => m.value))
    return arrayToDisplay
}

//total value of precipation
function callback_Past4(data, city) {
    var fiveDaysBack = new Date()
    fiveDaysBack.setDate(fiveDaysBack.getDate() - 5)
    const arrayToDisplay = data.filter(d => fiveDaysBack <
        Date.parse(d.time) && d.type === 'precipitation' && d.place === city).map(m => m.value).reduce((s, n) => s + n)
    return arrayToDisplay
}

//average wind speed in last 5 days
function callback_Past5(data, city) {
    var fiveDaysBack = new Date()
    fiveDaysBack.setDate(fiveDaysBack.getDate() - 5)
    const arrayToDisplay = data.filter(d => d.type === 'wind speed' && d.place === city).map(m => m.value)
    const numberToDisplay = arrayToDisplay.reduce((s, n) => s + n) / arrayToDisplay.length
    return numberToDisplay
}

//call the forecast for next 24hours
function callback_Forecast(data, city) {
    let oneDayInFuture = new Date()
    oneDayInFuture.setDate(oneDayInFuture.getDate() + 1)
    const arrayToDisplay = data.filter(d => oneDayInFuture >
        Date.parse(d.time) && d.place === city)
    return arrayToDisplay
}


async function postNewData(data) {
    let res = await makeTheCallPost(data)
    return res;
}

//call for data on server
async function makeTheCallPost(data) {
    fetch('http://localhost:8080/data',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(function(res){ 
        console.log(res)
        return res
    })
    .catch(function(res){ console.log(res) })
}