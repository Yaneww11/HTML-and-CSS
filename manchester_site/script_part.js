let table = document.querySelector("table")
const d = new Date();
let day = d.getDate();
console.log(day)
let week = parseInt(((day - 1) / 7) + 1);
let day_week;
if (day % 7 === 0){
    day_week = 6
}
else{
    day_week = (day % 7) - 1;
}

active_day = table.rows[week].cells[day_week];
active_day.style.backgroundColor= "#32CD32";

for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j <= 6; j++) {
        if (i === 2 && j === 0) {
            set_img(table.rows[i].cells[j], "url('/images/wigan.png')")
        }
        if(i === 3 && j === 5){
            set_img(table.rows[i].cells[j], "url('/images/Eastleigh_fc.png')")
        }
        if(i === 2 && j === 6){
            set_img(table.rows[i].cells[j], "url('/images/tottenham.png')")
        }

    }
}
let button = document.getElementById("button_stadium");
button.addEventListener("click", changeBackground);

let button_back = document.getElementById("button_back");
button_back.addEventListener("click", back);


function set_img(element, photo_url) {
    element.innerHTML= "";
    element.style.backgroundImage = photo_url;
    element.style.backgroundSize= "cover";
}
function changeBackground(){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('/images/old-trafford-stadium.jpg')";
    document.getElementsByClassName("row")[0].style.visibility = "hidden";
    document.getElementsByClassName("button")[0].style.display= "none";
    document.getElementsByTagName("header")[0].style.visibility = "hidden";
    document.getElementById("button_back").style.display = "inline-block";

}
function back(){
    let change_background = prompt("Do you want to change background with stadium", "No");
    if (change_background !== "Yes"){
        document.getElementsByTagName("body")[0].style.backgroundImage= 'url("/images/red-yellow-backgroundwebp.webp"';
    }
    document.getElementsByClassName("row")[0].style.visibility = "visible";
    document.getElementsByClassName("button")[0].style.display= "inline-block";
    document.getElementsByTagName("header")[0].style.visibility = "visible";
    document.getElementById("button_back").style.display = "none";
}
