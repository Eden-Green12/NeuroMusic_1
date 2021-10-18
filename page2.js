var score_value = localStorage.getItem("user_score");
var load = document.getElementById("loading");
var paired = document.getElementById("paired");
var next_btn = document.getElementById("next_btn");

var score = document.getElementById("score");
var pairing = document.getElementById("pairing");

window.onload = function() {
  document.getElementById("score").innerHTML = "Your total amount is: " + score_value;
};
setTimeout(function() {
  show();
}, 7000);

function show() {
  load.style.display = "none";
  score.style.display = "none";
  pairing.style.display = "none";
  paired.classList.add("show");
  setTimeout(function() {
    show2();
  }, 3000);

}
function show2(){
  next_btn.classList.add("show");
}
