
let todayDate = Date.now();
let lastDate = (window.localStorage.getItem("lastVisit"));

let numDays = todayDate - lastDate;

let day = (numDays / (1000 * 60 * 60 * 24));
document.querySelector(".different").textContent = day.toFixed(0);

window.localStorage.setItem("lastVisit", todayDate);











