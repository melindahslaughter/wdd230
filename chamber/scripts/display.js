

let dayOfWeek = new Date();
if (dayOfWeek.getDay() == 2 || dayOfWeek.getDay() == 3) {   //shows banner on tuesday and wednesday

    document.querySelector('.text-block').style.display = "block"

}