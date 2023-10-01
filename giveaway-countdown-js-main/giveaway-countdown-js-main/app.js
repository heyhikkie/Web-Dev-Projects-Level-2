'use strict';

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];




const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format p");

let today = new Date();
let tempYear = today.getFullYear();
let tempMonth = today.getMonth();
let tempDay = today.getDate();

// specific date
//let futureDate = new Date(2030,6,16,12,30,0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;



// Time in MS
// 1s = 1000ms
// 1m = 60s
// 1hr = 60min
// 1d = 24h
// values in ms
//

const futureTime = futureDate.getTime();


//Identify current time
function getRemainingTime() {
const today = new Date().getTime();
const timeDifference = futureTime - today;
const oneDay = 24* 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = timeDifference/oneDay;
days = Math.floor(days);
let hours = Math.floor((timeDifference % oneDay)/oneHour);
let minutes = Math.floor((timeDifference % oneHour)/oneMinute);
let seconds = Math.floor((timeDifference % oneMinute)/1000);


//set valiues in html
const values = [days, hours, minutes, seconds];

function format(item) {
    if(item < 10) {
        return (item = `0${item}`);
    }
    return item;
}

items.forEach(function (item, index){
    item.innerHTML = values[index];
});
let countdown = setInterval(getRemainingTime, 1000);

if(timeDifference <= 0) {
    clearInterval(countdown);
}

}
//Identify current time

getRemainingTime();
