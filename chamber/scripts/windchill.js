const input1 = document.querySelector("#tempInput");
const input2 = document.querySelector("#windInput");

// const result = windChill(tempF, speed);

let t = parseFloat(input1.textContent);
let s = parseFloat(input2.textContent);



// function windChill(t, s) {
if (t > 50 || s < 3) {
  document.getElementById("output").innerHTML = "N/A"
}
else {
  windchill =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);
}
document.getElementById("output").innerHTML = windchill.toFixed(2);


// }

