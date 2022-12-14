document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;




function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle("open");  //toggles hamburger button according to page size.
	document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


let todayDate = Date.now();
let lastDate = (window.localStorage.getItem("lastVisit"));

let numDays = todayDate - lastDate;

if (lastDate !== null) {
	let day = (numDays / (1000 * 60 * 60 * 24));


	document.querySelector(".different").textContent = day.toFixed(0);
}
else {
	document.querySelector(".different").textContent = "First";
}

window.localStorage.setItem("lastVisit", todayDate);











