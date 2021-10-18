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

firebase.initializeApp(firebaseConfig);

var jsonArr1;
var parsedArr1;
var participant_id;
var id ;

// console.log('hey');
participant_id = localStorage.getItem("id");
parsedArr1 = JSON.parse(participant_id);
// console.log(parsedArr1);

// window.onload = function() {
//   console.log('hey');
//   participant_id = localStorage.getItem("id");
//   parsedArr1 = JSON.parse(participant_id);
//   console.log(parsedArr1);
//   intro_box.classList.add("active");
// };

var messagesRef = firebase.database().ref('Registration_Data').child(parsedArr1).child("pg1");
var messagesRef1 = firebase.database().ref('Registration_Data').child(parsedArr1).child("pg2");
var messagesRef2 = firebase.database().ref('Registration_Data').child(parsedArr1).child("pg3");

const start_button = document.querySelector(".start .button");
const start_text = document.querySelector(".start .input_id");
const next_button = document.querySelector(".introduction .next_button");
const next_button1 = document.querySelector(".pre-screening-form .next_button");
const next_button2 = document.querySelector(".scale1 .next_button1");

const intro_box = document.querySelector(".introduction");
const pre_screen = document.querySelector(".pre-screening-form");
const scale1 = document.querySelector(".scale1");

// variables of page 1

var agree_value = document.getElementById("I_agree");

// variable of page 2
var que_1_1 = document.getElementById("ques_1_1"); // Yes
var que_1_2 = document.getElementById("ques_1_2"); // No
var que_1_text = document.getElementById("ques_1_text"); // text area

var ques_2_1 = document.getElementById("ques_2_1"); // Yes
var ques_2_2 = document.getElementById("ques_2_2"); // No
var que_2_text = document.getElementById("ques_2_text"); // text area

var ques_3_1 = document.getElementById("ques_3_1"); // Yes
var ques_3_2 = document.getElementById("ques_3_2"); // No

var ques_4_1 = document.getElementById("ques_4_1"); // Yes
var ques_4_2 = document.getElementById("ques_4_2"); // No

var ques_5_1 = document.getElementById("ques_5_1"); // Yes
var ques_5_2 = document.getElementById("ques_5_2"); // No

var ques_6_text = document.getElementById("ques_6_text");

var ques_7_1 = document.getElementById("ques_7_1");
var ques_7_2 = document.getElementById("ques_7_2");
var ques_7_3 = document.getElementById("ques_7_3");
var ques_7_4 = document.getElementById("ques_7_4");
var ques_7_5 = document.getElementById("ques_7_5");
var ques_7_6 = document.getElementById("ques_7_6");
var ques_7_7 = document.getElementById("ques_7_7");

var ques_7_text = document.getElementById("ques_7_text");

// variable of page 3
var opt_val = [];
var opt_val1;

var options = [
  option1 ,
];

var option1 = document.getElementsByName("option1");
var option2 = document.getElementsByName("option2");
var option3 = document.getElementsByName("option3");
var option4 = document.getElementsByName("option4");
var option5 = document.getElementsByName("option5");
var option6 = document.getElementsByName("option6");
var option7 = document.getElementsByName("option7");
var option8 = document.getElementsByName("option8");
var option9 = document.getElementsByName("option9");
var option10 = document.getElementsByName("option10");
var option11 = document.getElementsByName("option11");
var option12 = document.getElementsByName("option12");
var option13 = document.getElementsByName("option13");
var option14 = document.getElementsByName("option14");
var option15 = document.getElementsByName("option15");
var option16 = document.getElementsByName("option16");
var option17 = document.getElementsByName("option17");
var option18 = document.getElementsByName("option18");
var option19 = document.getElementsByName("option19");
var option20 = document.getElementsByName("option20");
var option21 = document.getElementsByName("option21");



// start_button.onclick = () => {
//   console.log("set the id");
//   start_button.style.display = "none";
//   start_text.style.display = "none";
//   intro_box.classList.add("active");
//   id = localStorage.getItem('id');
// }

// console.log('before setting the id: ', id);
intro_box.classList.add("active");
// introduction next button
next_button.onclick = () => {
  sendMessage(parsedArr1, agree_value.checked );
  intro_box.classList.remove("active");
  pre_screen.classList.add("active");
  document.documentElement.scrollTop = 0;
}

