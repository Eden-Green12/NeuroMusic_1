// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNYgrO4pFcSYEmsGD20WhRdrzOYyBGLok",
  authDomain: "neuromusic-7c5ba.firebaseapp.com",
  databaseURL: "https://neuromusic-7c5ba-default-rtdb.firebaseio.com",
  projectId: "neuromusic-7c5ba",
  storageBucket: "neuromusic-7c5ba.appspot.com",
  messagingSenderId: "1062038280062",
  appId: "1:1062038280062:web:595bae45a5b4e8416f052f",
  measurementId: "G-8XFW8FP1Z3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var id = localStorage.getItem('id');
var messagesRef = firebase.database().ref('Data').child(id).child("Block1");

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// random values for the amount
var num1 = [
  532, 1438, 267, 136, 105, 612, 474, 1770, 1662, 932, 1285,
  1433, 1463, 659, 571, 925, 1818, 1419, 1274, 443, 1521, 937, 870, 1956
]
//random values for the shocks
var num2 = [4, 14, 13, 9, 11, 3, 10, 6, 15, 5, 16, 13, 10, 12, 11]

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
// exit_btn.onclick = () => {
//   info_box.classList.remove("activeInfo"); //hide info box
// }

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  // alert("Please allow the browser to play music");
  startTimer(6); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
}

let timeValue = 6;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  //if (que_count < questions.length - 1) { if question count is less than total question length
  //if (que_count < num.length - 1) {
  if (que_count < 14) {
    document.getElementById("base-timer-label").innerHTML = "07";
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb valoptionSelected()ue to queCounter
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    stopMusic();
    showResult(); //calling showResult function
  }
}

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  // let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
  // let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
  //   '<div class="option"><span>' + questions[index].options[1] + '</span></div>';

  let que_tag = '<span>' + num[index] + '. ' + 'You recieve ' + '<span>' + num2[Math.floor(Math.random() * num2.length)] + '</span>' + ' shocks' + '<br>' + ' and your partner recieves ' + '<span>' + num1[Math.floor(Math.random() * num1.length)] + '</span> Rs' +
    '<br> Do you think this is a morally acceptable agreement? </span>';
  let option_tag = '<div class="option"><span>' + questions[0].options[0] + '</span></div>' +
    '<div class="option"><span>' + questions[0].options[1] + '</span></div>';

  // storing the text of the question here.
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // question storing done
  question = document.getElementById('question').textContent;
  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    //option[i].setAttribute("onclick", "optionSelected(this)");
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}


//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  // console.log(answer);
  let userAns = answer.textContent; //getting user selected option
  let time_value = timeCount.textContent;
  let audio_name = path_of_track;
  console.log(question + "  " + userAns + " " + time_value + audio_name);

  sendData(question, userAns, time_value, audio_name);
  //here the user has selected an answer. we have to store this along with the question in the
  //firebase

  //let correcAns = questions[que_count].answer;
  //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  // if (userAns == correcAns) { //if user selected option is equal to array's correct answer
  //   userScore += 1; //upgrading score value with 1
  //   //answer.classList.add("correct"); //adding green color to correct selected option
  //   answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
  //   console.log("Correct Answer");
  //   console.log("Your correct answers = " + userScore);
  // } else {
  //   answer.classList.add("incorrect"); //adding red color to correct selected option
  //   answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
  //   console.log("Wrong Answer");
  //
  //   for (i = 0; i < allOptions; i++) {
  //     if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
  //       option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
  //       option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
  //       console.log("Auto selected correct answer.");
  //     }
  //   }
  // }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
    //console.log("answer1"+answer); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  // if (userScore > 3) { // if user scored more than 3
  //   //creating a new span tag and passing the user score number and total question number
  //   let scoreTag = '<span>and congrats! , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
  //   scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  // } else if (userScore > 1) { // if user scored more than 1
  //   let scoreTag = '<span>and nice , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
  //   scoreText.innerHTML = scoreTag;
  // } else { // if user scored less than 1
  //   let scoreTag = '<span>and sorry , You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
  //   scoreText.innerHTML = scoreTag;
  // }
}

// Timer is here
function startTimer(time) {
  //counter = setInterval(timer, 1000);
  counter = setInterval(timer, 1000);

  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--;
    let addZero = timeCount.textContent;
    timeCount.textContent = "0" + addZero;
    if (time < 0) { //if timer is less than 0 move to the next quesion immediately
      clearInterval(counter); //clear counter

      timeText.textContent = "Time Off"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items

      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");

      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }

  }

}

function startTimerLine(time) {
  counterLine = setInterval(timer, 13);

  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) { //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + num.length + '</p> Questions</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}

//send data part

function sendData(question, userAns, time_value, audio_name) {
  let newFormMessage = messagesRef.push();
  newFormMessage.set({
    Question: question,
    Answer: userAns,
    TimeStamp: time_value,
    Music_name: audio_name,
  });
}

// Music Part
var element;
var arr_value;
var audio;
var parsedArr;

document.getElementById("continue").addEventListener("click", playMusic);

function playMusic() {
  call_Music();
  arr_value = localStorage.getItem("array");
  parsedArr = JSON.parse(arr_value);
  console.log("parsedarry 1: "+parsedArr);
  element = parsedArr[0];
  path_of_track = track_list[element].path;
  audio = new Audio(path_of_track);
  // console.log(element,path_of_track);
  audio.play();
}

function stopMusic() {
  audio.pause();
}

//Timer
