var gradient = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");

// 이벤트 연결
// input 이벤트 : 요소의 값이 변경될때 동작
color1.addEventListener("input", grad);
color2.addEventListener("input", grad);

function grad(){
    gradient.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    h3.textContent = gradient.style.background;
}
