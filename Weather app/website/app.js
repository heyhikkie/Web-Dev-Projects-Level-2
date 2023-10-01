// Personal API Key for OpenWeatherMap API
const APIKey = '<your-api-key>'; //replace your personal key with <your-api-key> (inside quotes)
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const appData = {};

//DOM Elements
const enteredZip = document.getElementById('zip');
const userFeelings = document.getElementById('feelings');
const generate = document.getElementById('generate');

//get the data from weatther api
const getWeatherData = async function (url='', key='', zip='') {
    const response = await fetch(`${url}zip=${zip}&units=metric&appid=${key}`);
    try {
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("Api error: ");
    }
}

//send the data to the server
const postWeatherData = async function(url='', data){
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.status;
    }catch(err){
        console.log('Error in sending the data to the server: ', err);
    }
}
//getting the project data from the server
const getProjectData = async function(url=''){
    const response = await fetch(url);
    try{
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log("Error in getting the data from server: ", err);
    }
}

//adding eventListener to the check button

generate.addEventListener('click', ()=>{
    const zip = enteredZip.value;
    getWeatherData(baseURL, APIKey, zip)
    .then((data)=>{
        prepareAppData(data);
        postWeatherData('/post-weather-data', appData);
    })
    .then(()=>{
        return getProjectData('/all');
    })
    .then((data)=>{
        updateUI(data);
    })
    .catch((err)=>{
        console.log("Error: ", err);
    })

});

//updating ui
function updateUI(data){

    //getting the elements by id from DOM
    const container = document.getElementById('container');
    const entryHolder = document.getElementById('entryHolder');
    const name = document.getElementById('name');
    const country = document.getElementById('country');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const temp = document.getElementById('temp');
    const feels_like = document.getElementById('feels_like');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');
    const feelings = document.getElementById('content');
    
    container.style.width = '90%';
    entryHolder.style.display = 'block';
    name.innerHTML = data.data.name;
    country.innerHTML = data.data.country;
    date.innerHTML = data.data.date;
    time.innerHTML = data.data.time;
    temp.innerHTML = data.data.temp;
    feels_like.innerHTML = data.data.feels_like;
    humidity.innerHTML = data.data.humidity;
    pressure.innerHTML = data.data.pressure;
    feelings.innerHTML = data.data.feelings;

}

//preparing app data
function prepareAppData(data){
    const dateTime = getDateAndTime(data.dt);

    appData['name'] = data.name;
    appData['country'] = data.sys.country;
    appData['time'] = dateTime[0];
    appData['date'] = dateTime[1];
    appData['temp'] = data.main.temp;
    appData['desc'] = data.weather[0].description;
    appData['feels_like'] = data.main.feels_like;
    appData['pressure'] = data.main.pressure;
    appData['humidity'] = data.main.humidity;
    appData['feelings'] = userFeelings.value;
}


//get date and time
function getDateAndTime(unix) {
        const date = new Date(unix*1000);
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
          
        // Format time as "hour:minutes"
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const hour = date.getHours();
        const period = hour >= 12 ? 'PM' : 'AM';
        const hour12 = (hour % 12 || 12).toString().padStart(2, '0');
        const time = hour12 + ':' + minutes + ' ' + period;

        // Format date as "date month year"
        const day = String(date.getDate()).padStart(2, '0');
        const month = date.getMonth();
        const year = date.getFullYear();
        const formattedDate = day + ' ' + months[month] + ' ' + year;

        return [time, formattedDate];
}

