function doInputOutput(tempF, speed) {
  var tempF = parseFloat(document.getElementById("tempInput").value);
  var speed = parseFloat(document.getElementById("windInput").value);
  var result = windChill(tempF, speed);

  document.getElementById("output").innerHTML =
    "The windchill factor is " + result.toFixed(2);
}
function windChill(t, s) {
  // var t;
  // var s;
  result =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);
  return result;
}
