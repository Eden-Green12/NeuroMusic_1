var array1 = [
  "./page5.html",
  "./page6.html",
  "./page7.html",
]


function start_Timer(duration, display) {

  var minTimer = duration,
    minutes, seconds;

  setInterval(function() {
    var visualTimer = document.getElementById('visual-timer')
    visualTimer.classList.add("height-change");

    // minutes = parseInt(minTimer / 60)
    seconds = parseInt(minTimer % 60);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    //display.textContent = minutes + ":" + seconds;
    display.textContent = seconds;

    if (--minTimer < 0) {
      visualTimer.classList.remove("height-change");
      minTimer = duration;
      next_Part();
    }

  }, 1000);
}

window.onload = function() {
  var oneMin = 59 * 1,
    display = document.querySelector('#time');
  start_Timer(oneMin, display);
};

function next_Part() {
  // // var currURL = location.href;
  // // alert (currURL);
  // var val = localStorage.getItem("element_value");
  // if (val == null ){
  //   console.log("in if ",element);
  //   window.location.href = array1[element];
  //   element = element+1;
  //   localStorage.setItem("element_value",element);
  // }else{
  //   console.log("in else "+val);
  //   window.location.href = array1[val];
  //   val = val+1;
  //   localStorage.setItem("element_value",val);
  // }
  window.location.href = "./page5.html";

}
