const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
  date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let hrotatedeg = h * 30 + m * 0.5;
  let mrotatedeg = m * 6 + s * 0.1;
  let srotatedeg = s * 6;

  hour.style.transform = "rotate(" + hrotatedeg + "deg)";
  minute.style.transform = "rotate(" + mrotatedeg + "deg)";
  second.style.transform = "rotate(" + srotatedeg + "deg)";
}, 1000);