// pre-screening next button
next_button1.onclick = () => {
  var select_val1 = call_Select(que_1_1,que_1_2);
  var select_val2 = call_Select(ques_2_1,ques_2_2);
  var select_val3 = call_Select(ques_3_1,ques_3_2);
  var select_val4 = call_Select(ques_4_1,ques_4_2);
  var select_val5 = call_Select(ques_5_1,ques_5_2);
  var select_val7 = call_Array(
    ques_7_1,ques_7_2,ques_7_3,ques_7_4,ques_7_5,ques_7_6,ques_7_7
  );
  sendMessage1(
    select_val1 , que_1_text.value,
    select_val2 , que_2_text.value,
    select_val3 , select_val4, select_val5,
    ques_6_text.value , select_val7, ques_7_text.value,
  );
  pre_screen.classList.remove("active");
  scale1.classList.add("active");
  document.documentElement.scrollTop = 0;

}

// scale1 next button
next_button2.onclick = () => {
  var by1 = make_Array(option1);
  opt_val.push(by1);
  var by2 = make_Array(option2);
  opt_val.push(by2);
  var by3 = make_Array(option3);
  opt_val.push(by3);
  var by4 = make_Array(option4);
  opt_val.push(by4);
  var by5 = make_Array(option5);
  opt_val.push(by5);
  var by6 = make_Array(option6);
  opt_val.push(by6);
  var by7 = make_Array(option7);
  opt_val.push(by7);
  var by8 = make_Array(option8);
  opt_val.push(by8);
  var by9 = make_Array(option9);
  opt_val.push(by9);
  var by10 = make_Array(option10);
  opt_val.push(by10);
  var by11 = make_Array(option11);
  opt_val.push(by11);
  var by12 = make_Array(option12);
  opt_val.push(by12);
  var by13 = make_Array(option13);
  opt_val.push(by13);
  var by14 = make_Array(option14);
  opt_val.push(by14);
  var by15 = make_Array(option15);
  opt_val.push(by15);
  var by16 = make_Array(option16);
  opt_val.push(by16);
  var by17 = make_Array(option17);
  opt_val.push(by17);
  var by18 = make_Array(option18);
  opt_val.push(by18);
  var by19 = make_Array(option19);
  opt_val.push(by19);
  var by20 = make_Array(option20);
  opt_val.push(by20);
  var by21 = make_Array(option21);
  opt_val.push(by21);
  sendMessage2(opt_val);
  scale1.classList.remove("active");
}

function sendMessage(id,value) {
  let newFormMessage = messagesRef.push();
  newFormMessage.set({
    participant_id: id,
    I_Agree : value,
  });
}

function sendMessage1(value1, text1 ,
  value2 , text2 ,
  value3, value4, value5,
  text6, value7 , text7
)
  {
  let newFormMessage = messagesRef1.push();
  newFormMessage.set({
    Question1: value1,
    Question1_text: text1,
    Question2: value2,
    Question2_text: text2,
    Question3: value3,
    Question4: value4,
    Question5: value5,
    Question6: text6 ,
    Question7: value7,
    Question7_text: text7,
  });
}

function sendMessage2(opt_value) {
  let newFormMessage = messagesRef2.push();
  newFormMessage.set({
    Answers: opt_value,
  });
}

function call_Select(que1,que2){
  if (que1.checked == true){
    return "Yes";
  }
  else if (que2.checked == true) {
    return "No";
  }
  else{
    return "Not Selected"
  }
}

function call_Array(ques_7_1,ques_7_2,ques_7_3,ques_7_4,ques_7_5,ques_7_6,ques_7_7){
  var store_val = [];
  if (ques_7_1.checked == true) {
    store_val.push(ques_7_1.value);
  }
  if (ques_7_2.checked == true) {
    store_val.push(ques_7_2.value);
  }
  if (ques_7_3.checked == true) {
    store_val.push(ques_7_3.value);
  }
  if (ques_7_4.checked == true) {
    store_val.push(ques_7_4.value);
  }
  if (ques_7_5.checked == true) {
    store_val.push(ques_7_5.value);
  }
  if (ques_7_6.checked == true) {
    store_val.push(ques_7_6.value);
  }
  if (ques_7_7.checked == true) {
    store_val.push(ques_7_7.value);
  }

  return store_val;
}



function make_Array(option){
  if (option[0].checked == true){
    opt_val1 = option[0].value;
  }
  else if (option[1].checked == true){
    opt_val1 = option[1].value;
  }
  else if (option[2].checked == true){
    opt_val1 = option[2].value;
  }
  else if (option[3].checked == true){
    opt_val1 = option[3].value;
  }
  else{
    opt_val1 = "not selected";
  }
  return opt_val1;
}
