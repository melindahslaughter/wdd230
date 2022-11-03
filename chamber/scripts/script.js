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

document.querySelector(".dateTime").value = fulldate; //add date to hidden page.


function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let dayOfWeek = new Date();
if (dayOfWeek.getDay() == 2 || dayOfWeek.getDay() == 3) {

	document.querySelector('.text-block').style.display = "block"

}

// const input = document.querySelector(".title")
// const regEx = /^[a-zA-z- ] {7}$/;
// if (input.ariaValueMax.match(regEx)) {
// 	return true;
// }
// else {
// 	alert("Please enter a valid input.");
// 	return false;
// }









