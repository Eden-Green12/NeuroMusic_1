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
  window.location.href = "./page7.html";

}
