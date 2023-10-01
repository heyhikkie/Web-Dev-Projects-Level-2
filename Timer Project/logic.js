const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

// Converting second,minute,hour,day in miliseconds
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  // Generating current Date in mm/dd/yyyy
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
  now = `${mm}/${dd}/${yyyy}`;

  // Taking Target Date from User
  const enteredDay = prompt("Enter Day").padStart(2, "0");
  const enteredMonth = prompt("Enter Month").padStart(2, "0");
  let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

  //   Checking if Target date is for next year
  if (now > targetDate)
    targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;

  const intervalId = setInterval(() => {
    // coverting targetDate in Miliseconds
    const timer = new Date(targetDate).getTime();
    // Taking current Date in Miliseconds
    const today = new Date().getTime();

    // Finding Difference target Date and today's date
    const difference = timer - today;

    // finding left days,hours,minutes,seconds
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    // Showing Timer in DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    // Stop Set Interval after reaching the target time
    if (difference < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(intervalId);
    }
  }, 0);
};

timerFunction();