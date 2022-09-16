
const nyear = new Date();
document.getElementById(
  "copyyear"
).textContent = ` ${nyear.getFullYear()} | Melinda Slaughter | Sheridan, Wyoming`;


const time = new Date(document.lastModified);

document.getElementById("copyright").textContent = ` Last updated: ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}
 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
