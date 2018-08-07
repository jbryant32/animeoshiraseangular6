var highlighterForSelect
var AtoZ
var inTheaters
var comingSoon
$(document).ready(() => {
    highlighterForSelect = document.getElementById("selection-highlighter");
    AtoZ = document.getElementById("AtoZ");
    inTheaters = document.getElementById("in-theater");
    comingSoon = document.getElementById("coming-soon");
})
console.log(navigator.userAgent)


// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     inTheaters.getElementsByTagName("a")[0].addEventListener("touchstart", () => { slideNowInTheaters();  console.log("touchstart") }, false)
//     AtoZ.getElementsByTagName("a")[0].addEventListener("touchstart", () => {  slideInHome(); }, false)
// }
// else {
//     inTheaters.getElementsByTagName("a")[0].addEventListener("click", () => { slideInHome() }, false)
//     AtoZ.getElementsByTagName("a")[0].addEventListener("click", () => { slideNowInTheaters() }, false)
// }


function slideInHome() {
    highlighterForSelect.style.left = "70%";
    AtoZ.style.left = "0%";

    console.log("coming soon");
}

function slideNowInTheaters() {
    highlighterForSelect.style.left = "35%";

    AtoZ.style.left = "100%";
    console.log("in theaters");
}

function slideComingSoon(){
    highlighterForSelect.style.left = "0%";

    AtoZ.style.left = "200%";
    console.log("coming soon");
}
